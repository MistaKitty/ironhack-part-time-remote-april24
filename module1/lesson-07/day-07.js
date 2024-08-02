// class Human
// name
// gender
// age
//introduceSelf() method
// introduce a human

class Human {
    constructor(name, gender, age, isMarried){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.isMarried = isMarried;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, I am ${this.age} years old`);
    }
}

const aHuman = new Human('Lloyd Chambrier', 'male', 34, false)
const bHuman = new Human('Michael Jordan', 'male', 56, true)

aHuman.introduceSelf()
bHuman.introduceSelf()
// console.log('aHuman', )
// console.log('bHuman', bHuman)
