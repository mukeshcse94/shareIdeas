import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripPays() {
  const [product, setProduct] = useState({
    name: "Reactjs",
    price: 10,
    productBy: 'Facebook'
  })

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const header = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/payment`, {
      method: 'POST',
      header,
      body: JSON.stringify(body)
    }).then(res => {
      console.log('Response', res)
      const { status } = res;
      console.log('Status', status)
    })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      Stripe
      <StripeCheckout
        // stripeKey={process.env.REACT_APP_KEY}
        stripeKey="pk_test_51He1P4Jz7nbfLVoYE9377AbN7XiJcg9JeXrfu1qap2894g8T6hfrNgnMceZRtx1H9n0HxIyHLqyv4lZvqxv3ifMf004hVnMdtT"
        token={makePayment}
        amount={product.price * 100}
        name="Reactjs"
        shippingAddress
        billingAddress
      />
    </div>
  );
}

export default StripPays;
