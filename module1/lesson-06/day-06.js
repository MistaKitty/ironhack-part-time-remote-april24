//Recap Array methods exercise

// Create a new array with the cities first letter capitalized
// i.e: 'miami' --> 'Miami'
// how can i capitalize a city made of more than one word?
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capitalizedCities = cities.map(city =>  {
    if(city.includes(" ")){ // --> more than one word
        // use .indexOf() to find where the empty spaces are
        // capitalise the next index which is where the first letter of the next word is
        const nextWordIndex = city.indexOf(" ") + 1; // getting the second word first letter index position
        return `${city[0].toUpperCase()}${city.slice(1, nextWordIndex)}${city[nextWordIndex].toUpperCase()}${city.slice(nextWordIndex+1)}`;
    }
    return `${city[0].toUpperCase()}${city.slice(1)}`
})
console.log('capitalizedCities', capitalizedCities)


// Find all places between 150 and 400
// Find all places with a garage, a pool and cost less than 500 euros
// Determine what's the average price of an airbnb rental

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
    // {
    //   title: 'Awesome Suite',
    //   price: 230,
    //   type: 'Private Room',
    //   pool: false,
    //   garage: false
    // },
    // {
    //   title: "Apartment 10' from la Rambla",
    //   price: 930,
    //   type: 'Entire place',
    //   pool: true,
    //   garage: true
    // }
  ];

  const cheapPlaces = places.filter(place => place.price >= 150 && place.price <= 400)
  console.log('cheapPlaces', cheapPlaces)
  // ES5 
  const cheapPlacesWithGarageAndPool = places.filter(function(place){
    return place.garage && place.pool && place.price < 500;
  });
    // ES6 Arrow syntax
//   const cheapPlacesWithGarageAndPool = places.filter(place => place.garage && place.pool && place.price < 500)
  console.log('cheapPlacesWithGarageAndPool', cheapPlacesWithGarageAndPool)

  // 1. Use .reduce() starting at 0 to accumulate all the prices of the places
  // ES5 

  function avgPrice(cities){
    const sumOfPlaces = cities.reduce(function(acc, place){
        return acc + place.price;
      }, 0)
      // ES6 Arrow syntax
      //   const sumOfPlaces = places.reduce((acc, place)=> acc + place.price, 0)
      // 2. Divide the accumulation using the length of the array of places
        return sumOfPlaces/cities.length;
  }

  const avgPlaces = avgPrice(places)
  console.log('avgPlaces', avgPlaces)

  // .sort() example

  const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// function compare(a, b) {
//     if (a < b) return -1; // a is less than b
//     if (a > b) return 1; // a is greater than b
//     if (a === b) return 0; // a equals b
//   }

//   const sortedArray = numbers.sort(compare)

// ES5 syntax
// const sortedArray = numbers.sort(function(a, b) {
//         if (a < b) return -1; // a is less than b
//         if (a > b) return 1; // a is greater than b
//         if (a === b) return 0; // a equals b
// })

// ES6 syntax
const sortedArray = numbers.sort((a, b)=> b-a)

console.log('sortedArray', sortedArray)

const words = ['b', 'a', 'Third', 'Second', 'Hello', 'Goodbye', 'First', 'AA', 'A'];
 
words.sort(function (a, b) {
    return a.localeCompare(b)
});
 
console.log('words ',words);


const arr1 = ['one', 'two', 'three'];
const arr2 = [...arr1].reverse(); // --> spread operator
 
console.log(arr1); // 
console.log(arr2); //
 