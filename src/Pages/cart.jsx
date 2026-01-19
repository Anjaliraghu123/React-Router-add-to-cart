import { useCart } from "../CartContext/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-4 border-b pb-2">
          <div>
            <h4>{item.title}</h4>
            <p>${item.price} x {item.quantity}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
      <h3>Discount (10%): -${discount.toFixed(2)}</h3>
      <h2 className="font-bold text-xl">
        Final Price: ${finalPrice.toFixed(2)}
      </h2>
    </div>
  );
};

export default Cart;
