/*

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const CartSummaryComponent = ()=>{
   // Get access to cart
   const items = useSelector((store) => store.cartReducer.cart.items);

   // Get access to products from store
   const products = useSelector((store) => store.productReducer.products);
 
   // state for mapped cart items
   const [cartItems, setCartItems] = useState([]);
 
   // Function to map current cart items to products
   const mapCartItemsToProducts = () => {
     if (products.length > 0) {
       const newCartItems = items.map((item) => {
         const product = products.find(
           (product) => product._id === item.product
         );
         if (product) {
           return {
             productId: product._id,
             name: product.name,
             price: product.price,
             selectdQuantity: item.quantity,
             productQuantity: product.quantity,
             image: product.image.url,
           };
         }
       });
 
       // Update cartItems state
       setCartItems(newCartItems);
     }
   };
 
   useEffect(() => {
     mapCartItemsToProducts();
   }, [items, products])
 
   return (
     <div className="card">
       <ul className="list-group list-group-flush">
         <li className="list-group-item">
           <h3>
             Subtotal ({cartItems.reduce((acc, item) => acc + item.selectdQuantity, 0)})
             items
           </h3>
           ${cartItems
               .reduce((acc, item) => acc + item.selectdQuantity * item.price, 0)
               .toFixed(2)}
         </li>
         <li className="list-group-item">
           <Link to="/checkout" className="btn btn-outline-dark">
             Checkout
           </Link>
         </li>
       </ul>
     </div>
   );
 };
export default CartSummaryComponent;
*/