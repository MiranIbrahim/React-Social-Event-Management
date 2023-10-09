## README.md

### Question 1
let greeting;
greetign = {};
console.log(greetign);

**Answer:** B. ReferenceError: greetign is not defined

**Explanation:**

The variable `greetign` is declared but never initialized. Therefore, when you try to access it, you will get a ReferenceError.

### Question 2
function sum(a, b) {
  return a + b;
}

sum(1, "2");

**Answer:** A. NaN

**Explanation:**

The `sum()` function adds two numbers together. However, when you try to add a number and a string, JavaScript will try to convert the string to a number. In this case, the string `"2"` will be converted to the number 2. Therefore, the result of the `sum()` function will be 3. However, the `console.log()` function will print the result as a string, so the output will be `"3"`.

### Question 3
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

**Answer:** A. ['🍕', '🍫', '🥑', '🍔']

**Explanation:**

The `food` array is a constant, which means that its contents cannot be changed. Therefore, when you change the value of `info.favoriteFood`, the `food` array remains unchanged.

### Question 4
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

**Answer:** B. Hi there, undefined

**Explanation:**

The `sayHi()` function takes a name as a parameter, but when you call the function, you do not pass in a name. Therefore, the value of the `name` parameter will be `undefined`. When the function returns, it will return the string `Hi there, ${name}`, which will be evaluated to `Hi there, undefined`.

### Question 5
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

**Answer:** C. 3

**Explanation:**

The `forEach()` method iterates over the elements of an array and calls a callback function for each element. In this case, the callback function checks if the element is greater than zero. If it is, the `count` variable is incremented by one. Therefore, the value of the `count` variable after the `forEach()` method has finished iterating over the `nums` array will be 3.




### Features of this site : 
1. User Registration
2. Authentication
3. AOS
4. Private Route
5. Password validation


repository link : https://github.com/programming-hero-web-course-4/b8a9-event-management-MiranIbrahim
live link : https://react-social-event-management.web.app/?fbclid=IwAR0T13869RBTgYP37pKBmQYwrDZ0U0tzuZfPM4-7Qm1x3y_494Fb7vObknM