// Exercise 1: Simple If/Else Statement

let x = 5;
let y = 2;

if (x > y) {
    console.log("x is the biggest number");
}

else {
    console.log("y is the smallest number");
}


// Exercise 2: Chihuahua

let newDog = 'Chihuahua';
let length = newDog.length;
console.log(length);

console.log(newDog.toUpperCase());

console.log(newDog.toLowerCase());


if (newDog==="Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}
else {
    console.log("I dont care, I prefer cats");
}

// Exercise 3: Even Or Odd

const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}


// Exercise 4: Group Chat

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
const userLength = users.length
console.log(userLength)

if(userLength == 0){
    console.log('no one is online')

}else if( userLength == 1){
    console.log(`${users[0]} is online`)
}else if( userLength == 2){
    console.log(`${users[0]} and ${users[1]} are online`)
}else{
    remainingUsersLength = userLength - 2
    console.log(`${users[0]} , ${users[1]} and ${remainingUsersLength} more are online`)
}

