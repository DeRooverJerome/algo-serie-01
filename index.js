// Algorithmie en JAVASCRIPT -----------------------------------------
// Séries 1 -------------------------

// 00 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Notes
// Don't forget to return the result.

// Expected results
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// ************* RESULT ***************************

// function makesTen(a, b) {
//   if (a + b == 10 || a == 10 || b == 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(makesTen(9,10));
// console.log(makesTen(9,9));
// console.log(makesTen(1,9));

// 01 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes the age in years and returns the age in days.

// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.
// Expected results
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

// ************* RESULT ***************************

// function calcAge(years){
//     return years * 365
// }

// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

// 02 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Notes
// Expect any positive number between 1 and 1000.
// Expected results
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

// ************* RESULT ***************************

// function addUp(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// 03 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Notes
// All test arrays will have at least one element and are valid.
// Expected results
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// ************* RESULT ***************************

// function minMax(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return [min, max];
// }
// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

// 04 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Expected results
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// ************* RESULT ***************************

// function detectWord(crowd) {
//   let word = "";
//   for (let i = 0; i < crowd.length; i++) {
//     if (crowd[i] === crowd[i].toLowerCase()) {
//       word += crowd[i];
//     }
//   }
//   return word;
// }

// console.log(detectWord("UcUNFYGaFYFYGtNUH"));
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

// 05 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 10},
//   {name: "lime", price: 10},
//   {name: "coke", price: 8},
//   {name: "vodka", price: 17},
//   {name: "water", price: 3},
// ]
// Expected results
// The output of the sorted drinks object will be:

// sortDrinkByPrice(drinks) ➞ [
//     {name: "water", price: 3},
//     {name: "coke", price: 8},
//     {name: "lemonade", price: 10 },
//     {name: "lime" , price: 10},
//     {name: "vodka", price: 17},
// ]

// ************* RESULT ***************************

// const drinks = [
//   { name: "lemonade", price: 10 },
//   { name: "lime", price: 10 },
//   { name: "coke", price: 8 },
//   { name: "vodka", price: 17 },
//   { name: "water", price: 3 },
// ];

// drinks.sort((a,b) => a.price - b.price)

// console.log(drinks);

// 06 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.
// Expected results
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// ************* RESULT ***************************

// function animals(a, b, c) {
//   return a * 2 + b * 4 + c * 4;
// }

// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));
// console.log(animals(5, 2, 8));

// 07 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that takes three arguments probability, prize, pay and returns true if probability * prize > pay; otherwise return false.

// To illustrate:

// profitableGamble(0.2, 50, 9)

// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Notes
// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

// Don't overthink this exercise. It's a simple equation that is already given in the note above ;)
// Expected results
// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true

// ************* RESULT ***************************

// function profitableGamble(probability, prize, pay) {
//   return probability * prize > pay;
// }

// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));

// 08 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

// Expected results
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

// ************* RESULT ***************************

// function frames(a, b) {
//   return a * 60 * b;
// }

// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

// 09 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Notes
// Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.
// Expected results
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

// ************* RESULT ***************************

// function calculateFuel(fuel) {
//   if (fuel > 10) {
//     return fuel * 10;
//   } else {
//     return 100;
//   }
// }

// console.log(calculateFuel(15));
// console.log(calculateFuel(23.5));
// console.log(calculateFuel(3));
