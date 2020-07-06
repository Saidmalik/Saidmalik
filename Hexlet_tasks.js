/*let cities = ['moscow', 'london', 'berlin', 'tashkent'];

const get = (arr, index, defaultValue = null) => {
  if (arr[index] === undefined) {
    return defaultValue;
  }

  return arr[index];
};

console.log(get(cities, 10, 'sdsd'));

arrays.js
Реализуйте и экспортируйте по умолчанию функцию get, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null)
Примеры
const cities = ['moscow', 'london', 'berlin', 'porto'];

get(cities, 1); // 'london'
get(cities, 4); // null
get(cities, 10, 'paris'); // 'paris'
get(cities, -1, 'oops'); // 'oops'

const sentence = 'When you play the game of thrones, you win or you die';
const needCensored = ['die', 'play'];
const a = '$#%!';

const makeCensored = (text, stopWords) => {
  const separate = ' ';
  const words = text.split(separate);
  const result = [];
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(newWord);
  }

  return result.join(separate);
};
console.log(makeCensored(sentence, needCensored));
/*
Реализуйте и экспортируйте по умолчанию функцию makeCensored, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

Текст
Набор стоп слов
Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).

Примеры
import makeCensored from '../strings';

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!

Подсказки
Тернарная операция может сослужить вам хорошую службу в этой практике.

Задача со стеками
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет является ли эта строка сбалансированной. Пустая строка (отсутствие скобок) считается сбалансированной.

import isBracketStructureBalanced from './strings.js';

// Пример вложенности
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false
Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.

Подсказки
Решение учителя использует метод indexOf()

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);

const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

const isBracketStructureBalanced = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isBracketStructureBalanced('(('));
*/ /*
Map and location
На многих картах, например google maps, реализован поиск мест находящихся рядом с выбранной точкой, например, текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощенном варианте.

location.js
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит место ближайшее к указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y.
import { getTheNearestLocation } from '../location.js';

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать. Поэтому решите эту задачу без обращения к индексам массивов.

Подсказки
Расстояние между точками высчитывается с помощью функции getDistance.

Solution 
const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  let [nearestLocation] = locations;
  const [, nearestPoint] = nearestLocation;
  let lowestDistance = getDistance(currentPoint, nearestPoint);

  for (const location of locations) {
    const [, point] = location;
    const distance = getDistance(currentPoint, point);
    if (distance < lowestDistance) {
      lowestDistance = distance;
      nearestLocation = location;
    }
  }

  return nearestLocation;
};
// END
*/
