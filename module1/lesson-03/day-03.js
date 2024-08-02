// Objects Examples
let olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps',
    gymnasticMen: 'John Doe'
  };


olympicRecords.swimming400Men = 'Michael Phelps'; // Add the property to the object
// console.log('swimming400Men' in olympicRecords)
olympicRecords.athletics100Men = 'Usain Bolt';
console.log('olympicRecords', olympicRecords)

// typeof olympicRecords.gymnasticMen === 'undefined' --> property doesn't exist
// typeof olympicRecords.gymnasticMen === 'string' --> property does exist

console.log('typeof', typeof olympicRecords.gymnasticMen)

console.log('Object.keys(olympicRecords)', Object.keys(olympicRecords)); // returns an array of the keys for olympicRecords
console.log('Object.values(olympicRecords)', Object.values(olympicRecords)); // returns an array of values for olympicRecords

// Check if "Mike Powel" is within the list of athletes
// 1. Retrieve the list of athletes
const athletes = Object.values(olympicRecords) // --> ["..."]
// 2. Go through the list and check for the value "Mike Powel" to be there
const checkMikePowel = athletes.includes('Mike Powel')
console.log('Mike Powel is part of the list', checkMikePowel);

// Check if Usain Bolt is in the list
for(let key in olympicRecords) {
    // console.log(key); --> print all the keys in my object
    // console.log(olympicRecords[key]) // print all the values
    if(olympicRecords[key] === 'Usain Bolt'){
        console.log('Usain Bolt is part of the list :)')
    }
  }

  for(let athlete of athletes){
    console.log('athlete', athlete)
  }

  // Array examples

  const fruitOne = {
    fruitName: 'Mango',
    quantity: 1
  }

  const fruitTwo = {
    fruitName: 'Dragon fruit',
    quantity: 10
  }

  const fruitThree = {
    fruitName: 'Banana',
    quantity: 23
  }

  const fruitCart = [fruitOne, fruitTwo, fruitThree]

  const fruitFour = {
    fruitName: 'Passion fruit',
    quantity: 12
  }

  const fruitFive = {
    fruitName: 'Strawberry',
    quantity: 14
  }

  fruitCart.push(fruitFour) // Add an element at the end of an array
  fruitCart.splice(2,0, fruitFive) // Adds fruitFive at index position 2, doesn't delete anything
  fruitCart.splice(1, 1) // Delete one element starting from index 1
  fruitCart.splice(-1, 1) // Remove the last element of the fruitCart array
  console.log('fruitCart', fruitCart)
//   console.log('fruitOne name', fruitCart[0].fruitName)
fruitCart.forEach(function(item){
    console.log(`${item.fruitName} in the cart has a quantity of ${item.quantity}`)
})

let phrase = "This is long enough for a string to count it words";

let words = phrase.split(" ");

console.log("words", words);

// Functions example

function sayHello() { // function with no parameter
  console.log('Hello there!');
}

function makeSum(a, b){ // function with two parameters a and b
  // add two numbers together and return their sum
  return a+b;
}

function makeProduct(a, b){
  return a*b;
}

console.log(makeSum(4, 9))
console.log(makeSum(7, 6))
console.log(makeProduct(3, 2))
sayHello()

// Function with multiple returns , only possible with conditional statements
function printName(name) {
  if (name.length === 0) {
    return 'Please provide a valid name!';
  }
 
  return `Name is ${name}.`;
}
 
console.log(printName('')); // => Please provide a valid name!
console.log(printName('George')); 

// Create a function that will give a summary of what has been purchased at the fruit shop
// it should print
// "You bought ... fruitName, ...fruitName and ... fruitName"
// "The total amount of fruit you bought is ...."

function generateFruitSummary(fruits){
// 1. Loop over the array of fruits
// 2. print the quantity and fruit name
// 3. Add every thing to a string
  if(fruits.length > 1){
    let summary = `You bought `;
    const quantities = fruits.map(function(fruit){
      return fruit.quantity;
    })
    const fruitList = fruits.map(function(fruit){
      if(fruit.quantity === 1){
        return fruit.fruitName;
      }
      else {
        return `${fruit.fruitName}s`
      }
    });// backup of the initial input
    console.log('fruitList', fruitList)
    console.log('quantities', quantities)

    for(let i = 0; i < fruits.length; i ++){
      if(i === fruits.length - 1){
        const removeLastComma = summary.slice(0, summary.length - 2);
        summary = `${removeLastComma}` + ` and ${quantities[i]} ${fruitList[i]}`
      }
      else {
        summary = summary + quantities[i] + " " + fruitList[i] + ", "
      }
    }
    console.log('summary', summary)
    return summary;
  }

}
generateFruitSummary(fruitCart)

//Create a function that accepts 3 numbers as parameters, and returns their sum.
function sum(a, b, c){
  let add = a+b+c;
  return add;
}
sum(1,2,3)
// Create a function named isNameOddOrEven() that accepts a string as a parameter. 
// The function should return whether a received string has an odd or even number of letters. 
// The expected return should be in the following format - 
// string: ’<name> has an even/odd number of letters
function isNameOddOrEven(name){
  // 1. Put an if statement, 
  if(name.length % 2 === 0){
    return `${name} has an even number of letters`
  }

  return `${name} has an odd number of letters`
}

console.log(isNameOddOrEven('Lloyd'))
console.log(isNameOddOrEven('Cristina'))
// Write a function that takes in a parameter "input" 
// and returns the last character in that string
// i.e: "Rijksmuseum" ---> "m"
function getLastCharacter(input){
  if(input.length === 0 ){
    return null;
  }
    // how do i get the last character of a string in javascript?
  // return input.charAt(input.length -1);
  return input[input.length -1]

}
console.log(getLastCharacter("Rijskmuseum"))
// Write a function that takes in one parameter "length" and prints out that many stars
// i.e: 3 ---> ***
function printStars(length){
  // Doha solution 1
  // let stars = "";

  // for(let i = 0; i < length; i++){
  //   stars += "*";
  // }
  // console.log(stars)
  console.log("*".repeat(length))

}
printStars(3)
printStars(6)
// Write a function that takes in an array of integers and returns the average of the array
// i.e: [2,5,8] ---> 5
//      [1,2,3] ---> 2

function sum(array) {
  if (!array.length) return;

  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function avg(array) {
  // !array.length is the same as writing array.length === 0
  if (!array.length) return;
 
  return sum(array) / array.length;
}

console.log(avg([7, 3, 45, 56]))
console.log(avg([10, 12, 14]))