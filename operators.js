// Operators like - &&(and), or(||), !, = (assignments), ==, ===, <, >, >= ,<=, ++
// ternary operator - ?

var validVoter = true
var voterAge = "18"


if (validVoter && voterAge === 18) { // == only checks value not data type, === checks both
    console.log("Valid Voter!!! can vote!!")
} else {
    console.log("InValid Voter!!! can't vote!!")
}


//ternary operator
// condition ? true(case) : false(case)

validVoter && voterAge === 18 ? console.log("Valid Voter!!! can vote!!") 
    : console.log("InValid Voter!!! can't vote!!")

//continous variable declarations

var firstVar = 1, second = 2;
console.log(firstVar)