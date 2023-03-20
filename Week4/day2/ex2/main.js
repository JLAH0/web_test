// Functions & Methods SYNTAX:
function appelation1() {
}
const appelation2 = function () {
}
const appelation3 = () => {
}
const obj = {
    age: 45,
    func1() {
        console.log(this.age)
    },
    func2: function () {
        console.log(this.age)
    },
    func3: () => {
        console.log(this.age)
    },
    func4: appelation1
}
obj.func1()
obj.func2()
obj.func3()



// DECONSTRUCTION BASICS
const person = {
    fname: 'Bob',
    lname: 'Bobson',
};
// const fname = person.fname;
// const lastName = person.lname;
const { fname, lname: lastName } = person;
console.log(fname, lastName)


// DECONSTRUCTION FROM ARRAY
const arr = ['111', '222', '333'];
const triple1 = arr[0];
const triple2 = arr[1];
const triple3 = arr[2];
console.log(triple1, triple2, triple3)

const [t1, t2, t3] = arr;
console.log(t1, t2, t3)


// DECONSTRUCTION FROM BOTH ARRAY & OBJECTS
const users = [
    {
        fname: 'Bob',
        lname: 'Bobson',
    },
    {
        fname: 'Sarah',
        lname: 'Sason',
    },
    {
        fname: 'Sponge',
        lname: 'Ocean',
    }
];
const [, , { lname }] = users;
console.log(lname)


// SPREADING IN ARRAYS
const original = ['111', '222', '333'];
const arr1 = [1, 2, 3];
arr1.push(original[0])
arr1.push(original[1])
arr1.push(original[2])
console.log(arr1);
const arr2 = [1, 2, 3];
arr2.push(...original);
console.log(arr2);
const arr3 = [1, 2, 3, ...original];
console.log(arr3);
const copy = [...original];
console.log(copy);

// SPREADING IN OBJECTS
const person = {
    fname: 'Bob',
    lname: 'Bobson',
}
const clone = {
    ...person
}
console.log(clone);
const imperfectClone = {
    lname: 'Toulet',
    ...person,
    fname: 'Damien',
}
console.log(imperfectClone);
