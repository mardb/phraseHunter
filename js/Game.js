//methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard,
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [new Phrase('aaasst')];
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
    //This method checks to see if the player has revealed all of the letters in the active phrase.
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
    console.log(tries)
    tries[this.missed].src = 'images/lostHeart.png';
    this.missed ++;
    if(this.missed > 4){
        this.gameOver(false);
    }

  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const startScreenOverlay = document.querySelector('div#overlay');
    let gameOverMessage = document.querySelector('#game-over-message')
    
    if (gameWon){
      startScreenOverlay.style.display = 'block';
      gameOverMessage.innerHTML = 'Great Job!'
      startScreenOverlay.className = 'win'
    }else{
      gameOverMessage.innerHTML = 'Sorry, better luck next time!'
      startScreenOverlay.className = 'lose'
    }
    //This method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay `h1` element with a friendly win or loss message, and replaces the overlay’s `start` CSS class with either the `win` or `lose` CSS class.
    
  }
}
