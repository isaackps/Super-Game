var Rocket = function(settings) {
    var self = this;

  //Settings
  self.rocketElement = null;


  //create wall detection
  function wall() {
    var x_right = parseInt(self.rocketElement.style.left)  + parseInt(self.rocketElement.style.width);
    var x_left = parseInt(self.rocketElement.style.left);
    var y_top = parseInt(self.rocketElement.style.top);
    var y_bottom = parseInt(self.rocketElement.style.top) + parseInt(self.rocketElement.style.height);

    //size of the player screen so it will be inside the screen
    var w = 440;
    var h = 490;

    if(y_bottom > h){
      self.rocketElement.style.top = (h-parseInt(self.rocketElement.style.height)) + 'px';
    }

    if(y_top < 0){
      self.rocketElement.style.top = '0px';
    }

    if(x_right > w){
      self.rocketElement.style.left = (w-parseInt(self.rocketElement.style.width)) + 'px';
    }

    if(x_left < 8){
      self.rocketElement.style.left = '8px';
    }

  }

  //move the rocket around manually
  function move(interactions,currentPlayer) {
    if(interactions[currentPlayer].up){
      self.rocketElement.style.top = parseInt(self.rocketElement.style.top)-8+"px";     //speed in which the rocket will move
      //when press the rocket will rotate to the angle
      self.rocketElement.style.transform = "rotate(0deg)";
    }

    if(interactions[currentPlayer].down){
      self.rocketElement.style.top = parseInt(self.rocketElement.style.top)+8+"px";     //speed in which the rocket will move
      //when press the rocket will rotate the the angle
      self.rocketElement.style.transform = "rotate(180deg)";

    }

    if(interactions[currentPlayer].left){
      self.rocketElement.style.left = parseInt(self.rocketElement.style.left)-8+"px";     //speed in which the rocket will move
    //when press the rocket will rotate the the angle
      self.rocketElement.style.transform = "rotate(-90deg)";
    }

    if(interactions[currentPlayer].right){
      self.rocketElement.style.left = parseInt(self.rocketElement.style.left)+8+"px";     //speed in which the rocket will move
    //when press the rocket will rotate the the angle
      self.rocketElement.style.transform = "rotate(90deg)";
    }

    if(settings.walls){
      wall();
    }
  }


  function init() {
    //create object at the start of the game.
    //to initialise the object.
    self.rocketElement = document.getElementById(settings.id);
    self.rocketElement.style.top = '430px';
    self.rocketElement.style.left = '210px';
    self.rocketElement.style.height = '50px';
    self.rocketElement.style.width = '35px';
    self.rocketElement.style.transform = 'rotate(0deg)';

  }

  this.render = function(interactions, currentPlayer) {
    move(interactions,currentPlayer);
  }

  init();

}
