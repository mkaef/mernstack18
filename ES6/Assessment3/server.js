//Assessment NodeAPI and ES6 - 01-May-2024

//1. Create a setup for Express Web Server
//2. Configure a route name - Student
//3. Create a express app and configure in server.js to delegate routes with - "Student"
//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string
//5. Save this information received in #4  to a file named studentIfo using fs module async way

//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

//8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//9. Use the question #7 to build promises using async and await - with multithread
//10. Create an example of generator function of your choice

/* ===================Responses==================*/ 

//Q1. Create a setup for Express Web Server
//PS C:\Projects\SynergisticsTraining\MERNStack18\ES6> cd Assessment3
//PS C:\Projects\SynergisticsTraining\MERNStack18\ES6\Assessment3> npm init 
//PS C:\Projects\SynergisticsTraining\MERNStack18\ES6\Assessment3> npm i express --save
"use strict";

const { error } = require("console");

const express = require("express");
const app = express(); // web server

app.listen(3000, (error) =>{
    if(error){
        console.log("Somthing went wrong with the code", error);
        return;
    }else{
        console.log("Listening on port 3000");
    }
})
// Testing the server:PS C:\Projects\SynergisticsTraining\MERNStack18\ES6\Assessment3> node server

//Q2. Configure a route name - Student
app.get("/student", (req, res) =>{
    console.log(req.student)
    res.send("<h1>Route name created</h1>") //determine the content type automatically
})

const defaultRouter = require("defaultSetup")
app.use(defaultSetup)

//Q6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

const map = new Map();
//adding value to the map
map.set('name', 'Terry');
map.set('age', '30');
map.set('address', 'Odessa TX');
map.set('session', 'JavaTrack');

//getting value from the Map
map.get('name');

// Clear the map by removing all the elements
map.clear(); 
map.size 

//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

let promiseObject = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            status : "success",
            value : "Student Session Object",
            code : 200

        
    
    })},
    2000)


setTimeout(()=>{
    reject({
        status : "Failed",
        value : "Student Session Not Found",
        code : 404

    

     })},

3000)

})
    console.log(promiseObject)

//Q8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)    

const multipleNums = (...numbers) => {
    let ans = 0;
    ans = numbers.reduce((acc, num) => acc * num, 1);

   return ans;
}
console.log(multipleNums(...[2, 3, 5]));

//9. Use the question #7 to build promises using async and await - with multithread

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    status : "success",
                    value : "Student Session Object",
                     code : 200
                    });
            }, 2000);

            setTimeout(() => {
                reject({
                    status : "Failed",
                    value : "Student Session Not Found",
                     code : 400
                    });
            }, 3000);
    });
}

//async creates a new thread to execute API's that we see will take some time
async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before await 2 - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await 2- thread executes one by one")


    console.log("Before await - blocking thread starts")

    await rejectAfter3Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before await 3 - blocking thread starts")

    await rejectAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await 3- thread executes one by one")
}

asyncCall()

console.log("async Execution ends");

//10. Create an example of generator function of your choice

function* generatorFunc(){
    yield 10;
    yield 20;
    yield 30;
}
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


