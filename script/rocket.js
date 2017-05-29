var rocket = function(setting) {

  //Settings
  var rocketElement = null;

  //create wall detection
  function wall() {
    var x_right = parseInt(rocketElement.style.left)  + parseInt(rocketElement.style.width);
    var x_left = parseInt(rocketElement.style.left);
    var y_top = parseInt(rocketElement.style.top);
    var y_bottom = parseInt(rocketElement.style.top) + parseInt(rocketElement.style.height);

    var w = parseInt(screen.innerWidth);
    var h = parseInt(screen.innerHeight);

  }

  //move the rocket around manually
  function move(interactions) {
    if(interactions.up){
      rocketElement.style.top
    }

  }


}
