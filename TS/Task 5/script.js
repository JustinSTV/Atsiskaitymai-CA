"use strict";
const RockPaperScissors = (player1, player2) => {
    const gameRules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };
    if (player1 === player2) {
        return "draw";
    }
    else if (gameRules[player1] === player2) {
        return "Player 1 Wins";
    }
    else {
        return "Player 2 Wins";
    }
};
console.log(RockPaperScissors("scissors", "paper"));
console.log(RockPaperScissors("scissors", "rock"));
console.log(RockPaperScissors("paper", "paper"));
