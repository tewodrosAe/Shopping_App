import express from 'express'
import Stripe from 'stripe'
import dotenv from 'dotenv'
import Order from '../models/orderModel.js'
import Cart from '../models/cartModel.js'
import UserDetail from '../models/userDetailModel.js'

dotenv.config()
const route = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

route.post('/create-checkout-session', async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cart.map(c => ({productId:c._id,quantity:c.quantity, color: c.color, storage: c.storage, name: c.name, image: c.image})))
    },
  });
  const line_items = req.body.cart.map(c => {
    return {
      price_data:{
        currency: 'usd',
        product_data:{
          name: c.name,
          images: [c.image],
          description: c.description.split('.')[0]
        },
        unit_amount: c.price * 100
      },
      quantity:c.quantity,
      
    }
  })
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'ET'],
    },
    billing_address_collection: 'required',
    customer: customer.id,
    success_url: `${process.env.FRONTEND_DOMAIN}/checkout-success`,
    cancel_url: `${process.env.FRONTEND_DOMAIN}/cart`,
  });

  res.send({url: session.url});
  });
  //Create order fun
  const createOrder = async (customer, data) => {
    const Items = JSON.parse(customer.metadata.cart);
    try{
      const datas = {
        userId:customer.metadata.userId,
        customerId:data.customer,
        products: Items,
        subtotal: data.amount_subtotal,
        total: data.amount_total,
        shipping: data.customer_details,
        payment_status: data.payment_status,
        delivery_status: data.delivery_status,
      }
      const newOrder = await Order.create(datas)
      await UserDetail.findOneAndUpdate({_id: datas.userId},
        {'$push': {purchases:newOrder._id}}
        )
      await Cart.deleteOne({userId: datas.userId})
    }catch(e){
      console.log({error: e})
    }
    
  };
  
  //Stripe Webhook
/* const cart = await Cart.findOneAndUpdate({userId},
                {'$push':{products:productDetail}},
                {'new':true, 'upsert': true }
            ) */
  route.post(
    "/webhook",
    express.json({ type: "application/json" }),
    async (req, res) => {
      let data;
      let eventType;
  
      // Check if webhook signing is configured.
      let webhookSecret;
      //webhookSecret = process.env.STRIPE_WEB_HOOK;
  
      if (webhookSecret) {
        // Retrieve the event by verifying the signature using the raw body and secret.
        let event;
        let signature = req.headers["stripe-signature"];
  
        try {
          event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            webhookSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed:  ${err}`);
          return res.sendStatus(400);
        }
        // Extract the object from the event.
        data = event.data.object;
        eventType = event.type;
      } else {
        // Webhook signing is recommended, but if the secret is not configured in `config.js`,
        // retrieve the event data directly from the request body.
        data = req.body.data.object;
        eventType = req.body.type;
      }
  
      // Handle the checkout.session.completed event
      if (eventType === "checkout.session.completed") {
        stripe.customers
          .retrieve(data.customer)
          .then(async (customer) => {
            try {
              // CREATE ORDER
              createOrder(customer, data);
            } catch (err) {
              console.log(err)
            }
          })
          .catch((err) => console.log(err.messag));
      }
  
      res.status(200).end();
    }
  );


export default route