var Game = function() {

  // Game Settings
  var settings = {};
  settings.numberOfStars = 20;

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

        }

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

      /*
      player2 = new Rocket({
                          rocketSpeed: 8,
                          walls: true,
                          automatic: false,
                          godmode: false,
                          id: "rocket2"
                        });
      */

       for(var i =0; i<settings.numberOfStars; i++){
         stars_player1.push(new Star('player1'));
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
    CollisionDetect();


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
