// 1.
function sayHi() {
    console.log(name);
    console.log(age);
    var name = "Lydia";
    let age = 21;
  }
  sayHi();
  
//   D: undefined and ReferenceError

// 2.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

//   C: 3 3 3 and 0 1 2

// 3.
+true;
!"Lydia";

// A: 1 and false


// 4.	What's the output?
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());


// B: 20 and NaN


// 5.	Which one is true?
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
// A: mouse.bird.size is not valid 
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid



let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
// A: Hello