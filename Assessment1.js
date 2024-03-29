//March - MERNStack Session - Assessment Number 1
//Q1. Create a file with name basics and show all the features that you know about javascript
//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

//Q5. Give me an example of your choice on closure, objects, prototype, each.

//Q8. what will the following code output? why?

// var arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

/*================================================================================*/ 


//Q1. JavaScript is a dynamic language with types and operators, it offers seven primitives types:
//Number, BigInt, String, Boolean, Symbol, Undefined and Null.
//Everything else is known as an Object: Function, Array, Data, RegExp and Error.
//Semi-colon is optional

//Q2
console.log(name)
var name = "Robert"  //Data Type string
console.log(name)


var name = .0266 // Data Type number
console.log(name)
console.log("Data Type", typeof name)

var name = false  //Data Type boolean
console.log(name)
console.log("Data Type", typeof name)

name = {
    myname : "Test Me" //Data Type object
}
console.log(name)
console.log("Data Type", typeof name)

var name =  25166665 //Data Type number
console.log(name)
console.log("Data Type", typeof name)

var name =  undefined //Data Type undefined
console.log(name)
console.log("Data Type", typeof name)

var name =  true  //Data Type boolean
console.log(name)
console.log("Data Type", typeof name)


var name =  "Robert Jr." //Data Type string
console.log(name)
console.log("Data Type", typeof name)

var name =  null // Data Type object
console.log(name)
console.log("Data Type", typeof name)

var name =  {} // Data Type object
console.log(name)
console.log("Data Type", typeof name)

var name =  -32767 //Data Type number
console.log(name)
console.log("Data Type", typeof name)

//Q3

function Printdetails(printMsg,param1, param2, param3){
    console.log(printMsg, param1, param2, param3)
}

function ShowUserInfo(firstname, lastname, age, printCallBk){
    printCallBk("Details are", firstname, lastname, age) 
}

ShowUserInfo("Paul", "Henry", "32", Printdetails)

//Q4

function daoaddition(param1, param2, param3){
    return param1 + param2 + param3
}
console.log(daoaddition(2,3,4)); // 9 expected result for all three parameters
console.log(daoaddition(2)); // NaN just one parameter
console.log(daoaddition(2.3,3)); // NaN due to only two parameters
console.log(daoaddition("first",  2, "three")); // Expected result for all three parameters

//Q5
//1. Closure: combination of a function bundled together with references to its surrounding state.

function parent(){
    var name = "JavaScript"; // local variable created by parent
    function displayName(){
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
parent();

//2. Objects: a non-primitive data-type that allows you to store multiple collection of data

 const vehicle = {
    make: "Honda",
    model: "Civic",
    year: 2022

}
console.log(vehicle)
console.log(typeof vehicle)

//3.A Prototype is a an object known as prototype object used to attach methods and proprieties in a protptype object.
function Student(name, major, yearOfBirth){
    this.name = name
    this.major = major
    this.yearOfBirth = yearOfBirth
}
Student.prototype.calculateAge= function(){
    console.log('Current age is:'+(2000- this.yearOfBirth))
}
console.log(Student.prototype)

const Student1 = new Student("Eric", "Mathmatics", 1983)
const Student2 = new Student("Tino", "Physics", 1985)

Student1.calculateAge()
Student2.calculateAge()







