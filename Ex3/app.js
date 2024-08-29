"use strict"
let me = {
    name: 'Mykola', 
    residency: 'Lviv', 
    gender: 'male', 
    age: 31, 
    hobby: 'crafting',
    defaultMood: 'focused', 
    currentMood: 'sleepy', 

    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },

    prognose() {
        console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
    },

    describeMyMood() {
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

me.introduce(); // My name is Mykola and I live in Lviv
me.prognose(); // I hope that next year I'm gonna be 32
me.describeMyMood(); // Mostly I'm focused, but now I'm sleepy










