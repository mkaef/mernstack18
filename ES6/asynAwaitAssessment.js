//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)

// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function

function userInfo() { // promise creator
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                const valid = false
                if(valid)
                    resolve({
                        "name" : "Paul Henry",
                        "Address" : "Sherman Texas",
                        "Account Number" : "897 245 458"
                        })
                        else{
                                reject("Not valid")
                        }
                }, 2000);
        });
    }
    
    console.log("UserInfo async Execution starts");

    userInfo().then(value => console(value))
              .catch(error => console.log(error));


              async function callUserInfo() {

                console.log("Before await - blocking thread starts")
            
                await userInfo()
                        .then((value, error)=>console.log(value))
                        .catch((error)=>console.log(error))
            
                console.log("After await - thread executes one by one")
            
                console.log("Before await 2 - blocking thread starts")
            
                await userInfo()
                        .then((value, error)=>console.log(value))
                        .catch((error)=>console.log(error))
            
                console.log("After await 2- thread executes one by one")
            }
            
            callUserInfo()
            
            console.log("async Execution ends");     
            
 // create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)

const userId = new Map()
userId.set(30, {
  id: 30,
  name: "Tino Marshall",
  title: "Software developer"     
})
console.log(userId.get(30))

const student = new Map()
student.set(25,{grade: 25,
        name: "Andrea Zowa",
        country: "Gabon"
})
console.log(student.get(25))

const teacher = new Map()
student.set(50,{age: 50,
        name: "Claud",
        country: "USA"
})
teacher.get(50)

const cart = {
        bookids: new Set([38,7,14])
}
function isInCart(bookId){
        return cart.bookids.has(bookId)
}
console.log(isInCart(38))
console.log(isInCart(17))
cart.bookids.add(29)

let map = new Map()

map.set("henry", "Bamba")
map.set("Raoul", "Ngozales")
map.set("Morgan", "Pepe")
map.set("Bachirou", "Oumar")
map.set("Henry", "Bongo") // set is used for updating but not for adding

//console.log(map.keys())
//console.log(map.has("Gregg"))

//for(let [k,v] of map){ // Print all values
 //   console.log(k, " : ", v);
//}

map.forEach((v,k) =>{
console.log(k, " : ", v)   
})
    