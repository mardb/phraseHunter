

let game;
const startButton = document.querySelector('#btn__reset')
// console.log(startButton)
startButton.addEventListener('click', (e)=>{
  //Inside the callback function for this click event listener, use your `game` variable to instantiate a new Game object. Call the `startGame()` method on this new Game object.
  game = new Game()
  game.startGame()
  // if(gameOver(true)){
    // game.resetGame()
  // }
  // game.resetGame()
  // game.removeLife()
  // console.log(  game.removeLife())
  // const letterElement = document.getElementsByClassName('letter').length;
  // console.log(letterElement)
})


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
const qwerty = document.getElementById('qwerty')

qwerty.addEventListener('click', e => {
  if(e.target.className === 'key'){
game.handleInteraction(e.target)
  }
  

})
