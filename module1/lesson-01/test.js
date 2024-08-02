const names = ["Amelie", "Doha", "Joaquin", "Cristina", "Daniel", "Adi", "Lloyd"];
// console.log(names[0])
// console.log(names[1])

// Write a program which is going to compare two names and respond accordingly 
if(names[0].length > names[1].length){
    console.log(names[0], "is the longest name");
}
else {
    console.log(names[1], "is the longest name")
}

// Write a for loop to print every name in the array "names"

for(let i = 0; i < names.length; i++){
    // console.log('i', i);
    // console.log(names[i])
    if(names[i].includes("d") || names[i].includes("D")){
        console.log(names[i])
    }
}

// Print names from last to first
for(let i = names.length - 1; i >= 0; i--){
    console.log(names[i])
}

// Print a random name from the list
const randomIndex = Math.floor(Math.random() * names.length);
// console.log('randomIndex', randomIndex)
console.log(names[randomIndex])