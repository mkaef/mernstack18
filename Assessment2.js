
// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil


// const heroes = [
// { name: 'Wolverine', family: 'Marvel', isEvil: false },
// { name: 'Deadpool', family: 'Marvel', isEvil: false },
// { name: 'Magneto', family: 'Marvel', isEvil: true },
// { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
// { name: 'Batman', family: 'DC Comics', isEvil: false },
// { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
// { name: 'Legolas', family: 'Tolkien', isEvil: false },
// { name: 'Gandalf', family: 'Tolkien', isEvil: false },
// { name: 'Saruman', family: 'Tolkien', isEvil: true }
// ]


//2. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// also need to print students of the session using same example


//3. Print the last name through destructuring and add a contact number:9119119110 as well
// const person = {
// userDetails :{
// first: "FirstName",
// last: "LastName"
// }
// }


//4. Give me an example of const data manipulation


//5. What is the difference between for-of and for-in show with examples


//6. Give me an example of bind and write its usage, comparison with arrow function


//7. Create an example showing usage of event loop in concurrent execution cycle


//8. create an example showing usage of short hand and default param.


//9. Create two objects with some properties and merge them using Object method and ES6 way


//10. Give me an example of call and apply each with it's usage

/*============= Responses======================= */

//Q1
// a. Get heroes who are not evils

const heroes = [
     { name: 'Wolverine', family: 'Marvel', isEvil: false },
     { name: 'Deadpool', family: 'Marvel', isEvil: false },
     { name: 'Magneto', family: 'Marvel', isEvil: true },
     { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
     { name: 'Batman', family: 'DC Comics', isEvil: false },
     { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
     { name: 'Legolas', family: 'Tolkien', isEvil: false },
     { name: 'Gandalf', family: 'Tolkien', isEvil: false },
     { name: 'Saruman', family: 'Tolkien', isEvil: true }
    ]
const Wolverine = { name: 'Wolverine', family: 'Marvel', isEvil: false }
console.log(Wolverine)
const Deadpool =  { name: 'Deadpool', family: 'Marvel', isEvil: false }
console.log(Deadpool)
const Charle_Xavier = { name: 'Charles Xavier', family: 'Marvel', isEvil: false }
console.log(Charle_Xavier)
const Batman = { name: 'Batman', family: 'DC Comics', isEvil: false }
console.log(Batman)
const Legolas = { name: 'Legolas', family: 'Tolkien', isEvil: false}
console.log(Batman)
const Gandalf = { name: 'Gandalf', family: 'Tolkien', isEvil: false  }
console.log(Gandalf)

// b. Print Unique family names
//const unique = {...family}


// c. Print Hero Names from given objects, and append sir in each of them before printing

const heroName1 = { name: 'Wolverine', family: 'Marvel', isEvil: false }
heroName2 = heroName1
heroName2.name = "Sir Wolverine"
console.log(heroName1)

const heroName3 =  { name: 'Deadpool', family: 'Marvel', isEvil: false }
heroName4 = heroName3
heroName4.name = "Sir Deadpool"
console.log(heroName3)

const heroName5 =  { name: 'Magneto', family: 'Marvel', isEvil: true }
heroName6 = heroName5
heroName6.name = "Sir Magneto"
console.log(heroName5)

const heroName7 =  { name: 'Charles Xavier', family: 'Marvel', isEvil: false }
heroName8 = heroName7
heroName8.name = "Sir Charles Xavier"
console.log(heroName7)

const heroName9 =  { name: 'Batman', family: 'DC Comics', isEvil: false }
heroName10 = heroName9
heroName10.name = "Sir Batman"
console.log(heroName9)

const heroName11 =  { name: 'Harley Quinn', family: 'DC Comics', isEvil: true }
heroName12 = heroName11
heroName12.name = "Sir Harley Quinn"
console.log(heroName11)

const heroName13 =  {name: 'Legolas', family: 'Tolkien', isEvil: false } 
heroName14 = heroName13
heroName14.name = "Sir Legolas"
console.log(heroName13)

const heroName15 =  {name: 'Gandalf', family: 'Tolkien', isEvil: false }
heroName16 = heroName15
heroName16.name = "Sir Gandalf"
console.log(heroName15)

const heroName17 =  {name: 'Saruman', family: 'Tolkien', isEvil: true }
heroName18 = heroName17
heroName18.name = "Sir Saruman"
console.log(heroName17)

// d. Do we have any hero in Marvel Family who is not evil


//2. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// also need to print students of the session using same example

function product(a,b,n){
    return a*b*n

}
console.log(product(1,2,3,4))


//3. Print the last name through destructuring and add a contact number:9119119110 as well
 const person = {
 userDetails :{
 first: "FirstName",
 last: "LastName"
 }
 }
 const { userDetails : {first, last, number = '9119119110'}} = person
 console.log(last)
 console.log(number)

 //4. Give me an example of const data manipulation

 const student = {
    name: 'Paul'
 }

 student.name = 'Henry' // this doesn't cause an error

 console.log(student.name) // Henry

 //student = {
    name: 'henry' // will have error
 //}

 //5. What is the difference between for-of and for-in show with examples
 // For in loop statement iterates over all enumerable properties of an objetct.

 const book = {
    title: 'javaScript for Beginners',
    price: '$10',
    year:2024,
    publisher: 'Amazon, Inc'

   
 }
  // iterate over the object
  for (const key in book){
    console.log(`${key} --> ${book[key]}`)
}

//To skip the objet inherited properties just use the `hasOwnProperty()`

for(const key in book){
    if(book.hasOwnProperty(key)){
        console.log(`${key} =>${book[key]}`)
    }
}

//For-of statement loops over the values of the iterable objects like arrys, strings, maps, sets etc.. it doesn't work for objects because they are not iterable

const names = ['Eric', 'Franck', 'Tim', 'Bob']
// iterate over names
for(const name of names){
    console.log(`Hello ${name}!`)
}

//6. Give me an example of bind and write its usage, comparison with arrow function
//The bind() method allows an object to borrow a method from another object.

//Bind() Method
const student1 = {
    firstName : "Tino",
    lastName: "Kelkel",
    fullName: function() {
        return this.firstName+" "+ this.lastName
    }
}

const student2 = {
    firstName: "henry",
    lastName: "Bamba",
}
let fullName = student1.fullName.bind(student2)
console.log(student2)

//Arrow function are another more concise way to write functions expression.
//Howerver, they don't have their own binding to the key word

//function expression
//const multiplyNumbers = function(num1, num2){
//    return num1 * num2
//}

//Arrow function
const multiplyNumbers =(num1, num2) => num1*num2
console.log(multiplyNumbers(2,3))

//7. Create an example showing usage of event loop in concurrent execution cycle

function multiply(x,y){
    return x * y
}
function squared(n){
    return multiply(n,n)
}

function printSquare(n){
    return squared(n)
}

let numberSquare = printSquare(7)
console.log(numberSquare)

//8. create an example showing usage of short hand and default param.
//ShortHand

//Longhad if-else statement
//let age = 20
//let message

//if(age >=16){
//    message = "you are eligible for a Driver License."
//}else{
//    message = " you are not eleigible."
//}

//Shorthand
let age = 20
let message = (age >= 16)? "you are eligible for a Driver License." : " you are not eleigible."
console.log(message)

//Default parameter values

// Longhand default parameter values
function greet(name) {
  name = name || "Visitor";
  console.log('Hello, ' + name + '!');
}

// Shorthand default parameter values
function greet(name = "Visitor") {
  console.log("Hello, " + name + "!")
}

greet(); 
greet("Luc"); 

//9. Create two objects with some properties and merge them using Object method and ES6 way

let teacher = {
    firstName: "David",
    lastName: "Dan",
    age: 30,
    
}

let job = {
    jobTitle: "Programmer",
    location: "USA"
}

let employee = {...teacher, ...job}
console.log(employee)

//10. Give me an example of call and apply each with it's usage


//const person1 = {
//    firstName: "Claude",
//    lastName: "Luis",
//    age: 40,
//    getIntroduction: function() {
//       console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
//    }
//  }
  
//  person1.getIntroduction(); 
  
 // function randomFunc() {
    console.log(this);
 // }

 // randomFunc()

 //const person1 = {
 //  firstName: "Claude",
 //   lastName: "Luis",
 //   age: 40
// }
  
 // function getIntroduction(location, state) {
 //      console.log(`${this.firstName} ${this.lastName} is ${this.age} years old, stayed at ${location} ${state}`);
 //   }
  
 // getIntroduction.call(person1,"Midland","Texas")
  
 // const person2 = {
 //   firstName: "julus",
 //   lastName: "Mbina",
 //   age: 25,
 // }
  
 // getIntroduction.call(person2,"Odessa", "Texas"); 

  const person1 = {
    firstName: "Claude",
     lastName: "Luis",
     age: 40
   }
   
   function getIntroduction(location, state) {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old, stayed at ${location} ${state}`);
     }
   
   getIntroduction.apply(person1,["Midlan","Texas"])