var Game = function() {

  //Game Settings
  var assets = [];
  //so player 1 and 2 will have different interactions
  var interactionsArr = [];
  var noOfPlayers = 2;

  for(var i = 0; i < noOfPlayers; i++) {
    //set values for rocket
    assets[i] = new rocket({
      rocketSpeed: 8,
      walls: true,
      automatic: false,
      godmode: false,
      id: "rocket"+ (i+1)
    });

    //interactions set to false until key pressed
    interactionsArr[i] = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  //world settings
  var frame = 0;                //Frames since the start of the game

  //setup event listeners
  function setupEvents() {
    //add event listener to listen to up key so when key is lifted nothing happens
    document.addEventListener('keyup', function(event){
      var keyName = event.key;

      switch(keyName) {
        case "ArrowRight":
            interactionsArr[0].right = false;
            break;
        case "ArrowLeft":
            interactionsArr[0].left = false;
            break;
        case "ArrowUp":
            interactionsArr[0].up = false;
            break;
        case "ArrowDown":
            interactionsArr[0].down = false;
            break;
        case "w":
            interactionsArr[1].up = false;
            break;
        case "a":
            interactionsArr[1].left = false;
            break;
        case "s":
            interactionsArr[1].down = false;
            break;
        case "d":
            interactionsArr[1].right = false;
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
            interactionsArr[0].right = true;
            break;
        case "ArrowLeft":
            interactionsArr[0].left = true;
            break;
        case "ArrowUp":
            interactionsArr[0].up = true;
            break;
        case "ArrowDown":
            interactionsArr[0].down = true;
            break;
        case "w":
            interactionsArr[1].up = true;
            break;
        case "a":
            interactionsArr[1].left = true;
            break;
        case "s":
            interactionsArr[1].down = true;
            break;
        case "d":
            interactionsArr[1].right = true;
            break;
      default:
        break;
      }
    });


  }

  //startup the game
  function init() {
    setupEvents();
  }

  //the render function. It will be called 60/sec
  function render() {
    //for each assets it has this own interactions
    for(var i = 0; i < assets.length; i++){
      assets[i].render(interactionsArr[i])
    }
  }

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
            render();
          })();

          init();

}

var g = new Game();
