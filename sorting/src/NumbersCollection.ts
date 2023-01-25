import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable{
	constructor (public data: number[]) {}

	// length(): number {
	// 	return this.data.length;
	// }

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}

}

// const collection = new NumbersCollection([1, 2, 3]);
// get accessors allow length to be a property
// collection.length;
