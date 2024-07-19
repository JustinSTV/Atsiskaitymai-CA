/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

type MoveSelection = "rock" | "paper" | "scissors";

const RockPaperScissors = (player1: string, player2: string) => {
  const gameRules: { [key: string]: MoveSelection } = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (player1 === player2) {
    return "draw";
  } else if (gameRules[player1] === player2) {
    return "Player 1 Wins";
  } else {
    return "Player 2 Wins";
  }
};

console.log(RockPaperScissors("scissors", "paper"));
console.log(RockPaperScissors("scissors", "rock"));
console.log(RockPaperScissors("paper", "paper"));
