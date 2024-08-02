// function declaration
function calcSum (x, y) {
    return x + y;
}

// function expression

const calcProduct = function(x, y){
    return x*y;
}


console.log(calcProduct(4,5))

// callbacks
function putShirt() {
    console.log('Putting on the shirt.');
}
   
function putSocks () {
    console.log('Putting on the socks.');
}
   
function putPants () {
    console.log('Putting on the pants.');
}
   
function putShoes () {
    console.log('Putting on the shoes.');
}
   
   
function getReadyForWork (callback1, callback2, callback3, callback4) {
    callback1();
    callback2();
    callback3();
    callback4();
    console.log("I'm ready to go to work!!!");
}
   
   
  getReadyForWork(putSocks, putShoes, putPants, putShirt); // this will execute 4 functions

  function printName(name, anonFunc) {
    anonFunc(name);
  }
   
  printName('sandra', function (name) {
    // console.log(name[0].toUpperCase() + name.slice(1));
    console.log(`${name[0].toUpperCase()}${name.slice(1)}`);
  });

  const students = ['anna', 'brian', 'chloe'];
 
// Loop over an array and print each element
students.forEach( function (el) {
  console.log('Hello ' + el);
});

// setTimeout( function () {
//     console.log('I am anonymous function and I will execute after 2 seconds');
//   }, 2000);

//   setInterval( function () {
//     console.log('I am anonymous function and I will execute after 2 seconds');
//   }, 2000);

  // function expression syntax
const greeting1 = function (name) {
    console.log(`Hello, ${name}!`);
  };
   
  // arrow function syntax
  const greeting2 = (name) => {
    console.log('Hey :)')
    console.log(`Hello, ${name}!`);
  };

  const greeting3 = (name) => console.log(`Hey, ${name}!`);

  const greeting5 = () => console.log('Hello there!');

  greeting5()

  // Data Structures examples

  const students2 = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];

  const bob = { name: "Bob", age: 21 };
    students2.push(bob);

  console.log(students2)

  const twoD = [
    ["Bob", "Susy", "Ted"],
    ["Lilly", "Sarah", "Bill"],
    ["Thomas", "Barry", "Alex"]
  ]

console.log(twoD[0][0][0]); // <== 'Bob'

const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ],
    [
      { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
      { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
      { firstName: 'Emie', lastName: 'Franecki', age: 29 },
      { firstName: 'Okey', lastName: 'Runte', age: 18 },
      { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
    ],
    [
      { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
      { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
      { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
      { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
      { firstName: 'Stanley', lastName: 'Hand', age: 22 }
    ],
    [
      { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
      { firstName: 'Mervin', lastName: 'Blick', age: 28 },
      { firstName: 'Damien', lastName: 'Rohan', age: 28 },
      { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
      { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
    ],
    [
      { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
      { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
      { firstName: 'Braeden', lastName: 'Walker', age: 26 },
      { firstName: 'Derick', lastName: 'Weber', age: 22 },
      { firstName: 'Robert', lastName: 'Beatty', age: 30 }
    ]
  ];

  console.log(classes[1][3].firstName)

  const classRoom = {
    teacher:  { firstName: 'Greg', lastName: 'Dach', age: 38 }
  };

  console.log(classRoom.teacher.firstName); 
  console.log(classRoom['teacher']['lastName'])

  const school = {
    name: "Fake School 1",
    classRooms: [
      {
        teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
        students: [
          { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
          { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
          { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
          { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
          { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
        ]
        },
      {
        teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
        students: [
          { firstName: 'Manley', lastName: 'Doyle', age: 18 },
          { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
          { firstName: 'Sid', lastName: 'Rohan', age: 30 },
          { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
          { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
        ]
      }
    ]
  }

  console.log(school.classRooms[1].teacher.firstName)