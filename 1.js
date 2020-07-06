/*
const flatten = (coll) => {
  let result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      result = [...result, ...item]
    } else {
    result.push(item);
  }
}
  return result;
};
//console.log(flatten([10, [3, 5], 11]))

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let less = [];
  let more = []; 
for (let i = 1; i < arr.length; i += 1) {
  if (arr[i] < pivot) {
    less.push(arr[i]);
  } else {
    more.push(arr[i]);
  }
}
  return [...quickSort(less), pivot, ...quickSort(more)];
};
console.log(quickSort([10, 5, 2, 3, 3]))

*/

const book = {};
book.apple = 12;
book.banana = 14;
book.kiwi = 18;
console.log(book["kiwi"]);

import _ from "lodash";
console.log(_.capitalize("hello"));
let name = "igor";
let name = "igor";

let do = "smth";

