//JavaScript - Interpreted languages and Partially Compiled as weel due to hoisting feature

//case sensitive

var myNane = "Eric"
var myNane = "Franck"

console.log(myNane)
console.log(myNane)

//semi-colon ; is optional, >> expect few edge cases (IIFE function) <<

//we can declare variables -
// using string
// using alphanumeric, but shouldn't start with number --// var 1_name1
// only two special chars can be used -> $ and _
                                //var $name, _name //,  name@ <@ not allowed>
// space is not allowed between //var user name

// Commenting code -
// single line comment - ctrl+/  (can be to toggled)

// Test

// Multi line comment - 

/*
 Test
*/

//expressions and operators
// && - and, || - or, ! - not, =, ==, ===, ? (ternary operator)

var a = 10 //number , 10
var b = 10 //"10" //string , 10

if (a === b) { //data values and its type both are compared
    console.log("are actually equal");
} else if(a == b) { //data values are compared
    console.log("only values are equal not its type");
}

//condition ? (do the job when its true) : (do the job when its false)

a == b ? console.log("only values are equal not its type") : console.log("are actually equal") 