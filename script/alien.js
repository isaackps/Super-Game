function Alien(currentPlayer){

  var self = this;
  self.alienElement = null;
  self.alienElement2 = null;

  function getRandomInt(min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
  }

  function create(){
    if (currentPlayer === 'player1') {
      self.alienElement = document.createElement('IMG');
      self.alienElement.setAttribute("src", 'images/alien.png');
      var gameBoard = document.getElementById('P1Screen');
      var gameBoardRect = gameBoard.getBoundingClientRect();

      gameBoard.append(self.alienElement);
      self.alienElement.classList.add('alien');
      self.alienElement.style.top = getRandomInt(5,370) + 'px';
      self.alienElement.style.left = getRandomInt(5, 370)  + 'px';
    }
    if (currentPlayer === 'player2') {
      self.alienElement2 = document.createElement('IMG');
      self.alienElement2.setAttribute("src", 'images/alien.png');
      var gameBoard2 = document.getElementById('P2Screen');
      var gameBoardRect2 = gameBoard2.getBoundingClientRect();

      gameBoard2.append(self.alienElement2);
      self.alienElement2.classList.add('alien');
      self.alienElement2.style.top = getRandomInt(5,370) + 'px';
      self.alienElement2.style.left = getRandomInt(5, 370)  + 'px';
    }
  }

  create();
}
