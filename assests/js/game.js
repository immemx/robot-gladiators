// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {
    // Ask Player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "SKIP" || promptFight === "skip") {
        // Confirm Player Wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
    
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!")
            // Subtract Money from playerMoney for skipping
         playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney)
         break;
    }
}   

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    var damage = randomNumber(playerAttack - 3, playerAttack)
    enemyHealth = Math.max(0, enemyHealth - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Health Check
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")

        // award player money for winning 
        playerMoney = playerMoney + 20;

        // Leave While() Loop since enemey is dead
        break;
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.")
        };

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check Player's health
            if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
        
    }
};

var startGame = function() {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {

     if (playerHealth > 0) {

            // Round #
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // Picks New Enemy
            var pickedEnemyName = enemyNames[i];
            // Resets enemyHealth
            enemyHealth = randomNumber(40, 60);
            // Passes pickedEnemyName into Fight()
            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask to use store
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                // if yes, got to store()
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in Battle! Game Over!");
            break;
        }
    }
    endGame()
};

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    }
    else {
        window.alert("You've lost your robot in battle.")
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("would you like to play again?")

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon")
    }
};

var shop = function() {

    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )

    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase Health decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }

            break;
        
        case "UPGRADE": // new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;

        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.")
            break;

        default: 
            window.alert("You did not pick a valid option. Try again.")
            // call shop() again
            shop();
            break;
    }
}

// Random Num Func
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
}

 startGame();