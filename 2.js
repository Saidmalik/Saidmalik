/*const sum = (arr) => arr.reduce((acc, curr) => acc + curr);
const a = [1, 2, 3, 3, 4, 99, 2, 1, 5, 5];
const b = [1, 2, 3, 4, 5, 6];
const both = a.concat(b);
const uniq = Array.from(new Set(a));

const binarySearch = (list, item) => {
    let low = list[0];
    let high = list.length -1;
    
    for (let i = 0; i <= list.length; i += 1) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return guess;
};
console.log(binarySearch(b, 4));
*/

function myConcat(separator) {
    var args = Array.prototype.slice.call(arguments, 1);
    return args.join(', ');
  }
 console.log(myConcat(2 , 4, "orange", "blue"));