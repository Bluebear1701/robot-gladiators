var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are strting the round
  window.alert("Welcome to Robot Gladiators!");

  //Substract the value of 'playerAttack' fro the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked. 
console.log( playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaing.")
// check enemy's health
if (enemyHealth <= 0){
  window.alert(enemyName + "has died!");
}
else {
  window.alert(enemyName + "still has" + enemyHealth + " health left");
}
// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
  // Sutract the value of 'enemyAttack' from the value of 'playerHealth' and use the results to update the value in the 'playerHealth' variable.
  playerHealth = playerHealth - enemyAttack;
  //Log a resulting message to the console so we know that it worked.
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."  
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

fight();
