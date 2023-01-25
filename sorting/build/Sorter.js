"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    bubblSort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
//bad code
// export class Sorter {
// 	// collection: number[];
// 	constructor(public collection: number[] | string) {
// 		// this.collection = collection;
// 	}
// 	bubblSort(): void {
// 		let numPasses = 0;
// 		// const length = this.collection.length; [2, 6, 3, 5]
// 		const { length } = this.collection;
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				// TypeGuard restores access to all the preperties of an array
// 				// if collection is array of numbers
// 				// console.log(`Collection ${this.collection}, i: ${i}, j: ${j}`);
// 				if (this.collection instanceof Array) {
// 					if (this.collection[j] > this.collection[j + 1]) {
// 						numPasses++;
// 						const leftHand = this.collection[j]
// 						this.collection[j] = this.collection[j + 1]
// 						this.collection[j + 1] = leftHand;
// 					}
// 				}
// 				// if(typeof this.collection === "number") {
// 				// if(typeof this.collection === "boolean") {
// 				if(typeof this.collection === "string") {
// 					// typescript understand that collection must be a string and restores 
// 					// access to all string properties
// 					// this.collection.
// 				}
// 				// if collection is string
// 			}
// 		}
// 		// console.log(numPasses + " passes")
// 	}
// }
// const sorter = new Sorter([-1, 0, 0, 10, 3, -5, 11, 1, 2]);
// sorter.bubblSort();
// console.log(sorter.collection);
