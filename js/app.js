

let game;
const startButton = document.querySelector('#btn__reset')

startButton.addEventListener('click', (e)=>{
  //using `game` variable to instantiate a new Game object.
  game = new Game()
  game.startGame()
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

