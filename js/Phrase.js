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
}
