//create a Phrase class to handle the creation of phrases.
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseBox = document.querySelector('div#phrase ul');

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === ' ') {
        phraseBox.innerHTML += `<li class="space"> </li>`;
      } else {
        phraseBox.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    //Checks to see if the letter selected by the player matches a letter in the phrase.
    // console.log(this.phrase.includes(letter));
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    //Reveals the letter(s) on the board that matches the player's selection.
    //To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's `hide` CSS class with the `show` CSS class.
    // const splitLetter = document.querySelectorAll(`.${letter}`);
    const splitLetter = document.getElementsByClassName(letter)
    console.log(splitLetter)
    for (let i = 0; i < splitLetter.length; i++) {
      if (splitLetter[i].textContent.includes(letter)) {
        splitLetter[i].className=`show letter ${letter}`
      }
    }
  }
}
