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

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// high order function
const transformer = function (str, fn) {
  console.log(`original string :${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by : ${fn.name}`);
};

transformer('javascript is the best', upperFirstWord);

transformer('JAVAascript is the best', oneWord);

// js use callback all the time
const high5 = function () {
  console.log('💖');
};

document.body.addEventListener('click', high5);

['sonu', 'kabir', 'martha', 'adam'].forEach(high5);

//  5 functions return functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

console.log(greet('hey'));
const greeterHey = greet('hey');

greeterHey('sonu');
greeterHey('kabir');

greet('hello')('sonu');

// example with arrow function
const greetBoy = hi => {
  return hey => {
    console.log(`${hi} ${hey}`);
  };
};

console.log(greetBoy('hey'));

const greeterBoy = greetBoy('hey');

greeterBoy('sonu');

greetBoy('hey')('sahil');

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
const bookLw = book.bind(swiss);
const bookKw = book.bind(kingfisher);

bookEw(236, 'kabira sharma');

const book