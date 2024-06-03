let express = require("express");
let productRouter = express.Router({}),
ProductDataModel = require("../DataModels/ProductDataModel");

//product api's
productRouter.post('/api/saveproduct',(req, res)=>{
    console.log("product data ", req.body);

    let productDataObject = new ProductDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    productDataObject.save()
        .then((newProductData)=>{       
                res.send(newProductData); //if product successfully saved we will get the mongodb unique _id
        })
        .catch((err)=>{
                console.log("err ", err)
                res.send("Error in product saving");
        })
    })

productRouter.get('/api/getproducts',(req, res)=>{
    //fetch all the products saved in product collection
    ProductDataModel.find()
    .then((products)=>{ //error first callback
        res.send(products);
        })
    .catch((err)=>{
        console.log(err)
        res.send("Error in getting products");
    })
})


module.exports = productRouter;