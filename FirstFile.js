console.log("Client side scripting language, interpreted, oojs, functional, dynamic typing, case sensetive, auto casting")

PrintName(user_Name)

var user_Name ="Test user for node" // undefined - gets hoisted with default value

//PrintName(user_Name)

function PrintName(name){ // gets hoisted (snapshot created)
    console.log(name)
}

//PrintName(user_Name)