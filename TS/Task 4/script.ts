/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

const task4Func = (input: string) => {
  let result = "1";

  for (let i = 1; i < input.length; i++) {
    result += i % 2 === 0 ? "1" : "0";
  }
  return result;
};

console.log(task4Func("labas"));
console.log(task4Func("kebabas"));
console.log(task4Func("a"));
