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

let myWatchedSeriesSentence = `series ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[1]}`
console.log(myWatchedSeriesSentence)

console.log(`I like to watch ${myWatchedSeriesLength.length} ${myWatchedSeriesSentence}`)

// Part II

const mynewWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const index = mynewWatchedSeries.indexOf(`the big bang theory`);
mynewWatchedSeries.splice (index, 3, `friends`);
mynewWatchedSeries.push (`house of the dragon`)
mynewWatchedSeries.unshift (`The Rings of Power`)
mynewWatchedSeries.splice(1,1)
let letter = `money heist`
console.log(letter.indexOf('n'))
console.log(mynewWatchedSeries)

// Exercise 3 : The Temperature Converter

// let celsius = 28
// let fahrenheit = celsius/5
// let fahrenheit = fahrenheit * 9


// Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual:


// Exercise 5 : Guess The Answers #2


typeof(15)
// Prediction: number
// Actual:

typeof(5.5)
// Prediction: number
// Actual:

typeof(NaN)
// Prediction: number
// Actual:

typeof("hello")
// Prediction: string
// Actual:

typeof(true)
// Prediction: boolean
// Actual:

typeof(1 != 2)
// Prediction: number
// Actual:

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction: hamburger
// Actual:

"1" + "3"
// Prediction: 4
// Actual:

"1" - "3"
// Prediction: -2
// Actual:

"johnny" + 5
// Prediction: johnny5
// Actual:

"johnny" - 5
// Prediction: NAN
// Actual:

99 * "hello"
// Prediction:
// Actual:

1 != 1
// Prediction: false
// Actual:

1 == "1"
// Prediction: true
// Actual:

1 === "1"
// Prediction: false
// Actual:


// Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: 4
// Actual:

10 % 5
// Prediction: 0
// Actual:

5 % 10
// Prediction: 2
// Actual:

"Java" + "Script"
// Prediction: JavaScript
// Actual:

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction:
// Actual:

true + true
// Prediction: 2
// Actual:

true + false
// Prediction: 1
// Actual:

false + true
// Prediction: 1
// Actual:

false - true
// Prediction: -1
// Actual:

!true
// Prediction:
// Actual:

3 - 4
// Prediction: -1
// Actual:

"Bob" - "bill"
// Prediction: nan
// Actual: