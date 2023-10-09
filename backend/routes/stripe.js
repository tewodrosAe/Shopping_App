import express from 'express'
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()
const route = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

route.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.YOUR_DOMAIN}/checkout-success`,
      cancel_url: `${process.env.YOUR_DOMAIN}/cart`,
    });
  
    res.send({url: session.url});
  });
  
  export default route