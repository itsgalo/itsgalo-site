import { useState } from "react";
import { useRouter } from 'next/router';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from 'react-redux';
import { emptyCart } from '../redux/cart.slice';

const PayPalCheckoutButton = ({cart, total}) => {
  //const { product } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    dispatch(emptyCart());
    router.push('/thanks');
    // if response is error
    // setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  // if (paidFor) {
  //   // Display success message, modal or redirect user to success page
  //   //alert("Thank you for your purchase!");
  //   redirect('/thanks')
  // }

  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }

  return (
    <PayPalButtons
      style={{
        color: "white",
        layout: "vertical",
        height: 48,
        tagline: false,
        shape: "rect",
        borderRadius: 0,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "itsgalo print shop order",
              //descriptor that appears on customer statement
              soft_descriptor: "ITSGALO",
              //total items array
              items: cart,
              //cart total
              amount: {
                currency_code: "USD",
                value: total,
                breakdown: {
                    item_total: {
                        currency_code: "USD",
                        value: total
                    }
                }
              }
            }
          ]
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);
        handleApprove(data.orderID);
      }}
      onCancel={() => {
        // Display cancel message, modal or redirect user to cancel page or back to cart
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PayPalCheckoutButton;
