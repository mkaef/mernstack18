import * as ActionTypes from "../actionTypes";

const InitialState = {
    Product : {
        name : "",
        price : "",
        desc : "",
        rating : ""
        
    },
    Products: []
}

//write callback/ reducer to generate new state upon action change
let productReducer = (state = InitialState, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {
        
        case ActionTypes.ADD_PRODUCTS_TO_STORE :
            //..state - products[] and defaultProduct
            return { ...state, Products : action.payload.products } //we update products and then retrun a new state


        default:
            return state
    }
}

export default productReducer;