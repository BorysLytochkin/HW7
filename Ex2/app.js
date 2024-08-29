"use strict"
function detonatorTimer(delay) {
    function countdown() {
        if (delay > 0) {
            console.log(delay);
            delay--;
            setTimeout(countdown, 1000); 
        } else {
            console.log('BOOM!');
        }
    }

    setTimeout(countdown, 1000); 
}

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!