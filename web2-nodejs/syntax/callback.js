// function a() {
//     console.log('A');
// }

a = function () {
    console.log('B');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);