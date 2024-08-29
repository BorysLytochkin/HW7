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
};

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // My name is Mykola and I live in Lviv
setTimeout(securedSelfPrognose, 2000); // I hope that next year I'm gonna be 32
setTimeout(securedSelfDescribeMyMood, 3000); // Mostly I'm focused, but now I'm sleepy
