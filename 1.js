import _ from 'lodash'; /*
const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];
const getMenCountByYear = (users) => {
  const filtred = users.filter(({ gender }) => gender === 'male');
  return filtred.reduce((acc, person) => {
    if (_.has(acc, person)) {
      acc[person.birthday.slice(0, 4)] += 1;
    } else {
      acc[person.birthday.slice(0, 4)] = 1;
    }
    return acc;
  }, {});
};
console.log(getMenCountByYear(users));
*/
/*
const bag = [
  'apple',
  'banana',
  'pear',
  'apricot',
  'apple',
  'banana',
  'apple',
  'orange',
  'pear',
];

const fruitsCounter = (fruits) => {
  const statistics = {};

  for (const fruit of fruits) {
    if (statistics.hasOwnProperty(fruit)) {
      statistics[fruit] += 1;
    } else {
      statistics[fruit] = 1;
    }
  }

  return statistics;
};
//console.log(fruitsCounter(bag));
 const capitalize = (text) => {
  const firstSymbol = text[0].toUpperCase();
  //const restSymbols = text.slice(1);
  //return `${firstSymbol}${restSymbols}`;
};
console.log(capitalize('sam'));
*/
