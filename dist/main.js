"use strict";
const x = "yolo";
const ids = [1, 2, 3, 4, 9];
// Tuple
const employee = [1, "nana", true];
// Tuple array
let employeeArr;
let yoyo;
// unions
let prodId;
prodId = "22";
// enums - they are numeric values by default 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// declaring user object with id and name properties 
const User = {
    id: 1,
    name: "nana"
};
//assign the values
const user2 = { id: 1, name: "nana" };
// Type assertions
let cid = 1;
// let cusid = <number>cid // customer id should be a number
let cusId = cid; // or this way
//Functions declarations
function addNumber(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "nana"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(1, 2));
// classes
// They are used to create objects 
// So we can create multiple Person objects
class Person {
    constructor(id, name, age, birthDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
    }
}
const user = new Person(1, "Rohan", 25, new Date("09/01/1998"));
// user.id = 2
console.log(user);
// yoyo = ["yoyo", "yoyo", "yoyo"]
// employeeArr = [[1, "Rohan"], [2, "Chelsey"]]
// console.log(employeeArr)
// console.log(user2.name)
// console.log(ids)
