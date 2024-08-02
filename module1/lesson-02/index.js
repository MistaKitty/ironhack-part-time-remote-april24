const favoriteBook = {
    bookName: 'The Art of War',
    author: 'Sun Tzu',
    haveRead: true
};

const customerOne = {
    name: 'Lloyd Chambrier',
    gender: 'male',
    age: 34,
    hobbies: ["Kickboxing", "Hiking", "Traveling"],
    likesCoffee: false
};

console.log(favoriteBook['bookName'].length) // available but not commonly used syntax
console.log(favoriteBook.author[0]) // commonly used syntax
console.log(customerOne.hobbies[0][0]) // "Kickboxing" --> ["K", "i", "c", "k", "b", "o","x","i","n","g"]
console.log(customerOne['hobbies'][1])
console.log(customerOne.hobbies.length)



for(let i = 0; i < customerOne.hobbies.length; i++){
    // only print out "Kickboxing" or "Traveling" when going over the array of hobbies
    // if(customerOne.hobbies[i] === 'Kickboxing'||customerOne.hobbies[i] === 'Traveling'){
    //     console.log(customerOne.hobbies[i], 'is a fun hobby :)')
    // }
    // else {
    //     console.log(customerOne.hobbies[i],' This hobby is less fun :(')
    // }

    // if hobby === Kickboxing don't print out traveling
    // if hobby === Traveling don't print out kickboxing
    if(customerOne.hobbies[i] === 'Kickboxing'  && !customerOne.hobbies.includes('Traveling')){
        console.log(customerOne.hobbies[i], 'is a fun hobby :)')
    }
    else if(customerOne.hobbies[i] === 'Traveling' && !customerOne.hobbies.includes('Kickboxing')){
        console.log(customerOne.hobbies[i], 'is a fun hobby :)')
    }
}

const age = 76;
 
if (age <= 16) {
  console.log('You have a teenager discount.');
} else if (age >= 65) {
  console.log('You have a senior citizen discount :)');
} else {
  console.log("Sorry, you don't have any discount :(");
}

if (customerOne.gender === 'male') {
    // if (customerOne.likesCoffee === true) {
    if (customerOne.hobbies.includes('Traveling')) {
        console.log(customerOne.name, 'likes to travel')
    } else {
        console.log(customerOne.name, "doesn't like to travel")
    }
  } else {
    console.log('this customer is female')
    // The code will be executed if
    // condition === false
  }

// Game of Thrones if ...else if example
// const characterName = 'Tyrion'
// let house = '';

// if (characterName === 'Khal Drogo') {
//   house = 'Dothraki Horselord';
// } else if (characterName === 'Daenerys') {
//   house = 'Targaryen';
// } else if (characterName === 'Jon Snow' || characterName === 'Sansa' || characterName === 'Arya') {
//   house = 'Stark';
// } else if (characterName === 'Cersei' || characterName === 'Tyrion' || characterName === 'Ser Jaime') {
//   house = 'Lannister';
// } else {
//   house = 'Other';
// }

// console.log(`Your favorite character is from the house ${house}.`);

// Game of Thrones switch example

const showName = 'sansa';
let house = '';
 
switch (showName.toLowerCase()) {
  case 'khal drogo':
    house = 'Dothraki Horselord';
    break;
  case 'daenerys':
    house = 'Targaryen';
    break;
  case 'jon snow':
  case 'sansa':
  case 'arya':
    house = 'Stark';
    break;
  default:
    house = 'other';
}
 console.log(`${showName[0].toUpperCase()}${showName.slice(1)} is from house ${house}`)

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// let i = 5;
 
// while (i <= 100) {
//   console.log(i);
//   i++; // this is the same as i = i + 1
// }

let j = 9;

// is j an odd or even number?

// % --> return remainder of the division

if(j%2 === 0){
    console.log("j is an even number")
}
else {
    console.log("j is an odd number")
}



