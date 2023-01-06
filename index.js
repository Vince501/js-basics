// First JS code
console.log('Hello World');

// Variables
let name = 'Vince';
console.log(name);

// Constants
const interestRate = 0.3;  

//Objects
let person = {
    name1: 'Vince',
    age: 21
};

console.log(person);

person.name1 = 'Gambi'; //Dot notation
person['name1'] = 'Bro'; //Bracket notation

let selection = 'name1';
person[selection] = 'Siz';

console.log(person.name1);

//Arrays (dynamic)
let selectedColour = ['red', 'blue'];
console.log(selectedColour);
console.log(selectedColour[0]);
selectedColour[2] = 1;
console.log(selectedColour);

//Functions
//performing task
function greet (name2, name3) {
    console.log('Hello ' + name2 + ' ' + name3);
} // no need for semi-colon

greet('Vincent');
greet('Sofia', 'Elizabeth');

//calc
function squared (number) {
    return number * number;
}

let number = squared(5);
console.log(number);
console.log(squared(4));