const directions = [
    "Starting point: Ironhack Miami",
    // "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    // "➔ Turn right onto S Miami Ave",
    // "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
  ];
   
   
//   function getDirections(step, callback, errorCallback) {
//     // setTimeout(() => {
//       console.log( directions[step] );
      
//       if (!directions[step]) errorCallback("Instructions not found.");
//       else callback();
//     // }, 2000); 
//   }
   
//   // Single callback
//   getDirections(0, ()=> {
//     getDirections(1, () => {
//         getDirections(2, () => {
//             getDirections(3, () => {

//             });
//         });
//     });
//   });
   
   
  function obtainDirections(step) {
    return new Promise (function (resolve, reject) {
      // setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      // }, 2000); 
      
    })
  };
   
   
//   obtainDirections(0)
//     .then(() => obtainDirections(1) )
//     .then(() => obtainDirections(2) )
//     .then(() => obtainDirections(3) )
//     .then(() => console.log("You arrived at your destination!") )
//     .catch((err) => console.log(err));

    const pr5 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("A"), 2000);
    });
       
       
      pr5
        .then((value1) => {
          console.log("value1:", value1);
          return `${value1}B`;
        })
        .then((value2) => {
          console.log("value2:", value2);
          return `${value2}C` ;
        })
        .then((value3) => {
          console.log("value3:", value3);
          return `${value3}D` ;
        })
        .then((value4) => {
          console.log("value4:", value4);
        })
        .catch(err => console.log(err))