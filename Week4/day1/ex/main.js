// Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];
const removeFirstName = people.shift(1)
console.log(removeFirstName)
console.log(people)

console.log(people.pop(3))

people.push('Jason');
console.log(people)

people.push('Jeanluc')
console.log(people)

console.log(people.indexOf('Mary'))

let newPeople = people.slice(1, 3,)
console.log(newPeople)

console.log(people.indexOf('foo'))

const last = people
console.log(last.indexOf())
console.log(last.length)

// Part II - Loops

for (let i = 0; i < 1; i++) {
    const element = people[i];
    console.log(people)
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i]=== "Jason") {
        break
    }
    
}


// Exercise 2 : Your favorite Colors

const colors = ['blue', 'red', 'dark', 'orange', 'white'];

for (let i = 0; i < colors.length; i++) {
console.log(`my #${i + 1} choice is ${colors[i]}`)    
}

const suffixes = ['st', 'nd', 'rd', 'th', 'th'];

for (let i = 0; i < colors.length; i++) {
let suffixesIndex = i <= 2 ? i : 3;
console.log(`my ${i + 1}${suffixes[suffixesIndex]} choice is ${colors[i]}`)
}

// Exercise 3 : repeat the quastion

let number = prompt('Type a number')
console.log(typeof number)

while (Number(number) < 10) {
    number = prompt('please enter a number greater than 10')
}

// Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
  }
  
  console.log(building.numberOfFloors);
  console.log(building.numberOfAptByFloor.firstFloor);
  console.log(building.numberOfAptByFloor.thirdFloor);
  
  // Console.log the name of the second tenant and the number of rooms he has in his apartment.
  
  secondTenants = building.nameOfTenants[1]
  numberOfRoom = building.numberOfRoomsAndRent.dan[0]
  console.log(` ${secondTenants} has ${numberOfRoom} apartments`)
  
  // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
  
  sarahrent = building.numberOfRoomsAndRent.sarah[1]
  davidRent = building.numberOfRoomsAndRent.david[1]
  danRent = building.numberOfRoomsAndRent.dan[1]
  
  sarahAndDavidRent = sarahrent + davidRent
  
  if (sarahAndDavidRent > danRent) {
    danRent = +1200
  }
  console.log(danRent)  


// Exercise 5 : Family

const family = {
    father:'Jack',
    mother:'Sarah',
    daughter: 'Amanda',
    son: 'John'
}

for (const key in family) {
  console.log(key);
  console.log(family[key]);
}

// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let sentence = '';  
for (const key in details) {
phrase = key + ' ' + details[key]
sentence += phrase + ' '
}

    console.log(sentence)


// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const alpha = names.sort();
console.log(alpha)
nameOfSociety = ''

for (let i = 0; i < alpha.length; i++) {
console.log(names[i]);  
let firstletter = alpha[i].substring(0, 1);
console.log(firstletter)
nameOfSociety = nameOfSociety + firstletter
}
console.log(nameOfSociety)