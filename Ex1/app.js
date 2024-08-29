"use strict"
function detonatorTimer(delay) {
    const intervalId = setInterval(() => {
        if (delay > 0) {
            console.log(delay);
            delay--;
        } else {
            console.log('BOOM!');
            clearInterval(intervalId); 
        }
    }, 1000); 
}

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!
