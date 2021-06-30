// Objects - unorganized data, key : value pair
// Array - organized collections by index

// - Literal Method

// Reference Types - Objects, Arrays, Functions

// var mybooks = ["book1", "book2", "book3"];

// var box = {
//     width : 2,
//     height : 4,
//     books : mybooks,
//     addBook : function(book){
//         this.books.push(book);
//     }
// }

// box.volume = box.width * box['height'];

// box.addBook("Book4");
// mybooks.push("Book5");

// var newBooks = mybooks;

// mybooks.push("Book6");

// console.log(box.books, mybooks, newBooks);

// console.log(box.books.length);      // 

// console.log(mybooks.length);          // 

// var user = {
//     name : "Foo"
// }

// var newUSer = user;

// newUSer.name = "Bar";

// console.log(user);      // name : "Foo/Bar"
// console.log(newUSer);   // name : "?"














// - Constructor Method - to create similar type of objects

// function Person(email, age){
//     // var this = {};
//     this.email = email;
//     this.age = age;
//     // return this;
// }

// Person.prototype.sayHi = function(){
//     return "Hello " + this.email
// }
// Person.prototype.getDetails = function(){
//     return this.email + " : " + this.age
// }

// var foo = new Person("foo@test.com", 32);
// var bar = new Person("bar@test.com", 34);

// console.log(foo.getDetails());
// console.log(foo.sayHi());
// console.log(bar.getDetails());

// // Person - 100 Functions
// // 50 Object of Type Person
// // 50 Object * 100 functions = memory allocation

// var str = "Sample String";
// // var str = new String("Sample String");
// // String.prototype.length = ""
// console.log(str.length);        // 13
// console.log(str.charAt('a'));        // 5

















// - Instance Method (Prototype Property - inheritance)

var Shoe = {
    size : 8,
    construction : "Slipper"
}

var magicShoe = Object.create(Shoe);

magicShoe.size = 10;

// console.log(magicShoe.size)         // 10
// console.log(Shoe.size)              // 8
// console.log(magicShoe)              // { size : 10 } 
// console.log(magicShoe.construction) // 'Slipper'

console.log(Shoe.isPrototypeOf(magicShoe));         // true
console.log(magicShoe.isPrototypeOf(Shoe));         // false
console.log(Object.prototype.isPrototypeOf(Shoe))   // true
console.log(Object.prototype.isPrototypeOf(magicShoe))   // true

// JavaScript is Object based language



// Function Hoisting
// Lexical Scope
// Scope Chaining
// Object Hierarchy