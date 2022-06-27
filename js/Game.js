//methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard,
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('All dressed up and nowhere to go'),
      new Phrase('And may all your dreams come true'),
      new Phrase('Be sure to keep your camera ready'),
      new Phrase('Call me when you get a second'),
      new Phrase('We need to talk'),
      new Phrase('And if you ever saw it you would even say it glows'),
      new Phrase('Just the two of us we can make it if we try'),
      new Phrase('I want to put on my my my my my boogie shoes'),
      new Phrase('i want to wake up in a city that never sleeps'),
      new Phrase('I get by with a little help from my friends'),
      new Phrase('We could have had it all rolling in the deep'),
      new Phrase('Cause girl youre amazing just the way you are'),
      new Phrase('Its one for the money two for the show'),
      new Phrase('Im so excited and I just cant hide it'),
      new Phrase('I see skies of blue and clouds of white'),
      new Phrase('Going to the chapel and Im gonna get married'),
      new Phrase('Be our guest put our service to the test'),
    ];
    this.activePhrase = null;
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
    if (letterElement === letterClass) {
      return true;
    }
  }

  /**
   * Increases the value of the missed property, Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const tries = document.querySelectorAll('.tries img');
    tries[this.missed].src = 'images/lostHeart.png';
    this.missed++;
    if (this.missed > 4) {
      this.gameOver(false);
      this.gameReset();
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
    if (gameWon) {
      gameOverMessage.textContent = 'Great Job!';
      startScreenOverlay.classList.add('win');
      startScreenOverlay.classList.remove('lose');
    } else {
      gameOverMessage.textContent = 'Sorry, better luck next time!';
      startScreenOverlay.classList = 'lose';
    }
    this.resetGame();
  }

  /*
  checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. */
  handleInteraction(button) {
    //losing game
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(button.textContent);
      //checks for win
      if (this.checkForWin()) {
        this.gameOver(true);
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
      button[i].classList.remove('chosen', 'wrong');
    }
    // resetting hearts
    const tries = document.querySelectorAll('.tries img');
    for (let i = 0; i < tries.length; i++) {
      tries[i].src = 'images/liveHeart.png';
    }
    this.missed = 0;
  }
}
