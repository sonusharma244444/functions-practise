'use strict';

// // 1 Default parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassenger = 9,
//   price = 199 * numPassenger
//   //ES5
//   // numPassenger = numPassenger || 2
//   // price = price || 299
// ) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('lh234');
// createBooking('lh234', undefined, 90);

// // 2 how passing arguments works : value v/s reference

// const flight = 'lh344';
// const jonas = {
//   name: 'sonu',
//   passport: 23556655888,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'lh6857857';

//   passenger.name = 'mr ' + passenger.name;
//   if (passenger.passport === 23556655888) {
//     alert('checked in');
//   } else {
//     alert('wrong passport');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // is the same as doing
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);

// checkIn(flight, jonas);

// 4 functions accepting callback functions

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // high order function
// const transformer = function (str, fn) {
//   console.log(`original string :${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`transformed by : ${fn.name}`);
// };

// transformer('javascript is the best', upperFirstWord);

// transformer('JAVAascript is the best', oneWord);

// // js use callback all the time
// const high5 = function () {
//   console.log('💖');
// };

// document.body.addEventListener('click', high5);

// ['sonu', 'kabir', 'martha', 'adam'].forEach(high5);

// //  5 functions return functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

console.log(greet('hey'));
const greeterHey = greet('hey');

greeterHey('sonu');
greeterHey('kabir');

// greet('hello')('sonu');

// // example with arrow function
// const greetBoy = hi => {
//   return hey => {
//     console.log(`${hi} ${hey}`);
//   };
// };

// console.log(greetBoy('hey'));

// const greeterBoy = greetBoy('hey');

// greeterBoy('sonu');

// greetBoy('hey')('sahil');

//6 the call and apply method

const kingfisher = {
  airline: 'kingfisher',
  iatacode: 'lh',
  booking: [],
  // book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iatacode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iatacode}${flightNum},`, name });
  },
};

kingfisher.book(239, 'sonu sharma');
kingfisher.book(635, 'sahil sharma');

console.log(kingfisher);

const eurowings = {
  airline: 'eurowings',
  iatacode: 'ew',
  booking: [],
};

const book = kingfisher.book;

// does not work
// book(23, 'sonu');

// call method
book.call(eurowings, 23, 'kabir sharma');
console.log(eurowings);

book.call(kingfisher, 369, 'kanika');
console.log(kingfisher);

const swiss = {
  airline: 'swiss',
  iatacode: 'lkj',
  booking: [],
};

book.call(swiss, 6598, 'kanika sharma');
console.log(swiss);

// apply method
const flightData = [583, ' sharma'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// 7 the Bind method

// book.call(eurowings, 23, 'kabir sharma');

const bookEw = book.bind(eurowings);
const bookSw = book.bind(swiss);
const bookKw = book.bind(kingfisher);

bookEw(236, 'kabira sharma');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('latika sharma');
bookEw23('kanika sharma');

console.log(eurowings);

// with event listeners
kingfisher.planes = 300;
kingfisher.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', kingfisher.buyPlane.bind(kingfisher));

// partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);

console.log(addVat(123));

// function calling function example
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

// challenge 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  //  This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n write option number`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResult();
    this.displayResult('string');
  },

  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //poll result are 13, 2, 4,2
      console.log(`poll result are${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// [5, 2, 3];
// [1, 5, 3, 9, 6, 1];

// 8 immediately invoked function expression (IIFE)

const runOnce = function () {
  console.log('this will never run again');
};

runOnce();

// IIFE

(function () {
  console.log('this will never run again');
})();

(() => {
  console.log('this will never run again');
})();

// 9 closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// 10 more closure examples

// example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();

f();
console.dir(f);
// re-assigning f function
h();
f();

console.dir(f);

// example 2
const boardPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${preGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(250, 3);

//challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
