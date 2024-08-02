let firstName = "Lloyd"; // '' String
let lastName = "Chambrier"; // "" String
const age = 34; // Number --> the value of the variable is a constant, it will never change

const isMarried = false; // Boolean
const likesCoffee = true; // Boolean
const likesJuice = false;

const testNumberA = 87;
const testNumberB = 65;

let likesTea; // undefined
// likesTea = true; // Boolean
let likesCat = null; // null
// likesCat = false;
console.log(firstName.length, lastName.toUpperCase())
console.log(age)
console.log(likesCat)
console.log(firstName.charAt(0))
console.log(firstName.charAt(1))
console.log(firstName.charAt(2))
console.log(firstName + " " + lastName.toUpperCase())

console.log(testNumberA + testNumberB)
console.log(testNumberA - testNumberB)
console.log(testNumberA * testNumberB)

console.log('likesCoffee && likesJuice', likesCoffee && likesJuice)
console.log('likesCoffee || likesJuice', likesCoffee || likesJuice)
console.log('!likesCoffee', !likesCoffee)