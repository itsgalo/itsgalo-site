import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-js';

function Order() {
  const [order, setOrder] = useState({
    items: [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 30 }
    ],
    currency: 'USD',
    total: 0
  });

  const calculateTotal = () => {
    const total = order.items.reduce((sum, item) => sum + item.price, 0);
    setOrder({ ...order, total });
  };

  const createOrder = () => {
    const items = order.items.map(item => {
      return {
        name: item.name,
        quantity: 1,
        unit_amount: {
          currency_code: order.currency,
          value: item.price.toFixed(2)
        }
      };
    });

    return {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: order.currency,
            value: order.total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: order.currency,
                value: order.total.toFixed(2)
              }
            }
          },
          items
        }
      ]
    };
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      console.log(details);
    });
  };

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={calculateTotal}>Calculate Total</button>
      <p>Total: ${order.total.toFixed(2)}</p>
      <PayPalButton
        createOrder={createOrder}
        onApprove={onApprove}
        options={{ currency: order.currency }}
      />
    </div>
  );
}

export default Order;
