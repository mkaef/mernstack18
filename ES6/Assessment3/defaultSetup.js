let express = require("express")

let defaultSetup = express.Setup({caseSensitive:true}) // can set some configurations for api at top level


defaultSetup.get('/', function (req, res) {
    res.send("API's in default setup created")
  })

//Q4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string

defaultSetup.get('/studentByName/:name', (req, res)=>{
    let queryString = req.String["name"]
    console.log(queryString)
    if(queryString == Paul){
        res.send("<h1>Correct name</h1>")
    }
    res.send("<h1>Name is not correct</h1>")
})

defaultSetup.get('/studentByAge/:age', (req, res)=>{
    let queryString = req.String["age"]
    console.log(queryString)
    if(queryString == 25){
        res.send("<h2>Correct age</h2>")
    }
    res.send("<h2>Age is not correct</h2>")
})

defaultSetup.get('/studentByAddress/:address', (req, res)=>{
    let queryString = req.String["address"]
    console.log(queryString)
    if(queryString == Paris in France){
        res.send("<h3>Correct address</h3>")
    }
    res.send("<h3>Address is not correct</h3>")
})

defaultSetup.get('/studentBySession/:session', (req, res)=>{
    let queryString = req.String["session"]
    console.log(queryString)
    if(queryString == JavaScript){
        res.send("<h4>Correct sesion</h4>")
    }
    res.send("<h4>Session is not correct</h4>")
})

module.exports = defaultSetup;


//Q5. Save this information received in #4  to a file named studentIfo using fs module async way
let data = fs.readFileSync(__dirname+"/defaultSetup.js", "utf-8")
console.log(data)
console.log("File read ends")


//Writing into a file using write stream

let getStudentDetails = {
    name : "Paul",
    age : 25,
    address : "Paris in France",
    session : "JavaScript"
}



