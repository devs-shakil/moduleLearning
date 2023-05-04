// const nameArray = ['kamal', 'jamal', 'tamal', 'tomal', 'malamal'];
// for(let oneName of nameArray){
//     console.log(oneName)
// }

//concept 1: ternary operator:
// const isEvenNumber = (number) =>{
//     return number % 2 == 0 ? "Even" : "odd";

// }
// console.log(isEvenNumber(4));
// console.log(isEvenNumber(7));

/* // Write a ternary operator to check if a user is logged in or not
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome Back" : "please log in";
console.log(message);
 */

/* let number = 10;
let message = number < 10 ? (number < 5 ? "smaller than 5" : "greater than 5")  : "greater than 10";
console.log(message) */

//Concept 2:return keyword;
//In JavaScript, the return keyword is used inside a function to return a value to the code that called the function. When a return statement is executed inside a function, it immediately stops the execution of the function and returns the specified value to the calling code.
/* function funcOne (){
    let arr = [2,4,56,6];
    for(let i = 0; i<arr.length; i++){
        return arr[i];
    }
}
const hello = funcOne();
console.log(hello)//output 2; */

//concept 3:object .js
//create an object using two main syntaxes;
//1.object literal notation
//2.constructor notation;

let person = {
    firstName : 'Shakil',
    lastName : 'Hossain',
    age : 25,
    sayHello : function(){
        console.log('hello');
    }
}
// console.log(person.firstName);
// console.log(person["lastName"]);
// person.sayHello()
// console.log(Object.keys(person))
// console.log(Object.values(person));
console.log(Object.entries(person))

//constructor notation;
// function Keda (name,age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log("hello bangladesh");
//     }
// }
// let person = new Keda('shakil',25);
// console.log(person)

