// Exercise 1
// Create a class Human with properties name, gender, age, calories
// Add a method introduction() to class Human that returns the human's name, age and gender
// i.e: I'm Jesus, I'm 33 years old and I am a male.
// Add a method eatFood(food) to class Human that increases the number of calories for a human accordingly to the food's
// protein, carbs and fat properties
// Make sure to test those methods to make sure they work
class Human {
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.calories = 0; // initialise calories at 0
        this.hasKids = false;
    }
    introduction(){
        console.log(`I'm ${this.name}, I'm ${this.age} years old and I am a ${this.gender}`)
    }
    eatFood(food){
        this.calories += food.sumOfCalories; // this.calories = this.calories + food.sumOfCalories;
    }
    
}


// Exercise 2
// Create a class Food with properties name, protein, carbs, fat
//      Carbohydrates provides 4 calories per gram
//      Protein provides 4 calories per gram
//      Fat provides 9 calories per gram
// Add a method printCalories() for class Food that prints out how many calories a specific food provides
// i.e: Bread has 200 calories
class Food {
    constructor(name, protein, carbs, fat){
        this.name = name;
        this.protein = 4* protein;
        this.carbs = 4 * carbs;
        this.fat = 9* fat;
        this.sumOfCalories = this.protein + this.carbs + this.fat;
    }
    printCalories(){
        console.log(`${this.name} has ${this.sumOfCalories} calories`)
    }
}


const steak = new Food('steak', 40, 0, 10);
const bolognesePasta = new Food('bolognese', 30, 40, 20)
console.log('steak', steak)
console.log('bolognesePasta', bolognesePasta)
steak.printCalories()

const aHuman = new Human('Kanye West', 'male', 44)
aHuman.eatFood(steak)
aHuman.eatFood(bolognesePasta)
console.log('aHuman', aHuman)
// Create instances of each class and print them to the console to confirm they work

// Exercise 3
// Create a subclass Man from class Human, 
// it should have it's gender set to 'male' automatically
class Man extends Human {
    constructor(name, age){
        super(name, 'male', age)
    }
}

const aMan = new Man('Alex Perreira', 35)
console.log('aMan', aMan)
// Exercise 4
// Create a subclass Woman from class Human, it should have it's gender set to 'female' automatically

// Create instances of each class and print them to the console to confirm they work