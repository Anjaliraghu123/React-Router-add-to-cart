import { useCart } from "../CartContext/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="border rounded-lg p-4 shadow">
      <img src={product.image} className="h-40 mx-auto" alt="product" />
      <h3 className="font-semibold mt-2">{product.title}</h3>
      <p className="text-sm">${product.price}</p>

      {isInCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-500 text-white px-4 py-2 mt-3 rounded"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
