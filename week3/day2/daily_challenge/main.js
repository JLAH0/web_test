// Exercise 1: Your Favorite Food
let breakfast = 'Fruits';
let lunch = 'Snack';
let dinner = 'pasta';
console.log(`i eat ${breakfast} in the morning, ${lunch} at noon and ${dinner} for the dinner`)


// Exercise 2 : Series
// Part I
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries;
console.log(myWatchedSeriesLength.length);

let myWatchedSeriesSentence = `series ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[1]}`;
console.log(myWatchedSeriesSentence)

console.log(`I like to watch ${myWatchedSeriesLength.length} ${myWatchedSeriesSentence}`)

// Part II

const mynewWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const index = mynewWatchedSeries.indexOf(`the big bang theory`);
mynewWatchedSeries.splice(index, 3, `friends`);
mynewWatchedSeries.push(`house of the dragon`);
mynewWatchedSeries.unshift(`The Rings of Power`);
mynewWatchedSeries.splice(1, 1);
let letter = `money heist`;
console.log(letter.indexOf('n'));
console.log(mynewWatchedSeries);

// Exercise 3 : The Temperature Converter

let celsius = 32;
let fahrenheit = celsius / 5;
console.log(fahrenheit);
fahrenheit = fahrenheit * 9;
console.log(fahrenheit);
fahrenheit = fahrenheit + 32;
console.log(fahrenheit);
console.log(`${celsius}°C is ${fahrenheit}°F.`)


// Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
// Prediction: 55
// Actual:

a = 2;

console.log(a + b) //second expression
// Prediction: 23
// Actual:


// Exercise 5 : Guess The Answers #2


typeof (15)
// console.log(typeof (15))
// Prediction: number
// Actual: number

typeof (5.5)
// console.log(typeof (5.5))
// Prediction: number
// Actual: number

typeof (NaN)
// console.log(typeof (NaN))
// Prediction: number
// Actual: number

typeof ("hello")
// console.log(typeof ("hello"))
// Prediction: string
// Actual: string

typeof (true)
// console.log(typeof (true))
// Prediction: boolean
// Actual: boolean

typeof (1 != 2)
// console.log(typeof (1 != 2))
// Prediction: number
// Actual: boolean

"hamburger" + "s"
// console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// console.log("hamburgers" - "s")
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// console.log("1" + "3")
// Prediction: 13
// Actual: 13

"1" - "3"
// console.log("1" - "3")
// Prediction: -2
// Actual:

// "johnny" + 5
// console.log("johnny" + 5)
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5
// console.log("johnny" - 5)
// Prediction: NAN
// Actual: NaN

99 * "hello"
// console.log(99 * "hello")
// Prediction: NAN
// Actual: NaN

1 != 1
// console.log(1 != 1)
// Prediction: false
// Actual: false

1 == "1"
// console.log(1 == "1")
// Prediction: true
// Actual: true

1 === "1"
// console.log(1 === "1")
// Prediction: false
// Actual: false


// Exercise 6 : Guess The Answers #3

5 + "34"
// console.log(5 + "34")
// Prediction: 534
// Actual: 534

5 - "4"
// console.log(5 - "4")
// Prediction: NaN
// Actual: 1

10 % 5
// console.log(10 % 5)
// Prediction: 0
// Actual: 0

5 % 10
// console.log(5 % 10)
// Prediction: 5
// Actual: 5

"Java" + "Script"
// console.log("Java" + "Script")
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// console.log(" " + " ")
// Prediction:  two blank space
// Actual:

" " + 0
// console.log(" " + 0)
// Prediction: 0
// Actual: 0

true + true
// console.log(true + true)
// Prediction: 2
// Actual:2

true + false
// console.log(true + false)
// Prediction: 1
// Actual:1

false + true
// console.log(false + true)
// Prediction: 1
// Actual: 1

false - true
// console.log(false - true)
// Prediction: -1
// Actual: -1

!true
// console.log(!true)
// Prediction: false
// Actual:false

3 - 4
// console.log(3 - 4)
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// console.log("Bob" - "bill")
// Prediction: nan
// Actual: NaN
