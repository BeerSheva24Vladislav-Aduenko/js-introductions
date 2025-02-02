// // 1.
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
//   }
//   sayHi();

// //   D: undefined and ReferenceError

// // 2.
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

// //   C: 3 3 3 and 0 1 2

// // 3.
// +true;
// !"Lydia";

// // A: 1 and false

// // 4.	What's the output?
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// // B: 20 and NaN

// // 5.	Which one is true?
// const bird = {
//   size: "small"
// };

// const mouse = {
//   name: "Mickey",
//   small: true
// };
// // A: mouse.bird.size is not valid
// // B: mouse[bird.size] is not valid
// // C: mouse[bird["size"]] is not valid
// // D: All of them are valid

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);
// // A: Hello

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// const person = {
//   name: "Lydia",
//   age: 21
// };

// for (const item in person) {
//   console.log(item);
// }

// function getInfo(member, year) {
//   member.name = "Lydia";
//   year = "1998";
// }

// const person = { name: "Sarah" };
// const birthYear = "1997";

// getInfo(person, birthYear);

// console.log(person, birthYear);

// function greeting() {
//   throw "Hello world!";
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log("It worked!", data);
//   } catch (e) {
//     console.log("Oh no an error:", e);
//   }
// }

// sayHi();

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young."
//   } else {
//     const message = "Yay! You're old enough!"
//   }

//   return message
// }

// console.log(checkAge(21))

// const person = { name: "Lydia" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }

// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// firstFunction();
// secondFunction();

// const myPromise = Promise.resolve('Woah some cool data');

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();

// function sum(a, b) {
//   return a + b;
// }
// sum(1, "2");
// console.log(sum(1, "2"));

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);
// [0, 1].reduce((acc, cur) => {
//   return acc.concat(cur);
// }, [1, 2]);

// [
//   [0, 1],
//   [2, 3],
// ].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );

class Deferred {
  #functions
  constructor() {
      this.#functions = [];
  }
  then(fun) {
      this.#functions.push(fun);
  }
  resolve(value) {
      this.#functions.forEach(fun => value = fun(value));
  }
}
const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });

d.then(function(res){ console.log("2 ", res); return "b"; });

d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');


