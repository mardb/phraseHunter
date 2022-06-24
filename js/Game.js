//methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard,
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('A picture is worth a thousand words'),
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
    this.activePhrase = phrase;
    console.log(this.activePhrase)
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {

    const randomPhrase = 
    this.phrases[Math.floor(this.phrases.length * Math.random())];
    return randomPhrase

  }

  /** 
* Begins game by selecting a random phrase and displaying it to user */ 
startGame() {
  const startScreenOverlay= document.querySelector('div#overlay')
    startScreenOverlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }
 
};
/*
hides the start screen overlay (the `div` element with an `id` of `overlay`)
calls the `getRandomPhrase()` method to select a Phrase object from the Game object’s array of phrases
 adds the phrase to the gameboard by calling the `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase object. 
 The selected phrase should be stored in the Game’s `activePhrase` property, so it can be easily accessed throughout the game. 
*/

