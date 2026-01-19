import { useCart } from "../CartContext/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b pb-4 mb-4"
        >
          {/* 🖼 Product Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain"
          />

          {/* 📦 Product Info */}
          <div className="flex-1">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-600">${item.price}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          {/* ➕➖ Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-2 border"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-2 border"
            >
              +
            </button>
          </div>

          {/* ❌ Remove Button */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}

      {/* 💰 Price Summary */}
      {cart.length > 0 && (
        <div className="mt-6">
          <p>Total Price: ${total.toFixed(2)}</p>
          <p>Discount (10%): -${discount.toFixed(2)}</p>
          <h3 className="text-xl font-bold">
            Final Price: ${finalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
