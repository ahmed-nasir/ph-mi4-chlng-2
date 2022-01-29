// ******************************
// ****Convert to lower case*****
// ******************************

function multiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        var result = i * number;
        console.log(i, '*', number, '=', result);

    }
}
var num1 = 29;
multiplicationTable(num1);


// ******************************
// ****Convert to lower case*****
// ******************************
function lowerCase(pera) {
    // console.log("It worked!");
    var result = pera.toLowerCase();
    return result;
}
var inputFun = 'KI R KOMU DUKKHER KOTHA! LOWERCASE KORTE PARTACHI NA. ';

var returnFun = lowerCase(inputFun);

console.log("LOWER CASE OF YOUR INPUT: ", returnFun);

// **********************************
// *******Full Name Function ********
// **********************************

function fullNameFun(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}

var result = fullNameFun("Nasir", "Ahmed")

console.log(result);



// **********************************
// *******Squar Function ********
// **********************************

function squarFun(num) {
    var squarResult = num * num;
    return squarResult;
}
var number = 4;

console.log(squarFun(number));



// **********************************
// *******Squar Function ********
// **********************************

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}

var result = pizza.toppings[2];
// var result = pizza.toppings.indexOf('pepperoni');
console.log(result);