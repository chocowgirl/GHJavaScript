// /// CONRAD JESSICA ///

let NUMBER = getRandomInt(1,100);
// console.log("rando number is " + NUMBER);

let MAX = NUMBER+5;
// console.log("max is " + MAX);

let MIN = NUMBER-5;
// console.log("min is " + MIN);

//recuperation of "submit guess" button
const BTN = document.getElementById("btnSubmit");

//recuperation of user-guess input-field
const INPUT = document.getElementById("inputGuess");

//recuperation of para where game hints or tells the player have won or lost
const HINT = document.getElementById("hintPara");

//recuperation of para where game indicates how many tries remain available
const REMAINING = document.getElementById("remainingTries");

//recuperation of space where replay button will appear at end of game
const REPLAY = document.getElementById("replay");

//recuperation of table body where previous guesses will be noted during game
const PREVIOUS = document.getElementById("tblPreviousGuess");
// console.dir(PREVIOUS);

//setting counter for allowed attempts
let remainingTries = 10;

//function to restart game.  Resets all necessary fields and parameters, allowing replay.
function restartGame(){
  remainingTries=10;
  NUMBER = getRandomInt(1,100);
  // console.log("new rando number is " + NUMBER);
  MAX = NUMBER+5;
  // console.log("new max is " + MAX);
  MIN = NUMBER-5;
  // console.log("new min is " + MIN);
  HINT.innerText = "";
  REMAINING.innerText=""
  INPUT.disabled = false;
  INPUT.value="";
  REPLAY.innerHTML="";
  PREVIOUS.innerHTML="";
}

// function to generate random number that includes the min and max limits noted:
function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt); 
}

//function that manages gameplay by responding appropriately to guesses
//and keeping track of how many attempts have been made
function gameCheck(){
  //We analyse the number entered by the user and act accordingly:
  const guess = parseInt(Math.ceil(INPUT.valueAsNumber));
  // console.log("user guess " + guess);
  INPUT.value = "";
//Here we deal with the guess being too low by giving a hint
  //we also diminish attempts remaining by one and tell user how many tries they have left
  if((guess < NUMBER)&&remainingTries>0){
    HINT.innerText = "Your guess is too low!"
    if(guess<1){
      HINT.innerText += "  🤔Guessing outside of the range 1 - 100 also doesn't help!"
    }
    remainingTries--;
    REMAINING.innerText = "You have " + remainingTries + " guesses left before you lose.";
    //Here if the guess is within 5 of the correct number:
    //it appears with orange background in the previous guesses table
    if(guess>=MIN && guess<=MAX){
      PREVIOUS.innerHTML+= "<tr class='orange'><td>" + guess + "</td><td>" + "⤴️" + "</td></tr>";
    }
    //if the guess is not within 5 of the correct number, it appears but with white background
    else{
      PREVIOUS.innerHTML+= "<tr class='white'><td>" + guess + "</td><td>" + "⤴️" + "</td></tr>";
    }
    //lastly we check to make sure that the gameplay can continue...
    //if there are no more attempts and the user hasn't guessed the number, they lose.
    //The input field is disabled at this point and the user is invited to play again
    //with a message and the appearance of a replay button
    if(remainingTries==0){
      HINT.innerText = "You Lose 😭";
      REMAINING.innerText = "Such a shame.  Care to play again?"
      INPUT.disabled = true;
      REPLAY.innerHTML = "<button id='btnReplay'>Replay</button>";
      let btnReplay = document.getElementById("btnReplay");
      // console.log(btnReplay);
      btnReplay.addEventListener("click", restartGame);
    }
  }
//Here we deal with the guess being too high by giving a hint
  //we also diminish attempts remaining by one and tell user how many tries they have left
  else if((guess > NUMBER)&&remainingTries>0){
    HINT.innerText = "Your guess is too high!"
    if(guess>100){
      HINT.innerText += "  🤔Guessing outside of the range 1 - 100 also doesn't help!"
    }
    remainingTries--;
    REMAINING.innerText = "You have " + remainingTries + " guesses left before you lose.";
    //Here if the guess is within 5 of the correct number:
    //it appears with orange background in the previous guesses table
    if(guess>=MIN && guess<=MAX){
      PREVIOUS.innerHTML+= "<tr class='orange'><td>" + guess + "</td><td>" + "⤵️" + "</td></tr>";
    }
    //if the guess is not within 5 of the correct number, it appears but with white background
    else{
      PREVIOUS.innerHTML+= "<tr class='white'><td>" + guess + "</td><td>" + "⤵️" + "</td></tr>";
    }
    //lastly we check to make sure that the gameplay can continue...
    //if there are no more attempts and the user hasn't guessed the number, they lose.
    //The input field is disabled at this point and the user is invited to play again
    //with a message and the appearance of a replay button
    if(remainingTries==0){
      HINT.innerText = "You Lose 😭";
      REMAINING.innerText = "Such a shame.  Care to play again?"
      INPUT.disabled = true;
      REPLAY.innerHTML = "<button id='btnReplay'>Replay</button>";
      let btnReplay = document.getElementById("btnReplay");
      // console.log(btnReplay);
      btnReplay.addEventListener("click", restartGame);
    }
  }
//Here is the code for if the guess is just right!  We congratulate the user,
  //we block the input field and invite the user to play again.
  else if((guess == NUMBER)&&remainingTries>0){
    HINT.innerText = "You guessed the number 😊";
    REMAINING.innerText = "Care to play again?"
    INPUT.disabled = true;
    REPLAY.innerHTML = "<button id='btnReplay'>Replay</button>";
    PREVIOUS.innerHTML+= "<tr class='green'><td>" + guess + "</td><td>" + "🏆" + "</td></tr>";
    let btnReplay = document.getElementById("btnReplay");
    // console.log(btnReplay);
    btnReplay.addEventListener("click", restartGame);
  }
};


//****GAMEPLAY CODE BELOW****//

//Here we Listen to the submit Guess button and when it's clicked:
//we use the gameCheck function to deal appropriately with the user input.
BTN.addEventListener("click", gameCheck);

//Here we Listen to the enter button and when it's done being pressed:
//we use the gameCheck function to deal appropriately with the user input.
document.onkeyup = (event) => {
  if (event.key === "Enter") {
    gameCheck();
  }
}



