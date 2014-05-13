var userRock=document.getElementById("rock");
var userPaper=document.getElementById("paper");
var userScissors=document.getElementById("scissors");
var botChoice=Math.random();
//var humanScore=document.getElementById("humanScore")
//var computerScore=document.getElementById("computerScore")
var humanScore;
var computerScore;

if (botChoice<0.34) {
  botChoice="rock";  
} else if (botChoice<= 0.67){
  botChoice="paper";
} else {
  botChoice="scissors";
}

document.getElementById("rock").onclick=compareRock;

function compareRock() {

// Kit: Try to use console.log() to view the value of a variable on a particular moment
console.log(botChoice);

// Kit: Are u doing a comparison here or assignment below?
if (botChoice=scissors) { 
  // get the human score
  humanScore = parseInt(document.getElementById('humanScore').innerHTML);
  document.getElementById('humanScore').innerHTML = humanScore + 1;
} else if (botChoice=paper){ // Kit: Are u doing a comparison here or assignment?
  // Try to apply the same logic as the "botChoice=scissors" case
  document.getElementById("computerScore").innerHTML=computerScore + 1;
} else if (botChoice == rock){
  // Try to apply the same logic as the "botChoice=scissors" case
  document.getElementById("humanScore").innerHTML = "computerScore" + 0;
  document.getElementById("computerScore").innerHTML = "computerScore" + 0;
}
}

document.getElementById("paper").onclick=comparePaper;

function comparePaper() {
if (botChoice == scissors) {
 document.getElementById("humanScore").innerHTML = 1;
} else if (botChoice == rock){
  document.getElementById('computerScore').innerHTML = "computerScore" + 0;
} else if (botChoice == paper){
  document.getElementById('humanScore').innerHTML = "computerScore" + 0;
  document.getElementById('computerScore').innerHTML = "computerScore" + 0;
}
}

document.getElementById("scissors").onclick=compareScissors;

function compareScissors() {
if (botChoice == paper) {
 document.getElementById("humanScore").innerHTML = "humanScore" + 1;
} else if (botChoice == rock){
  document.getElementById('computerScore').innerHTML = "computerScore" + 1;
} else if (botChoice == scissors){
  document.getElementById('humanScore').innerHTML = "computerScore" + 0;
  document.getElementById('computerScore').innerHTML = "computerScore" + 0;
}
}