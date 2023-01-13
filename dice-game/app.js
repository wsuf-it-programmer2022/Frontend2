
// thes varables need to be accessible from all functions
// so we declare them outside of the init function
// and they are called global variables
let scores, roundScore, activePlayer;

// create the initial state of the game : all scores are 0
// we define a function called init
function init() {
  console.log("new game started");
  // each player has zero points at the beginning of the game
  scores = [0, 0];
  roundScore = 0;
  // the first player is the active player when the game starts
  activePlayer = 0;
  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";

  document.querySelector(".btn-roll").style.display = "block";
  document.querySelector(".btn-hold").style.display = "block";
  document.querySelector(".dice").style.display = "block";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

}

function nextPlayer() {
  // we zero out the roundScore of the current player
  document.querySelector("#current-"+ activePlayer).textContent = "0";
  // next player is the active player
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  roundScore = 0;
  // update the UI to show the new active player
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

}

// calling the init function will run everything inside the init function
// we are calling the init function when the page loads
init();

// we are also calling the init function when the user clicks on the new game button
document.querySelector(".btn-new").addEventListener("click", init);

// we create an anonymous function that will run when the user clicks on the roll dice button
document.querySelector(".btn-roll").addEventListener("click", function() {
  console.log("clicked roll dice button");
  // generate a random number between 1 and 6
  const dice = Math.floor(Math.random() * 6) + 1;
  const diceElement = document.querySelector(".dice");
  //                 String concatenation 👇🏻
  diceElement.setAttribute("src", "dice-" + dice + ".png");

  // if the player rolls 1 then the roundScores are
  // lost, and the next player will be the active player
  if (dice !== 1) {
    roundScore = roundScore + dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }

});
document.querySelector(".btn-hold").addEventListener("click", function() {
  // when the player clicks on the hold button
  // 1. we add the roundScore to the score of the active player
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // 2. we update the UI to show the new score
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
  // 3. we check if the player won the game
  if (scores[activePlayer] >= 20) { 
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    document.querySelector(".btn-roll").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
    document.querySelector(".dice").style.display = "none";

  } else {
    // 5. if there is no winner then we switch to the next player
    // DRY - Don't Repeat Yourself
    nextPlayer();

  }
});