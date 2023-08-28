// Primitives: numbers, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;//assigning a string would produce an error

let userName: string;
userName = 'lynskey';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];//array of specified type
hobbies = ['Sports', 'Cooking', 'Running']

// Type Alias
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Gareth',
    age: 29
};


let people: Person[];

// Type inference

let course = 'React - The Complete Guide';
//course = 12341;//if a string is immediately assigned to a variable, type inference will assign that variable as a string


// Union type
let course1: string | number = 'React - The Complete Guide';
course1 = 12341;


// Function & types
function add(a: number, b: number){//functions can also have types for the return values
    return a + b;
}

function print(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [ 1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a','b','c'],'d');
console.log(updatedArray);
console.log(stringArray);

//updatedArray[0].split('');