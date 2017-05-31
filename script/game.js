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

  //Scores
  var score1 = 0;
  var score2 = 0;

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

            console.log('boom gameover');
          }
        }
        //player2
        // var player2Rect = player2.rocketElement.getBoundingClientRect();
        // for(var k = 0; k<stars_player2.length;k++){
        //   var starElement2 = stars_player2[i].starElement2;
        //
        //   if(starElement2 == null){
        //     continue;
        //   }
        //
        //   var starRect2 = starElement2.getBoundingClientRect();
        //   if (player2Rect.left < starRect2.left + starRect2.width &&
        //       player2Rect.left + player2Rect.width > starRect2.left &&
        //       player2Rect.top < starRect2.top + starRect2.height &&
        //       player2Rect.height + player2Rect.top > starRect2.top) {
        //
        //       starElement2.remove();
        //       stars_player2.splice(i,1);
        //       //scorePoints();
        //
        //   }
        //
        // }
        //
        // //with the Aliens
        // for (var l = 0; l < alien_player2.length; l++){
        //   var alienElement2 = alien_player2[j].alienElement2;
        //
        //
        //   var alienRect2 = alienElement2.getBoundingClientRect();
        //   if (player2Rect.left < alienRect2.left + alienRect2.width &&
        //       player2Rect.left + player2Rect.width > alienRect2.left &&
        //       player2Rect.top < alienRect2.top + alienRect2.height &&
        //       player1Rect.height + player2Rect.top > alienRect2.top) {
        //
        //       console.log('boom 2 gameover');
        //     }
        //   }
    }//end of collision detection

  //create a new star when collected one
  function createNewStar() {
    if (stars_player1.length < settings.numberOfStars) {
      stars_player1.push(new Star('player1'));
    }
  }

  //move the Aliens
  function moveAlien() {
    if (frame%180 === 0) {
      var alienElement = alien_player1[0].alienElement;
      alienElement.remove();
      alien_player1.splice(0,1);
    }

    if (alien_player1.length < settings.numberOfAliens) {
      alien_player1.push(new Alien('player1'));
    }
  }

  //score points
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

    // reset game
    function resetGame(){

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






  //startup the game
  function init() {
    resetGame();
    setupEvents();
  }

  init();

  //the render function. It will be called 60/sec
  this.render = function() {

    player1.render(interactions,'player1');
    player2.render(interactions,'player2');
    CollisionDetect();
    createNewStar();
    moveAlien();
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
