const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const stripe = require('stripe')('sk_test_51He1P4Jz7nbfLVoYTOkTgJ3CXDoqeiI3npg8CL1enAHoJX2xHewOBVNeVXEfaSs0FbLG7Ys3pycMi6sOP23Lu6dX00PolnchgH');

router.post('/payment', (req, res) => {
  const { product, token } = req.body;
  console.log('Products', product);
  console.log('Price', product.price);
  const idempontencyKey = uuid()

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: `Purchase of product.name`,
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country
        }
      }

    }, { idempontencyKey })
  })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

module.exports = router;