var userRock=document.getElementById("rock");
var userPaper=document.getElementById("paper");
var userScissors=document.getElementById("scissors");

//var humanScore=document.getElementById("humanScore")
//var computerScore=document.getElementById("computerScore")
var humanScore = 0;
var computerScore = 0;



function generateBotChoice() {
  var botChoice=Math.random();
  console.log(botChoice);
  if (botChoice<0.34) {
    botChoice="rock";  
  } else if (botChoice<= 0.67){
    botChoice="paper";
  } else {
    botChoice="scissors";
  }
  return botChoice;
}

document.getElementById("rock").onclick=compareRock;

function compareRock() {

  var botChoice = generateBotChoice();fir

  // Kit: Try to use console.log() to view the value of a variable on a particular moment
  console.log(botChoice);

  if (botChoice == 'scissors') {
    humanScore = humanScore + 1;
    document.getElementById('humanScore').innerHTML = humanScore;
  } else if (botChoice == 'paper'){
    computerScore = computerScore + 1;
    document.getElementById("computerScore").innerHTML= computerScore;
  } 
}

document.getElementById("paper").onclick=comparePaper;

function comparePaper() {
  if (botChoice == scissors) {
    document.getElementById("humanScore").innerHTML = 1;
  } else if (botChoice == rock){
    document.getElementById('computerScore').innerHTML = "computerScore" + 0;
  } else if (botChoice == paper){

  }
}

document.getElementById("scissors").onclick=compareScissors;

function compareScissors() {
  if (botChoice == paper) {
    document.getElementById("humanScore").innerHTML = "humanScore" + 1;
  } else if (botChoice == rock){
    document.getElementById('computerScore').innerHTML = "computerScore" + 1;
  } 
}
