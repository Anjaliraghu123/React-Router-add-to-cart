import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
            <Link to="cart">Cart</Link>
            <Link to="product">Product</Link>
            </nav>
           <Outlet />

        </div>
    );
}

export default Navbar;
