function Alien(currentPlayer){

  var self = this;
  self.alienElement = null;

  function getRandomInt(min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
  }

  function create(){
    self.alienElement = document.createElement('IMG');
    self.alienElement.setAttribute("src", 'images/alien.png');
    var gameBoard = document.getElementById('P1Screen');
    var gameBoardRect = gameBoard.getBoundingClientRect();

    gameBoard.append(self.alienElement);
    self.alienElement.classList.add('alien');
    self.alienElement.style.top = getRandomInt(5,370) + 'px';
    self.alienElement.style.left = getRandomInt(5, 370)  + 'px';
  }

  create();
}
