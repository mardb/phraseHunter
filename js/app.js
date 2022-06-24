//testing phrase
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => { 
//   console.log(`Phrase - phrase: `, phrase.phrase); 
//   }; 
//   const game = new Game(); 
//   logPhrase(game.getRandomPhrase()); 
//   logPhrase(game.getRandomPhrase()); 
//   logPhrase(game.getRandomPhrase()); 
//   logPhrase(game.getRandomPhrase()); 
//   logPhrase(game.getRandomPhrase());

//   const game = new Game(); 
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game(); 
// game.startGame(); 
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
const startButton = document.querySelector('#btn__reset')
console.log(startButton)
startButton.addEventListener('click', (e)=>{
  //Inside the callback function for this click event listener, use your `game` variable to instantiate a new Game object. Call the `startGame()` method on this new Game object.
  game = new Game()
  game.startGame()
})