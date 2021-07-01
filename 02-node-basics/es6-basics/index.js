// ES6+ Features - 
// - Block scope variables - (let / const)
    // - restricted to the nearest curly braces

    // function demo(arr){
    //     if(arr.length > 2){
    //         const LOAD = "LOADING"
    //         console.log(FLASH);         // undefined
    //     }else{
    //         const FLASH = "FLASHING"
    //     }
    // }

    // demo([1,2,3,4,5]);


    // const USERNAME = "FOO";

    // USERNAME = "Bar";            // ERROR - RE-ASSIGNMENT NOT ALLOWED

    // const user = {
    //     name : "Foo"
    // }

    // user.name = "Bar";          // NOT CHANGING REFERENCE

    // user = {                     // ERROR
    //     name : "Baz"
    // }


    // console.log(user.name);         // Error / Foo










// - Destructuring - Destructure the collections (Array / Object)

// let arr = ["Foo", "bar", "Bam", "Bas"];

// let [arr1,  ,arr3, arr4, arr5] = arr;

// console.log(arr3, arr5);  // Bam undefined

// let user = {
//     email : "test@test.com",
//     age : 34,
//     address : {
//         city : "Bengaluru",
//         street : "201, Main Road, Marathahalli"
//     }
// }

// let {email, age, address : { street } } = user;

// console.log(email, age );

// console.log(user);



// let users = [
//     {email : "test1@test.com", age : 32},
//     {email : "test2@test.com", age : 34},
//     {email : "test3@test.com", age : 36},
// ]

// let [user1, user2, user3] = users;

// let {email : e1 , age : a1 } = user1;
// let {email : e2 , age : a2 } = user2;
// let {email : e3 , age : a3 } = user3;


// console.log(e1,e2,e3, a1,a2,a3);











// - Arrow functions - Lamdha Expression () => {}
    // - Don't have 'this' keyword
    // - With Curly Braces
    // - Witout Curly braces

    // let numbers = [1,2,3,4,5];

    // ES5 Way
    // const doubleValue = numbers.map(function(value){
    //     return value * 2;
    // })
    // console.log(doubleValue);
    

    // ES6 Way - Arrow functions - Without Curly braces
    // const doubleValue = numbers.map(value => value * 2 );

    // // ES6 Way - Arrow functions - With Curly braces
    // const tripleValue = numbers.map((value, index) => {
    //     console.log("VALUE : ",value);
    //     console.log("INDEX : ", index);
    //     return value * 3;
    // })

    // console.log(tripleValue);















// - Template String - ( " " ) | ( ' ' ) | ( ` ` )
    // - Multiline String (without \n)
    // - Embed variables within strings (without + operator)

//     let username = "Foo";
//     let sayHello = `Hello ${username},
//     I am great!
//     How are you?
//     `
// console.log(sayHello);


















// - Spread / Rest Operators (...)

// SPREAD - spreads/split the collection

// let numbers = [3,4,5];

// let newNumbers = [1,2,...numbers,6,7,8];

// console.log(newNumbers);            // [1,2,[3,4,5],6,7,8]


// let user = {
//     email : "test@test.com",
//     name : "Foo",
//     age : 34
// }

// let newUser = {
//     ...user,
//     age : 23
// }

// console.log(newUser);           // {email : "test@test.com", name : "Foo", age : 23}



// REST - creates the collection - always used in function parameters

function demo(name, ...params){
    console.log(params[0]);         // 
}

// demo("foo")
// demo("foo", "test@test.com")
demo("foo", "test@test.com", true)

















// - Promises 