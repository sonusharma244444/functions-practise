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
