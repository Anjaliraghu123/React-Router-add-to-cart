import { Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <Link to="/" className="font-bold"> Products </Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
