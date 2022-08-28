const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const MATCH_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER-WINS";

let gameRunning = false;

let playerChoice = function () {
  gameRunning = true;
  const selection = prompt(
    `ENTER ${ROCK} ${PAPER} OR ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) ||
    selection == ""
  ) {
    alert(
      "you have entered wrong value so we have choose " + ROCK + " for you"
    );
    return;
  }
  return selection;
};

let computerChoice = function computerChoice() {
  let number = Math.random();
  if (number <  0.3) {
    return ROCK;
  } else if (number < 0.6) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};     

// const add = (a,b) => a+b; 

const winner = (com_Choice,pl_Choice = ROCK ) => 
        pl_Choice === com_Choice ? MATCH_DRAW :
        (com_Choice === PAPER && pl_Choice === SCISSORS) ||
        (com_Choice === SCISSORS && pl_Choice === ROCK) ||
        (com_Choice === ROCK && pl_Choice === PAPER)
        ? PLAYER_WINS : COMPUTER_WINS; 

  // if (pl_Choice === com_Choice) {
  //   return MATCH_DRAW;
  // } else if (
  //   (com_Choice === PAPER && pl_Choice === SCISSORS) ||
  //   (com_Choice === SCISSORS && pl_Choice === ROCK) ||
  //   (com_Choice === ROCK && pl_Choice === PAPER)
  // ) {
  //   return PLAYER_WINS;
  // }
  // else{
  //   return COMPUTER_WINS; 
  // }

startGameBtn.addEventListener("click", () => {
  if (gameRunning) {
    alert("Game is already running");
    return;
  }
  console.log("games is stared");
  const pl_choice = playerChoice();
  const co_choice = computerChoice();
  let winnerName;
  if(pl_choice)
  {
     winnerName = winner(co_choice,pl_choice);
  }
  else {
    winnerName = winner(co_choice);
  }
  console.log("PLAYER CHOICE " +pl_choice || ROCK);
  console.log("COMPUTER CHOICE " +co_choice);
  console.log("WINNER NAME " + winnerName);
  let message = `You have picked ${pl_choice || ROCK} and computer picked ${co_choice} so`;
  if(winnerName === MATCH_DRAW)
  {
    alert(message + ' match is draw!');
  }
  else
  {
    alert(`${message} ${winnerName} is win the game`);
  }
  gameRunning = false;
});

// startGameBtn.addEventListener('click',() =>
// {
//   console.log("chota bhem");
//   console.log("bada bhem");
// })


//not for this game
// rest opretor
// const combine = (displayf,operator,...numbers) =>{
//   const validOrNOt = (num) =>  isNaN(num) ? 0 : num;
//   let result = 0 ;
//   if(operator === 'ADD')
//   {
//     for(const i of numbers)
//     {
//       result += validOrNOt(i);
//     }
//   }
//   else
//   {
//     for(const i of numbers)
//     {
//       result -= validOrNOt(i);
//     }
//   }
//   displayf(result);
// }
// const subtractUp = function () {

//   let result = 0 ;
//   for(const i of arguments) // this is built in javascript arguments that are work same as rest operator before rest 
//   // operator introduce this is used for take as many arguments want
//   {
//     result -= i;
//   }
//   return result;
// }
const display = (message,result) =>
{
  alert(message + " " +result);
}
console.log(combine(display.bind(this,"sum of all number is"),'ADD',1,'fdfdfasd',2,34,33,43));
console.log(combine(display.bind(this,"sum of all number is"),'ADD',1,2,34,33,43));
console.log(combine(display.bind(this,"subtraction of all number is"),'SUBTRACT',1,2,34,33,43));