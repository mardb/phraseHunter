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
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    //Reveals the letter(s) on the board that matches the player's selection.
    const splitLetter = document.getElementsByClassName(letter)
    for (let i = 0; i < splitLetter.length; i++) {
      if (splitLetter[i].textContent.includes(letter)) {
        splitLetter[i].className=`show letter ${letter}`
      }
    }
  }
}
