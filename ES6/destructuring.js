//Destructuring - is a way to read values from Array or object without initializing literals

//1. Array Destructuring

//a. reading values without mulitple variables and indexing

 //let [one, two, three, four, no_val = 0] = [11,22,33,44]

 //console.log(one)
 //console.log(two)
 //console.log(three)
 //console.log(four)
 //console.log(no_val)

 //b. we can have rest for array

let [one, two, ...rest_Array] = [11,22,33,44, 55, 66, 77]

console.log(one)
console.log(two)
console.log(rest_Array)

//c. swapping of variable values

let x = 9, y = 10;

[x,y] = [y,x] //swapping
console.log(x)
console.log(y)

//2. Object Destructuring

//a. Single level destructuring
let User = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%"
}

//let Session = User.Session;

// let { Name = "David N", Session, TotalMarks} = User

// console.log(Name)
// console.log(Session)
// console.log(TotalMarks)

//b. Nested destructuring
let Student = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//let { Name = "Joe S", Session, Standard, Subject} = Student

let { Name = "Joe S", Session, Standard, Subject : {Physics, Mathematics = 100, Language}} = Student
//data from multiple sources with user object, product, card type, dollar amount etc. want to combine it
//using just the info form each. Dot is tedious plus...initialize each time (let name, let ..., let ...)
//destructing is easier and no init over and over
//One object called Oerderdetails/paymentdetails etc and combine these values in there with nested values as well 
//Array destructuring is most common,
//dependancy injection uses destrycturing
//Passing data - props get destructured

console.log(Name)
console.log(Session)
console.log(Standard)
//console.log(Subject)
console.log(Mathematics)
console.log(Physics)
console.log(Language)

//Questions for practice
//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 

//1. Using ES6 Destructuring
let Student1 = {
    firstName : "Eric",
    lastName : "Medoua",
    sessionTopics: {
        java : "java fundamental",
        programming : "structure"

    }
}
let {firstName, lastName, sessionTopics : {java, python = "introduction", programming}} = Student1

console.log(firstName)
console.log(lastName)
console.log(python)

//2. Function multiply

function mulitple(x,y,z){
    return x*y*z
}
//var product = mulitple(2,3,4)
//console.log(product)

console.log(mulitple(2,3,4))

//3.create an array of 1 - 5 and add arr[newval] = at 6th place, 
//print the output using for of and for in loop

let arr = [1,2,3,4,5]
arr.newval = 6
console.log(arr)

for (const key in arr) {
         console.log(key)
       const element = arr[key]; 
        console.log(element)
 }

 console.log("For Of Loop") 
let arrays = [1, 2, 3, 4, 5, newval= 6]; 

console.log(arrays);

for (const arr of arrays) {
    console.log(" "+ arr)
}

//4.create an example of const where we can update on property of the object, 
//where it says const is mutable

//create an Object
const car = {type:"Truck", make:"Chevi", color:"Black"}
console.log(car)

//change property
car.color ="White"
console.log(car)

//Add a property
car.owner ="Eric"
console.log(car)

//5.create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 

for (var index = 1; index < 5; index++) {

    setTimeout(function()  {
        console.log("Incremented with 2 seconds delay using var" + index)    
    }, 2000);
}

//for (var index = 1; index < 5; index++) {

//    setTimeout(() => {
//        console.log("Incremented with 2 seconds delay " + index)    
//    }, 2000);
//}

for (let index1 = 1; index1 < 5; index1++) {
    setTimeout(function()  {
        console.log("Incremented with 2 seconds delay using let " + index1)    
    }, 2000);    
}