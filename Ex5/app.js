"use strict"

function someFunction(...args) {
    console.log('Результат:', ...args);
}

function slower(func, seconds) {
    return function(...args) {
        console.log(`Chill out, you will get your result in ${seconds} seconds...`);
        setTimeout(() => {
            func(...args);
        }, seconds * 1000); 
    };
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction('This is a test'); 

