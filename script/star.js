function Star(currentPlayer){

  var self = this;
  self.starElement = null;
  self.starElement2 = null;

  function getRandomInt(min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
  }

  function create(){
    if (currentPlayer === "player1") {
      self.starElement = document.createElement('DIV');
      var gameBoard = document.getElementById('P1Screen');
      var gameBoardRect = gameBoard.getBoundingClientRect();

      gameBoard.append(self.starElement);
      self.starElement.classList.add('star');
      self.starElement.style.top = getRandomInt(5,gameBoardRect.width-15) + 'px';
      self.starElement.style.left = getRandomInt(5,gameBoardRect.width-15)  + 'px';
    }

    self.starElement2 = document.createElement('DIV');
    if (currentPlayer === "player2") {

      var gameBoard2 = document.getElementById('P2Screen');
      var gameBoardRect2 = gameBoard2.getBoundingClientRect();

      gameBoard2.append(self.starElement2);
      self.starElement2.classList.add('star');
      self.starElement2.style.top = getRandomInt(5,gameBoardRect2.width-15) + 'px';
      self.starElement2.style.left = getRandomInt(5,gameBoardRect2.width-15)  + 'px';
    }

  }

  create();
}
