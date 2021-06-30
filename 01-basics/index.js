// Node Installer -- 3 things

// - Node Runtime Environment - executes JS Code
// - Node Package Manager (NPM) - dependency management
// - Native/Core Modules - (http, events, os, fs and many more)


// console.log("Hello World!");

// Built-in Types in JS - String, Number, Date, Array, Object, Function


// TypeScript - by Microsoft

// var x = 100;
// console.log(typeof x);          // number

// x = "Some String";
// console.log(typeof x);          // string

// x = {name : "foo"}
// console.log(typeof x);          // ?

// x = function(){}

// x = []

// x = true

// var x;

// console.log(typeof x);      // undefined



// JS Internals - two phases

// - Creational Phase 
    // - variables and functions takes place in memory
    // - JS engine assigns special value 'undefined'
// - Executional Phase
    // - Assignments ( = )
    // - return statements execute


    // var x = 100;
    // console.log(x);
    // Ph I - Memory is allocated to X = undefined
    // Ph II - x = 100



// var x = 10;
// var y = "10";

// console.log(x==y);          // Value checking
// console.log(x===y);          // Value & type-checking checking


// FUNCTIONS - not just a syntax, can be treated as a value
// Function Syntax
// function add(num1,num2){
//     return num1 + num2;
// }
// console.log(add(4,5));

// Function Expression
var add = function(num1, num2){
    return num1 + num2
}

console.log(add(2,3));       // ?

