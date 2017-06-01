var Game = function() {

  // Game Settings
  var settings = {};
  settings.numberOfStars = 20;
  settings.numberOfAliens = 3;

  // Game Environment
  this.assets = [];
  var interactions = {
      player1: {
        right: false,
        left: false,
        up: false,
        down: false
      },
      player2: {
        right: false,
        left: false,
        up: false,
        down: false
      }
  };
  var frame = 0;                //Frames since the start of the game

  // Players
  var player1 = null;
  var player2 = null;

  // Stars
  var stars_player1 = [];
  var stars_player2 = [];

  // Aliens
  var alien_player1 = [];
  var alien_player2 = [];

  //game over array
  var gameOver_player1 = [];
  var gameOver_player2 = [];

  //restart btn array
  var restartBtn_player1 = [];
  var restartBtn_player2 = [];

  //Scores
  var score1 = 0;
  var score2 = 0;

  //game counter
  var gameCounter = 0;

  //checker for gameover
  var gameOverCounter1 = 0;
  var gameOverCounter2 = 0;

  //sound effects
  var collectP = document.getElementById('collectP');
  var gameOverAudio = document.getElementById('gameOverAudio');

  // Setup Events
  function setupEvents(){

    //add event listener to listen to up key so when key is lifted nothing happens
    document.addEventListener('keyup', function(event){
      var keyName = event.key;

      switch(keyName) {
          case "ArrowRight":
              interactions.player1.right = false;
              break;
          case "ArrowLeft":
              interactions.player1.left = false;
              break;
          case "ArrowUp":
              interactions.player1.up = false;
              break;
          case "ArrowDown":
              interactions.player1.down = false;
              break;
          case "w":
              interactions.player2.up = false;
              break;
          case "a":
              interactions.player2.left = false;
              break;
          case "s":
              interactions.player2.down = false;
              break;
          case "d":
              interactions.player2.right = false;
              break;
        default:
          break;
        }
      });

      //add event listener to listen to key down so when pressed something happens
      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.player1.right = true;
              break;
          case "ArrowLeft":
              interactions.player1.left = true;
              break;
          case "ArrowUp":
              interactions.player1.up = true;
              break;
          case "ArrowDown":
              interactions.player1.down = true;
              break;
          case "w":
              interactions.player2.up = true;
              break;
          case "a":
              interactions.player2.left = true;
              break;
          case "s":
              interactions.player2.down = true;
              break;
          case "d":
              interactions.player2.right = true;
              break;
        default:
          break;
        }

      });



    }

    // Collision detection
    function CollisionDetect () {
      //player1
      //with the star objects
      if(player1.rocketElement === null){
        return;
      }

      var player1Rect = player1.rocketElement.getBoundingClientRect();
      for(var i = 0; i<stars_player1.length;i++){
        var starElement = stars_player1[i].starElement;

        if(starElement == null){
          continue;
        }

        var starRect = starElement.getBoundingClientRect();
        if (player1Rect.left < starRect.left + starRect.width &&
            player1Rect.left + player1Rect.width > starRect.left &&
            player1Rect.top < starRect.top + starRect.height &&
            player1Rect.height + player1Rect.top > starRect.top) {
            starElement.remove();
            stars_player1.splice(i,1);
            collectP.play();
            scorePoints();


        }

      }
      //with the Aliens
      for (var j = 0; j < alien_player1.length; j++){
        var alienElement = alien_player1[j].alienElement;
        var alienRect = alienElement.getBoundingClientRect();
        if (player1Rect.left < alienRect.left + alienRect.width &&
            player1Rect.left + player1Rect.width > alienRect.left &&
            player1Rect.top < alienRect.top + alienRect.height &&
            player1Rect.height + player1Rect.top > alienRect.top) {
              gameOverAudio.play();
            gameOverCounter1 = 1;
          }
        }
        //player2
        var player2Rect = player2.rocketElement.getBoundingClientRect();
        for(var k = 0; k<stars_player2.length;k++){
          var starElement2 = stars_player2[k].starElement;

          if(starElement2 == null){
            continue;
          }

          var starRect2 = starElement2.getBoundingClientRect();
          if (player2Rect.left < starRect2.left + starRect2.width &&
              player2Rect.left + player2Rect.width > starRect2.left &&
              player2Rect.top < starRect2.top + starRect2.height &&
              player2Rect.height + player2Rect.top > starRect2.top) {
              starElement2.remove();
              stars_player2.splice(k,1);
              collectP.play();
              scorePoints2();

          }
        }

        //with the Aliens
        for (var l = 0; l < alien_player2.length; l++){
          var alienElement2 = alien_player2[l].alienElement;
          var alienRect2 = alienElement2.getBoundingClientRect();
          if (player2Rect.left < alienRect2.left + alienRect2.width &&
              player2Rect.left + player2Rect.width > alienRect2.left &&
              player2Rect.top < alienRect2.top + alienRect2.height &&
              player1Rect.height + player2Rect.top > alienRect2.top) {
              gameOverAudio.play();
              gameOverCounter2 = 1;
            }
          }
    }//end of collision detection

  //create a new star when collected one
  function createNewStar() {
    if (stars_player1.length < settings.numberOfStars) {
      stars_player1.push(new Star('player1'));
    }
    if (stars_player2.length < settings.numberOfStars) {
      stars_player2.push(new Star('player2'));
    }
  }

  //move the Aliens
  function moveAlien() {
    if (frame%120 === 0) {
      var alienElement = alien_player1[0].alienElement;
      alienElement.remove();
      alien_player1.splice(0,1);

      var alienElement2 = alien_player2[0].alienElement;
      alienElement2.remove();
      alien_player2.splice(0,1);
    }

    if (alien_player1.length < settings.numberOfAliens) {
      alien_player1.push(new Alien('player1'));
    }
    if (alien_player2.length < settings.numberOfAliens) {
      alien_player2.push(new Alien('player2'));
    }
  }

  //score points for player 1
  function scorePoints() {
    score1 += 10;
    if (score1 < 100) {
    document.getElementById('scoreP1').innerHTML = "0000"+score1;
    } else if (score1 < 1000) {
        document.getElementById('scoreP1').innerHTML = "000"+score1;
      }else if (score1 < 10000) {
          document.getElementById('scoreP1').innerHTML = "00"+score1;
        }
  }
  //score points for player 2
  function scorePoints2() {
    score2 += 10;
    if (score2 < 100) {
    document.getElementById('scoreP2').innerHTML = "0000"+score2;
  } else if (score2 < 1000) {
        document.getElementById('scoreP2').innerHTML = "000"+score2;
      }else if (score2 < 10000) {
          document.getElementById('scoreP2').innerHTML = "00"+score2;
        }
  }

    // reset game
    function resetGame(){
      score1 = 0;
      score2 = 0;
      gameCounter = 0;
      player1 = new Rocket({
                          rocketSpeed: 8,
                          walls: true,
                          automatic: false,
                          godmode: false,
                          id: "rocket1"
                        });

      player2 = new Rocket({
                          rocketSpeed: 8,
                          walls: true,
                          automatic: false,
                          godmode: false,
                          id: "rocket2"
                        });

       for(var i =0; i<settings.numberOfStars; i++){
         stars_player1.push(new Star('player1'));
         stars_player2.push(new Star('player2'));
       }

       for(var i =0; i<settings.numberOfAliens; i++) {
         alien_player1.push(new Alien('player1'));
         alien_player2.push(new Alien('player2'));
       }
    }

  function checkGameOver() {
    if (frame%15 === 0) {
      if (gameOverCounter1 !== 0) {
        gameOver();
      }
    }
  }
  function checkGameOver2() {
    if (frame%15 === 0) {
      if (gameOverCounter2 !== 0) {
        gameOver2();
      }
    }
  }
    function gameOver() {
      //add the game over image
      var go = document.createElement('IMG');
      go.setAttribute("src", "images/gameOver.jpg");
      var goBoard = document.getElementById('P1Screen');
      goBoard.append(go);
      go.classList.add('gameOver');
      gameOver_player1.push(go);
      //remove the game over image
      if(gameOver_player1.length > 1) {
        var goElement = gameOver_player1[0];
        goElement.remove();
        gameOver_player1.splice(0,1);
      }
      gameCounter++;
    }
    function gameOver2() {
      //add the game over image
      var go = document.createElement('IMG');
      go.setAttribute("src", "images/gameOver.jpg");
      var goBoard = document.getElementById('P2Screen');
      goBoard.append(go);
      go.classList.add('gameOver');
      gameOver_player2.push(go);
      //remove the game over image
      if(gameOver_player2.length > 1) {
        var goElement = gameOver_player2[0];
        goElement.remove();
        gameOver_player2.splice(0,1);
      }
      gameCounter++;
    }

  //startup the game
  function init() {
    resetGame();
    setupEvents();
  }

if (gameCounter === 0) {
  init();
}
  //the render function. It will be called 60/sec
  this.render = function() {

    player1.render(interactions,'player1');
    player2.render(interactions,'player2');
    CollisionDetect();
    createNewStar();
    moveAlien();
    checkGameOver();
    checkGameOver2();
    frame++;
  }

  /*
   *  Game loop. Do not touch ;-)
   */
  var self = this;
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
          })();

          (function animloop(){
            requestAnimFrame(animloop);
            self.render();
          })();
}

var g = new Game();

//add event listener to listen to reset button
document.getElementById('restartBtn').addEventListener('click', function(){
  location.reload();
});
