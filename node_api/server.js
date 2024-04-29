//importing express top class and then creating express server

console.log("In srever js")

const express = require('express')
const app = express() // express-app server

app.get('/', function (req, res) {
  res.send('Hello World!!! From Andrew!!')
})

//http://localhost:3000/data?name=jean&session=express
app.get('/data', function (req, res) {
    let queryString = req.query //req.query - is used to read the values present after ? in api path

    console.log(queryString)
    if(queryString.session == "express"){
       res.json({"name" : queryString.name})
    }else{
      res.json(queryString)
    }
    
})

//http://localhost:3000/nameByID/2000
app.get('/nameByID/:id', function (req, res) {
  let queryParam = req.params["id"] //reads the parameter passed in path of API, we can have multiple query params

  console.log(queryParam)
  if(queryParam == "2000"){
     res.send("<h1>User is present</h1>")
  }else{
    res.send("<h1>User is not present</h1>")
  }
  
})

app.listen(3000)

console.log("api lauched at - localhost:3000")