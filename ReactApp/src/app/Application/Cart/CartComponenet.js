import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../../state/Cart/cartAction";


let CartComponent = (props) => {

    let cartList = useSelector((state)=>state.cartReducer);

    let user = useSelector((state)=>state.userReducer.user)

    let loading = useSelector((state)=>state.productReducer.Loading)

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let dispatchToSaveCart = useDispatch()

    let clickToSaveCart = (cart, userId)=>{
        if(!userId){
            alert("Please sign in to save the cart!!!")
        }else{
            dispatchToSaveCart(saveCartToDb(cart, userId))
        }
    }

    let navigate = useNavigate();
    let func = (evt)=>{
        navigate('/checkout');
        evt.preventDefault();
    }

    return(
        <div className="col-md-12">
            <h1>Cart Component</h1>
            {
                cartList && cartList.length >= 1 ? 
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : //bydefault false as boolean default is false
                                        <>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map((item) => {
                                    //return item.name
                                    return <CartItemComponent item={item} readOnly={props.readOnly} key={item._id}/>
                                })
                            } 
                        </tbody>
                    </table>
                    <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />

                    {
                        props.readOnly ? <></> : 
                            <>
                                {loading ?"" :
                                    <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                            Save Cart
                                    </button>
                                }
                                <button onClick={func} >
                                    Go To Checkout
                                </button> 
                            </> 
                    }
                </> 
                : 
                <h4>Please add product to cart</h4>
            }
        </div> 
    )
}

export default CartComponent;