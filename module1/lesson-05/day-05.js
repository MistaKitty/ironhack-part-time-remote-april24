// .map examples
const array = [1, 2, 3];
 
const newArray = array.map(function (number) {
  return {value: (number * 2) + 10}
});

const newArray2 = array.map(number => number * 2);
 
console.log(newArray);
console.log(newArray2);

const foods = ['pizza', 'sandwiches', 'ice cream'];
const capsFoods = foods.map(food => {
    const vowels = [ 'a', 'e', 'i', 'o', 'u'];
    if(vowels.includes(food[0])){
        return food.toUpperCase()
    }
    return `${food[0].toUpperCase()}${food.slice(1)}`;
});
 
console.log(capsFoods);

const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

  const reorganisedStudents = students.map(student => {
    return {
        name: student.name,
        finalExam: student.finalExam
    }
  })

  console.log('reorganisedStudents', reorganisedStudents)

  // .filter() examples
const numbers = [1, 2, 3, 4, 5, 6];
 
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 === 1);
 
console.log('evenNumbers', evenNumbers); 
console.log('oddNumbers', oddNumbers); 

// return a list of students whose name starts with a vowel

const newStudents = students.filter(student => [ 'a', 'e', 'i', 'o', 'u'].includes(student.name[0].toLowerCase()))

console.log('newStudents', newStudents)

// return the people of drinking age

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
];

const ofDrinkingAge = people.filter(person => {
    return person.age >= 21;
});

console.log('ofDrinkingAge', ofDrinkingAge)

// Airbnb example

const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];

  const affordableApartments = places.filter(place => {
    //place to be 500 or under euros
    return place.price <= 500;
  })

  console.log('affordableApartments', affordableApartments)

  const placeWithAPool = places.filter(place => {
    return place.pool;
  })

  const placeWithoutAPool = places.filter(place => {
    return !place.pool;
  })
  console.log('placeWithoutAPool', placeWithoutAPool)

  const affordableWithAPool = places.filter(place => {
    return place.pool && place.price <= 500;
  })
  console.log('affordableWithAPool', affordableWithAPool)

  const numbers2 = [1, 60, 112, 123, 100, 99, 73, 45];

  const oddAndGreaterThan42 = numbers2.filter(number => {
    return number % 2 === 1 && number > 42;
  })

  console.log('oddAndGreaterThan42', oddAndGreaterThan42)

  //.reduce examples

  const numbers3 = [2, 4, 6, 8];
 
const total = numbers3.reduce(function (accumulator, currentValue) {
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
});
 
console.log('total is: ', total);

// ES6:
const words = ['This', 'is', 'one', 'big', 'string'];
const bigString = words.reduce((sum, word) => sum + word);
 
console.log(bigString); // <== Thisisonebigstring

// calculate the average age of array people

const ages = people.reduce(function (sum, person) {
    return sum + person.age;
  }, 0); // initialValue to 0
   
  console.log('averageAge of people',ages/people.length); 

  const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
  };

  const totalReviews = product.reviews.reduce(function (acc, review) {
    return acc + review.rate;
  }, 0); // starts acc to 0
  const averageRate = totalReviews / product.reviews.length;
   
  console.log(`averageRate rate: ${averageRate}`); // <== averageRate rate:  3.2