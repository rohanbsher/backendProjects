// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([11, -2, 3, 0, -11, 12]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.bubblSort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('xmnbfyke');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(11);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
// const sorter = new Sorter(linkedList);
// sorter.bubblSort();
// linkedList.print();

// const numbersCollection = new NumbersCollection([11, -2, 3, 0, -11, 12]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// numbersCollection.print();
