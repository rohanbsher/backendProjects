const x : string = "yolo"
const ids : number[] = [1, 2, 3, 4, 9]

// Tuple
const employee: [number, string, boolean] = [1, "nana", true]
// Tuple array
let employeeArr: [number, string][]
let yoyo: string[]

// unions
let prodId: string | number
prodId = "22"

// enums - they are numeric values by default 
enum Direction1 {
	Up = 1, //index from 1
	Down,
	Left,
	Right
}
enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = "Left",
	Right = "Right"
}


// declaring user object with id and name properties 
const User: {
	id: number,
	name: string
} = {
	id: 1,
	name: "nana"
}


// better and alternative way
// declare a type user object with id and name properties
type User2 = { id: number, name: string }
//assign the values
const user2: User2 = { id: 1, name: "nana" }

// Type assertions

let cid: any = 1
// let cusid = <number>cid // customer id should be a number
let cusId = cid as number // or this way


//Functions declarations
function addNumber(x: number, y: number): number { // unless implicit only is set to true in tsconfig.json
	return x + y 
}

function log(message: string | number): void{
	console.log(message)
}

// Interface is basically a custom type

interface UserIterface {
	readonly id: number // readonly property cannor be changed
	name: string
	age?: number // make it optional
}

const user1: UserIterface = {
	id: 1,
	name: "nana"
}

//Functional Interface 
interface MathFunc {
	(x: number, y: number): number //
}

const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y

console.log(add(1,2))


// classes




yoyo = ["yoyo", "yoyo", "yoyo"]

employeeArr = [[1, "Rohan"], [2, "Chelsey"]]

console.log(employeeArr)
console.log(user2.name)

console.log(ids)

