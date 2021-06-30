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


// FUNCTIONS 
// - not just a syntax, can be treated as a value
// - Can be sent as parameter - Higher Order Functions (HOF)
// - Functions can be nested, returned
// - IIFE - Immediately Invoked Function Expressions - self-invoked
    // - Functions create scope of variables
    // - Avoids global pollution


    // Lexical Scoping - it matters where the function is created

    // var x = 200;
    // // Case 01
    // function b (){
    //     console.log(x);         // 200
    // }

    // function a(){
    //     var x = 100;
    //     // Case 02
    //     // function b (){
    //     //     console.log(x);         // 100
    //     // }
    //     b();
    // }

    // a();


    // Scope chaining

    // var x = 100;
    // function a(){
    //     var x = 200;
    //     function b(){
    //         var x = 300;
    //         console.log(x);         // 300
    //     }
    //     b();
    // }

    // a();














    // (function(){
//     console.log("IIFE Called..")
//     var x = 100;
// })();

// console.log(x);






// Creational - chooseNumber-> 7 -> Overriden by chooseNumber -> 12
// Executional - return chooseNumber;

// Function Hoisting
// function mystery(){
//     function chooseNumber(){
//         return 7
//     }
//     return chooseNumber;
//     function chooseNumber(){
//         return 12
//     }
// }

// var nestedFunc = mystery()
// console.log(nestedFunc());          // ?


// - Creation chooseNumber - 'undefined'
// - Executional chooseNumber = function(){} -> return chooseNumber;

// function mystery(){
//     var chooseNumber = function (){
//         return 7
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12
//     }
// }

// var nestedFunc = mystery()
// console.log(nestedFunc());  // 7

// function Syntax (Hot Spots) vs. function Expression
























// - Error first, Callback last

// function greet(err, username){
//     if(err){
//         console.log(err);
//         process.exit(1);
//     }else{
//         console.log("Hello " + username);
//     }
// }

// function greetWithName( name, arr, cb){
//     if(arr.length > 2){
//         cb(new Error("Too many elements"));
//     }else{
//         cb(null, name);
//     }
// }

// greetWithName( "John", [1,2,3,4], greet);            // ?













// Function Syntax
// function add(num1,num2){
//     return num1 + num2;
// }
// console.log(add(4,5));

// Function Expression
// var add = function(num1, num2){
//     return num1 + num2
// }

// console.log(add(2,3));       // ?

