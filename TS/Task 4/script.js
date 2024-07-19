"use strict";
const task4Func = (input) => {
    let result = "1";
    for (let i = 1; i < input.length; i++) {
        result += i % 2 === 0 ? "1" : "0";
    }
    return result;
};
console.log(task4Func("labas"));
console.log(task4Func("kebabas"));
console.log(task4Func("a"));
