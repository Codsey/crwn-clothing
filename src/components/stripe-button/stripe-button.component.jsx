import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J0S3uG4Jvqk5K0B42cIhERz9uHuPw4OrESm60lPBkkW77COmjDTf1vFo1wdRSSmvgCvXwjwUTbczuVyC1WvoNkg00YvT5OfkZ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAdress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
