function Star(currentPlayer){

  var self = this;
  self.starElement = null;


  function getRandomInt(min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
  }

  function create(){
    self.starElement = document.createElement('DIV');
    if (currentPlayer === "player1") {

      var gameBoard = document.getElementById('P1Screen');
      var gameBoardRect = gameBoard.getBoundingClientRect();

      gameBoard.append(self.starElement);
      self.starElement.classList.add('star');
      self.starElement.style.top = getRandomInt(5,gameBoardRect.width-15) + 'px';
      self.starElement.style.left = getRandomInt(5,gameBoardRect.width-15)  + 'px';

    }else if (currentPlayer === "player2") {

      var gameBoard2 = document.getElementById('P2Screen');
      var gameBoardRect2 = gameBoard2.getBoundingClientRect();

      gameBoard2.append(self.starElement);
      self.starElement.classList.add('star');
      self.starElement.style.top = getRandomInt(5,gameBoardRect2.width-15) + 'px';
      self.starElement.style.left = getRandomInt(5,gameBoardRect2.width-15)  + 'px';
    }

  }

  create();
}
