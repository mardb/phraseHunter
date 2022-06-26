//methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard,
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [new Phrase('mom')];
    this.activePhrase = phrase;
    // console.log(this.activePhrase)
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomPhrase =
      this.phrases[Math.floor(this.phrases.length * Math.random())];
    return randomPhrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user */

  startGame() {
    const startScreenOverlay = document.querySelector('div#overlay');
    startScreenOverlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const letterElement = document.getElementsByClassName('letter').length;
    const letterClass = document.getElementsByClassName('show').length;
    letterElement.getAttribute;
    // show is name as length of phrases

    if (letterElement === letterClass) {
      //if true that there is not more hide classes
      return true;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    //This method removes a life from the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images` folder) and increments the `missed` property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method.

    const tries = document.querySelectorAll('.tries img');
    console.log(tries);
    tries[this.missed].src = 'images/lostHeart.png';
    this.missed++;
    if (this.missed > 4) {
      this.gameOver(false);
    } else {
    }
  }
  //This method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay `h1` element with a friendly win or loss message, and replaces the overlay’s `start` CSS class with either the `win` or `lose` CSS class.
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const startScreenOverlay = document.querySelector('div#overlay');
    startScreenOverlay.style.display = '';
    let gameOverMessage = document.querySelector('#game-over-message');
    console.log('hey');
    if (gameWon) {
      console.log('is won!!');
      gameOverMessage.textContent = 'Great Job!';
      startScreenOverlay.classList.add('win');
    } else {
      console.log('is lost!!');
      gameOverMessage.textContent = 'Sorry, better luck next time!';
      startScreenOverlay.classList = 'lose';
    }
  }

  /*
   This method checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. */
  handleInteraction(button) {
    //losing game
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.textContent);
      //checks for win
      if (this.checkForWin()) {
        this.gameOver(true);
        this.resetGame();
      }
    } else {
      button.disabled = true;
      button.classList.add('wrong');
      this.removeLife();
    }
    
  }

  resetGame() {
     //resetting li
     const phrase = document.getElementById('phrase');
     phrase.querySelector('ul').innerHTML = '';
     //resetting life counts
     this.missed = 0;
     // resetting classes on keys
     const qwerty = document.getElementById('qwerty');
     const button = qwerty.getElementsByTagName('button');
 
     for (let i = 0; i < button.length; i++) {
       button[i].disabled = false;
       button[i].classList.remove('chosen','wrong'); 
 
     }
     // resetting hearts
     const tries = document.querySelectorAll('.tries img');
     for (let i = 0; i < tries.length; i++) {
       tries[i].src = 'images/liveHeart.png';
     }
     this.missed = 0;
   
  }
}

/*
Step 12
Update your app to reset the gameboard between games. After a game is completed, the
gameboard needs to be reset so that clicking the "Start Game" button will successfully load a
new game.
● Remove all `li` elements from the Phrase `ul` element.
● Enable all of the onscreen keyboard buttons and update each to use the `key` CSS
class, and not use the `chosen` or `wrong` CSS classes.
● Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of
the gameboard to display the `liveHeart.png` image.
Test Your Code!
After you've completed all of the necessary changes, just complete a game (either by guessing
all of the letters in your active phrase or by incorrectly guessing five times) and then click the
"Start Game" button on the win/loss screen overlay to check if you can successfully start a new
game.
● Was the new phrase added to the gameboard correctly (i.e. all of the letters from the
previous phrase were removed before the new phrase's letters were added?)
● Was the onscreen keyboard reset so that each letter button appears with a light gray
color and is enabled (so that it can be clicked)?
● Was the scoreboard reset back to five lives?
Awesome job on completing your game!
*/
