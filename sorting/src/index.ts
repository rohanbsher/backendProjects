import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([11, -2, 3, 0, -11, 12]);
// const sorter = new Sorter(numbersCollection);
// sorter.bubblSort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('xmnbfyke');
const sorter = new Sorter(charactersCollection);
sorter.bubblSort();
console.log(charactersCollection.data);