// Checkout.js
import PaypalCheckoutButton from './PaypalCheckoutButton';

const Checkout = ({cart}) => {
  console.log(cart);
  const items = cart.map((item) => {
    //return an object formatted for a paypal product checkout
    return ({
      name: item.name,
      quantity: item.quantity,
      sku: item.id,
      category: "PHYSICAL_GOODS",
      description: item.description + ", " + item.option1[item.option1idx],
      unit_amount: {
          currency_code: "USD",
          value: item.price[item.option1idx]
      }
    })
  });

  function getTotal(cart) {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price[item.option1idx];
    });
    return total;
  }

  return (
      <div className="paypal-button-container">
        <PaypalCheckoutButton cart={items} total={getTotal(cart)} />
      </div>
  );
};

export default Checkout;