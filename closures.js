//Inheritance
//Encapsulation - Private, Public, internal, protected,...
//Polymorphism
//Abstarction
//Encapsulation - access modifiers : in languages like java help us to prevent/limit the usage of class members

//In Javascript : When we have a function within a function and parent function returns child function, 
// then we can limit what can be accessed by external user through child function this is termed as closure

//currying - when a function returns another instead of values and also repeats same thing we call it currying

function Parent(userName, userPin) {
    //Private scope of parent function
    var name = "David"
    var pin = "25694158"
    var accountName = "Savings Account" // public - on authentication success
    var accountBalance = "$20000" // public - on authentication success
    var accountPassword = "32gfc79s0dd" //private - shouldn't be accesses outside

    var child = function(getBalance) {
        //Public scope which is accessible to others
        if (getBalance && name==userName && pin==userPin) {
            return {
                name : name,
                accountName : accountName,
                accountBalance : accountBalance
            }
        }
    }

    return child;
}


var child = Parent("David", "25694158") //balanceInfo

console.log(child(true))



//create a sample of your own implementation for closure