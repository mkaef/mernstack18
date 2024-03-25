// Primitive Types
// String, Number, Boolean, Undefined, Null

// Non-Primitive Types (assigned as reference)
// Object

//console.log(data_name1) // data_name1 is not define : error

console.log(data_name) // undefined - hoisting - (default value to variable in js)

// var - is a keyword used in core-js to declare variables, function etc

var data_name = "Learning MERNStack" 

console.log(data_name)
console.log("Data Type", typeof data_name) // data type of data - string

//var data_name = "Learning Vanila Javascript" // re-declare and re-assign value to the variable
//data_name = "Lerning Ecma Script basics" // re-assign value to the variable

var data_name = 2024 // dynamically changes the type depending on the value assigned

var data_name = 20.24 //float

console.log(data_name)
console.log("Data Type", typeof data_name) // data type of data - number

var data_name = undefined

console.log(data_name)
console.log("Data Type", typeof data_name) // data type of data - undefined

data_name = null //data value

console.log(data_name)
console.log("Data Type", typeof data_name) // data type of data - undefined

data_name = {} // creating an object, json object, object literal

console.log(data_name)
console.log("Data Type", typeof data_name) // data type of data - object

data_name = {
    FirstName : "Paul",
    Address : "Somewhere on earth"
}

console.log(data_name)
console.log("Data Type", typeof data_name) // data type of data - object

data_name = null

console.log(data_name)
console.log("Data Type", typeof data_name)


data_name = {
    FirstName : "Henry",
    Address : "Somewhere in London"
}

data_name = 1 == 2// true // default value for bool is false

console.log(data_name)
console.log("Data Type", typeof data_name)

//empty object how js see this

var emptyobj = null// {} //obj1 // 213-address

var emptyobj2 = null// {} //obj1 // 214-address

data_name = emptyobj == emptyobj2// ==> true

console.log(data_name)



//ES-6 : Symbol - (ES6 :class based implementation of JS)
// used to create customized variable of our choice

var symbol_1 = Symbol("New Value of my choice")

console.log(symbol_1)
console.log("Data Type ", typeof symbol_1)