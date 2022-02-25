var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

// You can also log multiple values at once like this
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
   //fightfunction Statments

    //Alert players that they are strting the round
  window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle")
// if player choses to fight. then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack}
  enemyHealth = enemyHealth - playerAttack; 
  // Log a resulting message to the console so we know that it worked. 
console.log( playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaing.");
// check enemy's health
if (enemyHealth <= 0){
  window.alert(enemyNames + "has died!");
}
else {
  window.alert(enemyNames + "still has" + enemyHealth + " health left");
}
// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
// if player choses to skip
} else if  (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip 
  var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip)  {
    window.alert (playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight () again
  else {
    fight(enemyRobot);
  }
  
} else {
  window.alert("You need to choose a valid option. Try again");
    }
  // Sutract the value of 'enemyAttack' from the value of 'playerHealth' and use the results to update the value in the 'playerHealth' variable.
  playerHealth = playerHealth - enemyAttack;
  //Log a resulting message to the console so we know that it worked.
  enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."  
};
var playerHealth = 100;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("Your player is still alive!");
}
var playerHealth = 10;

if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
