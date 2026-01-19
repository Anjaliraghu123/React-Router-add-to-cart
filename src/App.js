import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Products from "./Pages/Products";
import Cart from "./Pages/cart";
import { CartProvider } from "./CartContext/CartContext";

function App() {
  return (
    <CartProvider>
   <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />   
      </Routes>
   </BrowserRouter>
    </CartProvider>
  );
}

export default App;
