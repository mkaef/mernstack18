import * as actionTypes from "../actionTypes";
import axios from "axios";

//product calls
//Product Action and Server Call

export const addProduct = (products)=>{
    return {
        type : actionTypes.ADD_PRODUCTS_TO_STORE,
        payload : {products}
    }
}

export const saveProduct = (product)=>{
    console.log("Product ", product);

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/product/api/saveProduct",
            product
        )
        .then((allData)=>{
            let productresp = allData.data;
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};



export const fetchProducts = ()=>{
    console.log("Product ");

    return function (dispatch) {
        //dispatch(loading(true));

        axios.get("http://localhost:9000/product/api/getproducts")
        .then((allProducts)=>{
            let productresp = allProducts.data;
            console.log("get products response ", productresp);
            //dispatch(loading(false));
            dispatch(addProduct(productresp))
        })
        .catch((err)=>{
            console.log("Error While Saving Product", err)
        })
    }
};