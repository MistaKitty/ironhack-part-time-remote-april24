const myColors = require("colors/safe");
 
console.log(myColors.yellow('hello')); // outputs green text
console.log(myColors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(myColors.inverse('inverse the color')); // inverses the color
console.log(myColors.rainbow('OMG Rainbows!')); // outputs text in colors of a rainbow
console.log(myColors.trap('Run the trap'));