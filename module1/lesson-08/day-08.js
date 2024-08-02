// function someCallbackFunction() {
//     console.log('Hey there, Ironhackers!');
// }
// let initialScenario = true;
// setTimeout --> delay the execution of something 
// const timeoutId = setTimeout(someCallbackFunction, 3000);

// if(initialScenario === false){
//     clearTimeout(timeoutId)
// }
// Counter example --> setTimeout
let counter = 1;

// setTimeout cancels without cleatTimeout 
// const callbackFunction = function () {
//     console.log(counter);
//   if(counter < 10){
//     setTimeout(callbackFunction, 1000); // --> recursive function call, 1 sec later
//     counter += 1; // increase the counter by 1
//   }
// };

// setTimeout cancels with cleatTimeout 
// const callbackFunction = function () {
//     console.log(counter);
//     timeoutId = setTimeout(callbackFunction, 1000); 
//     counter += 1;
   
//     if (counter > 10) {
//       clearTimeout(timeoutId);
//     }
//   };
 
// let timeoutId = setTimeout(callbackFunction, 1000);

// setInterval 1 to 10 count
// let i = 1;
// const intervalId = setInterval(function () {
//   console.log(i);
 
//   i++;
 
//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

//setInterval 10 to 1 countdown

let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);
  }
 
  i--;
}, 1000);