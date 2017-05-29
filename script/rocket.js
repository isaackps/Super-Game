var rocket = function(settings) {

  //Settings
  var rocketElement = null;

  //create wall detection
  function wall() {
    var x_right = parseInt(rocketElement.style.left)  + parseInt(rocketElement.style.width);
    var x_left = parseInt(rocketElement.style.left);
    var y_top = parseInt(rocketElement.style.top);
    var y_bottom = parseInt(rocketElement.style.top) + parseInt(rocketElement.style.height);

    //size of the player screen so it will be inside the screen
    var w = 450;
    var h = 500;

    if(y_bottom > h){
      rocketElement.style.top = (h-parseInt(rocketElement.style.height)) + 'px';
    }

    if(y_top < 0){
      rocketElement.style.top = '0px';
    }

    if(x_right > w){
      rocketElement.style.left = (w-parseInt(rocketElement.style.width)) + 'px';
    }

    if(x_left < 8){
      rocketElement.style.left = '8px';
    }

  }

  //move the rocket around manually
  function move(interactions) {
    if(interactions.up){
      rocketElement.style.top = parseInt(rocketElement.style.top)-8+"px";     //speed in which the rocket will move
      //when press the rocket will rotate to the angle
      rocketElement.style.transform = "rotate(0deg)";
    }

    if(interactions.down){
      rocketElement.style.top = parseInt(rocketElement.style.top)+8+"px";     //speed in which the rocket will move
      //when press the rocket will rotate the the angle
      rocketElement.style.transform = "rotate(180deg)";

    }

    if(interactions.left){
      rocketElement.style.left = parseInt(rocketElement.style.left)-8+"px";     //speed in which the rocket will move
    //when press the rocket will rotate the the angle
      rocketElement.style.transform = "rotate(-90deg)";
    }

    if(interactions.right){
      rocketElement.style.left = parseInt(rocketElement.style.left)+8+"px";     //speed in which the rocket will move
    //when press the rocket will rotate the the angle
      rocketElement.style.transform = "rotate(90deg)";
    }

    if(settings.walls){
      wall();
    }
  }

  function init() {
    //create object at the start of the game.
    //to initialise the object.
    rocketElement = document.getElementById(settings.id);
    rocketElement.style.top = '430px';
    rocketElement.style.left = '210px';
    rocketElement.style.height = '50px';
    rocketElement.style.width = '35px';
    rocketElement.style.transform = 'rotate(0deg)';

  }

  this.render = function(interactions) {
    move(interactions);
  }

  init();

}
