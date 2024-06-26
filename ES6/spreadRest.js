//Spread : is used to spread the elements of any object or array to be used one by one

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"]

//  console.log(arrayOFCities[0]);
//  console.log(arrayOFCities[1]);

  console.log(...arrayOFCities)

//spread operator is used to combine two objects and preserve the immutability of each object

let User = { name : "Anna", age : 25 }
let Address = { home : "Somewhere in US", office : "Virtual" }

//let Delivery = { User, Address} //Object.assign
let Delivery = { ...User, ...Address} //preserving the immutability //if we do change after assignment it wont copy to new object
Address.phone = 89898989;

 console.log(Delivery) 
 console.log(Address)

 //rest - parameter : if we have many parameters which can be clubbed so rest can be used as parameter
// rest parameter will be last parameter

function Sum(a,b,c,d,e) {
    return a + b + c + d+ e
}

console.log(Sum(1,2,3,4,5))

//rest is the last parameter of a function which can accept any number of params
function Sum_Large(...numbers) {
    let sum = 0;
    sum = numbers.reduce((prevVal, currVal)=> prevVal + currVal, 0)

    return sum
}

let numList = [1,2,3,4,5,6,7,8,9,10]

console.log(Sum_Large(...numList))

console.log(Sum_Large.apply(null, numList)) //legacy way by using apply function in javascript

//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

//1. List of Vaccines

let listOfvaccines = ["Johnson Johnson", "Pfizer", "Moderna"]
console.log(listOfvaccines[1])
console.log(...listOfvaccines)

//2.create doctor object and print his qualifications and other details using spread

let Doctor = {name: "Franck", age:30, type: "Primary Care Physician", speciality: "Cardiologist" }
//console.log(Doctor)

//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

let Vaccine = {VacName: "Pfizer", noOfDosesRequired: 3, price: 25}

let Merge ={...Doctor, ...Vaccine}
console.log(Merge)


//2.Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

//let largesum = []
//for (let i = 100; i <= 150; i++){
//    largesum.push(i);
//}

//console.log(largesum)

//let start = 100
//let end = 150

//let array = [...largesum(150).keys()];
//console.log(array)

function range(start, end){
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
let largesum = range(100, 150);
console.log(range(...largesum))