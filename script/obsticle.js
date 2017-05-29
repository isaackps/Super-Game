var obsticle = function(settings) {

    //settings
    var alienElement = document.getElementById('alien');
    var alienImage = document.createElement("img");

    //movement of the obsticle element
    function moving() {
      alienImage.style.top+10+"px";
    }

    //create a function that create a alien
    function create() {
      alienImage.src = 'images/alien.png';
      alienElement.appendChild(alienImage);
      alienImage.style.height = '60px';
    }

    this.render = function() {
      moving();
    }

create();
}
