import express from 'express'
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()
const route = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

route.post('/create-checkout-session', async (req, res) => {
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
    success_url: `${process.env.FRONTEND_DOMAIN}/checkout-success`,
    cancel_url: `${process.env.FRONTEND_DOMAIN}/cart`,
  });

  res.send({url: session.url});
  });
  
  export default route