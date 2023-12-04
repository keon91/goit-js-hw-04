'use strict'
function isEnoughCapacity(products, containerSize) {
  let values = [];
  const keys = Object.values(products);
  for (const values of keys) {
    values.push(products[key])
  }
  for (let i = 0; i < values.length; i++){
    sum += values[i];
  }
  if (values <= containerSize) {
    console.log(true);

  } else {
    console.log(false);
  }
  return isEnoughCapacity;
 }

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false