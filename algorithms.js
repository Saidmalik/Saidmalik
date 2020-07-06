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

const a = "farrux";
let besit = "umida";
