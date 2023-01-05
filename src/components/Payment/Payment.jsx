import React from 'react';
import './Payment.css';
import StripeCheckout from "react-stripe-checkout";

function App() {

  const [Price] = React.useState([""]);

  function makePayment(token,addresses){
    console.log({ token,addresses})
  }

  return (
    <div className="App">
      <header className="App-header">

        <StripeCheckout

        stripeKey="pk_test_51LX8KISGIfxa0a745wlJB5bOf4ycKGCtOqOmBKvOYxsjgroFjWlvEMUNJ6EKFSqFGpQ6A33kQPKFNupwbUGB7son00yfq36e9Z"

        token={makePayment}>

          <button className="btn-large blue m4">Pay{Price}</button>
        </StripeCheckout>

      </header>
    </div>
  );
}

export default App;