// /* Number and Maths */
// const score = 400;
// console.log(score); //400

// // Explicitly we are saying that its an Number
// const balance = new Number(300);

// console.log(balance); //[Number: 300]

// // Convert number to string
// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

// const otherName = 100000;
// console.log(otherName.toLocaleString('en-IN'))

// ******************** Maths **************************** //

console.log(Math); //object
console.log("abs of -101 is: " + Math.abs(-101)); //this will give output as 101 it will be positive
console.log("Round of 5.4 is: " + Math.round(5.4)); // 5
console.log("floor of 8.7 is: " + Math.floor(8.7)); // After point it will consider lowest value eg 10.4 so 10 and 10.8 is 10
console.log("Ceil of 8.4 is: " + Math.ceil(8.4)); // After point it will consider highest value eg 10.4 so 11 and 10.8 is 11
console.log("Minimum from given Numbers is: " + Math.min(10, 55, 75, 33, 6)); // will give minimum from given range
console.log("Maximum from given Range is: " + Math.max(10, 15, 99, 20, 25)); // will give maximum from given range
console.log("Random number is: " + Math.random());  //will give any random number
const max = 20
const min = 10
console.log("Random Number with math is: " + (Math.floor(Math.random()*(max-min+1))+min))
