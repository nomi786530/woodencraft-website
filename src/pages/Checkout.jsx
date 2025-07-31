import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    clearCart();
    alert('Your order has been placed successfully!');
    navigate('/thankyou');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded border"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="border-t pt-4 space-y-2">
              <p className="text-lg">
                Subtotal:{' '}
                <span className="font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </p>
              <p className="text-lg">
                Tax (5%):{' '}
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </p>
              <p className="text-xl font-bold">
                Total:{' '}
                <span className="text-green-600">${total.toFixed(2)}</span>
              </p>
              <button
                onClick={handlePlaceOrder}
                className="w-full mt-4 bg-[#8B5E3C] py-2  text-white rounded hover:bg-[#6B4F3B] transition"
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
