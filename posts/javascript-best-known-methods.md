---
title: 'Best known methods in JavaScript'
date: '2023-01-29'
image: 'javascript-best-known-methods.png'
excerpt: "NextJs is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR"
isFeatured: true
tags: 'JavaScript'
author: 'Marcel Miłosz'
readTime: '15 min.'
postId: 5
---

JavaScript is a powerful programming language with a multitude of built-in methods for manipulating arrays. These methods allow developers to perform a variety of operations on arrays, such as transforming them, filtering them, and finding specific elements. In this article, we'll explore 15 of the most commonly used array methods in JavaScript, with code examples to illustrate their usage.

## .some()
The .some() method is used to test whether at least one element in an array passes a test implemented by a provided function. It returns true if the callback function returns a truthy value for at least one element in the array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // true
```

In this example, the .some() method is used to check if numbers array has at least one even number.

## .flat()
The .flat() method is used to flatten an array by removing nested arrays. It can be used to flatten arrays of any depth.

```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flatArray = nestedArray.flat();

console.log(flatArray); // [1, 2, 3, 4, 5, 6]
```

In this example, the .flat() method is used to flatten the nestedArray array into a single, one-dimensional array.

## .map()
The .map() method is used to transform an array by applying a function to each of its elements. It creates a new array with the results of the function applied to each element in the original array. The .map() method does not modify the original array; instead, it returns a new array with the transformed values.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

In this example, the .map() method is used to double each number in the numbers array. The resulting doubledNumbers array contains the transformed values.

## .findIndex()
The .findIndex() method is used to find the index of the first element in an array that satisfies a provided testing function. It returns the index of the first element in the array that satisfies the condition, or -1 if no element satisfies the condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const firstEvenIndex = numbers.findIndex((number) => {
  return number % 2 === 0;
});

console.log(firstEvenIndex); // 1
```
In this example, the .findIndex() method is used to find the index of the first even number in the numbers array.

## .forEach()
The .forEach() method is used to iterate over an array and execute a function for each element. Unlike the .map() method, .forEach() does not return a new array.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});
```

In this example, the .forEach() method is used to iterate over each element in the numbers array and print its double to the console.

## .reduce()
The .reduce() method is used to reduce an array to a single value by executing a reducer function for each element in the array. The reducer function takes two arguments: an accumulator and the current element. The accumulator is the value returned from the previous iteration of the function, and the current element is the current element being processed.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log(sum); // 15
```

In this example, the .reduce() method is used to compute the sum of all elements in the numbers array.

## .filter()
The .filter() method is used to create a new array with all elements that pass a test implemented by a provided function. It returns a new array containing all elements for which the callback function returns a truthy value.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
```

In this example, the .filter() method is used to create a new array containing only the even numbers in the numbers array.

## .every()
The .every() method is used to test whether all elements in an array pass a test implemented by a provided function. It returns true if the callback function returns a truthy value for every element in the array.

```javascript
Copy code
const numbers = [2, 4, 6, 8, 10];

const areAllEven = numbers.every((number) => {
  return number % 2 === 0;
});

console.log(areAllEven); // true
```

In this example, the .every() method is used to check if all elements in the numbers array are even.

## .flatMap()
The .flatMap() method is used to transform an array by applying a function to each of its elements and flattening the result into a new array. It is similar to using .map() followed by .flat(), but it is more efficient.

```javascript
Copy code
const numbers = [1, 2, 3];

const squaredNumbers = numbers.flatMap((number) => {
  return [number, number ** 2];
});

console.log(squaredNumbers); // [1, 1, 2, 4, 3, 9]
```

In this example, the .flatMap() method is used to create a new array containing each number in the numbers array along with its square.

## .fill()
The .fill() method is used to fill all the elements of an array with a static value. It modifies the original array and returns it.

``` javascript
Copy code
const numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers); // [0, 0, 0, 0, 0]
```

In this example, the .fill() method is used to replace all elements in the numbers array with 0.

## .find()
The .find() method is used to find the value of the first element in an array that satisfies a provided testing function. It returns the value of the first element in the array that satisfies the condition, or undefined if no element satisfies the condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers.find((number) => {
  return number % 2 === 0;
});

console.log(firstEvenNumber); // 2
```

In this example, the .find() method is used to find the first even number in the numbers array.

## .reverse()
The .reverse() method is used to reverse the order of the elements in an array. It modifies the original array and returns it.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers); // [5, 4, 3, 2, 1]
```

In this example, the .reverse() method is used to reverse the order of the elements in the numbers array.

## .includes()
The .includes() method is used to determine whether an array includes a certain element. It returns true if the array contains the element, and false otherwise.

```javascript
const numbers = [1, 2, 3, 4, 5];

const includesThree = numbers.includes(3);

console.log(includesThree); // true
```

In this example, the .includes() method is used to check if the numbers array contains the number 3.

## .sort()
The .sort() method is used to sort the elements in an array. By default, it sorts the elements in ascending order. It modifies the original array and returns it.

```javascript
const fruits = ['banana', 'apple', 'orange', 'pear'];

fruits.sort();

console.log(fruits); // ['apple', 'banana', 'orange', 'pear']
```

In this example, the .sort() method is used to sort the fruits array in alphabetical order.

## Conclusion
JavaScript provides a rich set of methods for working with arrays. The methods covered in this article are just a few examples of what is available. By using these methods effectively, you can write more concise and efficient code. Understanding these methods will help you to write better JavaScript code and make your programming tasks easier.