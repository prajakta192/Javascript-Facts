/*there are 2 types of data in ja
    1] primitive (basic data type)/ single value-  immutable values 
    2] non-primitive (object) many seperate value - mutable values
*/
/* 7 primitive data types*/

//  number => +ve, -ve, integer, floating number(decimal number)
let num1 = 12;
let num;
num = 98;
const outsideTemp = 23;

//string  => collection of characters enclosed in either "", '' or ``
let firstName = 'Prajakta';
let lastName;
lastName = 'Bujare'
let fullName;
fullName = firstName + ' ' +  lastName;
console.log(fullName)

//boolean => true OR false => used in conditional opration
let isLoggedIn = true;
let isMarried = false;

//undefined  =  absence of value => 
/* declare variable but not assigned any value
    function that dosen't return anything => will be undefined
    accessing property that is absent  => obj.propertyNotAvailable => will return undefined
*/
let employeeName;
let obj = {id: 1, employeeName : 'Bob'}
console.log(obj.salary)
function returnNothing(){
    let a = 10;
    let b = a;
    let c = a + b;
    return;
}
console.log(returnNothing())

//null  => empty value
/* 
    1] assigned by user i.e => let temp = null
    2] getting no value from server

    Note typeof null => object
*/

//ES6 symbol => for unique value
let employeeID = Symbol(12);
let ID = Symbol(12) ;
console.log(employeeID === ID) // false

//bigInt = > for larger numbers

/*
    2] non-primitive 

 */
//object => key value pair => may contain another obj, array, function etc.
let myObj ={
    firstName : 'Prajakta',
    age: 23,
    isMarried:false
}

//arrays => collection of different values =>  values in arrays are indexed => index start @0
let sampleArray = [1,2,'Apfle', true, 'banane']

//function => prform opertion on one or many value to produce result. => reusable => declared once, use many times

function NameOfFunction(){
    /*
        statements goes here
     */
}

//calling  function
NameOfFunction()
