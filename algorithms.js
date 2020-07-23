/*
const binarySearch = (list, item) => { // состоит из отсортированного числа и загаданного элемента.

  let low = 0; //обознпчаем начало массива 
  let high = list.length - 1; //обозначаем последний элемент 
  while (low <= high) { // делать иттерацию от начало до конца длины массива
    const mid = Math.floor((low + high) / 2);//создаем переменную для вычисления середины длины массива
    const guess = list[mid]; // если 

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};
const myList = [1, 3, 5, 7, 9];  

console.log(binarySearch(myList, 9)); 
console.log(binarySearch(myList, -1)); 
/*
 Arrays selection sort
// Selection Sort - O(n^2)
// Parameter:
//  1. random array

// 1. Finds the smallest value in an array
const findSmallestIndex = (array) => {
    let smallestElement = array[0]; // Stores the smallest value
    let smallestIndex = 0; // Stores the index of the smallest value
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallestElement) {
        smallestElement = array[i];
        smallestIndex = i;
      }
    }
  
    return smallestIndex;
  };
  
  // 2. Sorts the array
  const selectionSort = (array) => {
    const sortedArray = [];
    const length = array.length;
  
    for (let i = 0; i < length; i++) {
      // Finds the smallest element in the given array 
      const smallestIndex = findSmallestIndex(array); // фунцкия находит наименьший индекс
      // Adds the smallest element to new array
      sortedArray.push(array.splice(smallestIndex, 1)[0]);// что происходит ?
    }
  
    return sortedArray;
  };
  
  console.log(selectionSort([5, 3, 6, 2, 10], [11, 7, 6, 2, 10] )); // [2, 3, 5, 6, 10]

/*
  Recursion and stack
    const countdown = i => {
  console.log(i + '...');
  // base case
  if (i <= 0) {
    return;
  }

  countdown(i - 1);
};
countdown(3);
const greet2 = name => console.log(`how are you, ${name}?`);

const bye = () => console.log('ok bye!');

const greet = (name) => {
  console.log(`hello, ${name}!`);
  greet2(name);
  console.log('getting ready to say bye...');
  bye();
};

greet('adit');

const fact = (x) => {
  if (x === 1) {
    return 1;
  }
  return x * fact(x - 1);
};

console.log(fact(5));
*/ /*
const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
};

console.log(quickSort([10, 5, 2, 3, 3])); // [2, 3, 5, 10]
*/ /*
/**
 * Recursive function of Euclidean algorithm for two numbers
 *
 * @param {number} a first number
 * @param {number} b second number (base case)
 *
 * @return {number} GCD (greatest common divisor)
 */ /*
let gcdOfTwo = ( a, b ) => {
  if ( !b ) {
      return a;
  }
  return gcdOfTwo( b, a % b );
};
/*
/**
* Recursive function of Euclidean algorithm for set of the numbers
*
* @param {Array} set Set of the numbers
*
* @return {number} GCD (greatest common divisor)
*/ /*
let gcdOfSet = ( set ) => {
  let result = set[0];
  let newArr = Array.prototype.slice.call( set, 1 );

  newArr.map( ( el ) => {
      result = gcdOfTwo( result, el );
  } );

  return result;
};

const set = [1680, 640, 3360, 160, 240, 168000];

console.log( gcdOfSet( set ) ); // 80
*/
/*
/**
 * Recursive function of Euclidean algorithm
 *
 * @param {number} a first number
 * @param {number} b second number (base case)
 *
 * @return {number} GCD (greatest common divisor)
 */ /*
let getGCD = ( a, b ) => {
  if ( !b ) {
      return a;
  }
  return getGCD( b, a % b );
};

const a = 1680;
const b = 640;

console.log( getGCD( a, b ) ); // 80
*/
/*
Hash Table
const book = {};
// an apple costs 67 cents
book.apple = 0.67;
// milk costs $1.49
book.milk = 1.49;
book.avocado = 1.49;

console.log(book['milk']); // { apple: 0.67, milk: 1.49, avocado: 1.49 }
*/
/*
const voted = {};
const checkVoter = (name) => {
  if (voted[name]) {
    console.log('kick them out!');
  } else {
    voted[name] = true;
    console.log('let them vote!');
  }
};


checkVoter('tom'); // let them vote!
checkVoter('mike'); // let them vote!
checkVoter('mike'); // kick them out!
*/
/*
const personIsSeller = (name) => name[name.length - 1] === 'm';

const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = [];
  while (searchQueue.length) {
    const person = searchQueue.shift();
    // Only search this person if you haven't already searched them
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }
      searchQueue = searchQueue.concat(graph[person]);
      // Marks this person as searched
      searched.push(person);
    }
  }
  return false;
};

search('you'); // thom is a mango seller!
*/
/*
const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];

const isSeller = (name) => name[name.length - 1] === 'm';

const search = (name) => {
  const iter = (waited, visited) => {
    if (waited.length === 0) {
      return false;
    }
    const [current, ...rest] = waited;
    if (visited.has(current)) {
      return iter(rest, visited);
    }
    if (isSeller(current)) {
      console.log(`${current} is a mango seller!`);
      return true;
    }
    visited.add(current);
    const personFriends = graph[current];
    return iter([...rest, ...personFriends], visited);
  };
  return iter(graph[name], new Set());
};
search('you');
*/
// the graph
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};

// The costs table
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// the parents table
const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

let processed = [];


const findLowestCostNode = (itCosts) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(itCosts).forEach((node) => {
    const cost = itCosts[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowestCost && (processed.indexOf(node) === -1)) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  // Go through all the neighbors of this node
  const neighbors = graph[node];
  Object.keys(neighbors).forEach((n) => {
    const newCost = cost + neighbors[n];
    // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > newCost) {
      // ... update the cost for this node
      costs[n] = newCost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
  });

  // Mark the node as processed
  processed = processed.concat(node);

  // Find the next node to process, and loop
  node = findLowestCostNode(costs);
}

console.log('Cost from the start to each node:');
console.log(costs); // { a: 5, b: 2, fin: 6 }
