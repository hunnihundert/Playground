console.log('start');

let myVariable = 10;
console.log(myVariable)

// String, Numbers, Boolean, null, undefinded

const name = 'Hooni';
const age = 34;
const height = 171.1;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Strings
// Concatenation
console.log('my name is ' + name + ' and I am ' + age + ' years old.')
console.log(`my name is ${name} and I am ${age} old years old.`)

// methods

const string = 'Hello World!'

console.log(string.length)
console.log(string.toUpperCase())

// Arrays
const numbers = new Array(1,2,3,4);
console.log(numbers)
const fruits = ['apples','kiwi','strawberry',true,15]
fruits.push('pineapple')
fruits.unshift('banana')
console.log(fruits)
console.log(fruits.indexOf('apples'))

// Object literals (K-V pairs)
const person = {
    firstName: 'Hooni',
    lastName: 'Jung',
    age: 34,
    hobbies: ['programming','cooking','sports'],
    address: {
        street: 'yeoidaebang-ro 22 ma gil 50',
        city: 'Seoul',
        country: 'Korea'
    }
}

console.log(person.address.city)

const {firstName, lastName, address: {city}} = person
console.log(firstName, lastName, city)

person.email = 'hoon.jung@gmail.com'
console.log(person.email)

const todos = [
    {
        id: 0,
        text: 'Clean the dishes',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Buy groceries',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Get ready',
        isCompleted: true
    }
];

console.log(todos[0].text)

const todoJSON = JSON.stringify(todos)
console.log(typeof todoJSON)

// For Loops
for(let i = 0; i < 5; i++) {
    console.log(i)
}

let i = 0;
while(i < 3) {
    console.log(`this is ${i}`)
    i++
}

for(let todo of todos) {
    console.log(todo.text)
}

todos.forEach(function(todo){
    console.log(todo.text)
})

const todosText = todos.map(function(todo){
    return todo.id
})

console.log(todosText)

const todosDone = todos.filter(function(todo) {
    return todo.isCompleted == true
}).map(function(toaado){
    return toaado.text
})
console.log(todosDone)

const aa = 3;
const color = aa > 10 ? 'red' : 'blue'

console.log(color)

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
        
}

function addNums(num1 = 2, num2 = 3) {
    return num1 + num2;
}

const sum = addNums(1,22);
console.log(sum)

const multiplyNums = (num1 = 1, num2 = 3) => num1 * num2
const product = multiplyNums(5,5)
console.log(product)

// OOP
// Constructor
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName() {
        return `${firstName} ${lastName}`;
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

}
const person1 = new Person('Hoon', 'Jung', '07-05-1986')
console.log(person1.getFullName());
console.log(person1.getBirthYear());

// DOM
