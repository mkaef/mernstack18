/*

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { AddToCart, FetchUserCart } from "../../../state/Cart/cartAction";

const CartComponent = ()=>{

   // Get product id from route params
  const productId = useParams().productId;

  // Get search params
  const [searchParams] = useSearchParams();

  // Get quantity from search params
  const quantity = searchParams.get("quantity");

  // for dispatching actions
  const dispatch = useDispatch();

  // Get current user from store
  const user = useSelector((store) => store.userReducer.user);

  // Get current cart items from store
  const cartItems = useSelector((store) => store.cartReducer.cart.items)

  useEffect(() => {
    // fetch user cart if it is not dummy
    if (user && user._id && cartItems.length === 0) {
      dispatch(FetchUserCart(user._id));
    }

    // if adding product to cart
    if(productId){
      dispatch(AddToCart(productId, quantity));
    }
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <CartItemComponent />
        </div>
        <div className="col-md-3">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
*/