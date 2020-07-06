const nums = [1, 2, 1, 2, 3, 3, 3, 3, 3, 4, 5, 6, 88, 8, 11, 23, 2412, 123];
const cars = ['bmw', 'honda', 'mercedes', 'chevrolet'];
const arr = [true, false, null, 2, 5];

const numb = '1, 4, 5';

const deleteArr = cars.filter(car => car.length > 3);
let unique = Array.from(new Set(nums));
let sameValue = new Array(4).fill(5);

const st = 'abba';

const palindrom = (str) => {
  return str === str.split('').reverse().join('');
};

console.log(deleteArr);
