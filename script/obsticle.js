var obsticle = function(settings) {

    //settings
    var alienElement = document.getElementById('alien');


    //movement of the obsticle element
    function moving() {
      alienElement.style.top+10+"px";
    }

    //create a function that create an alien
    function create(x) {
      for (var i = 0; i < x; i++) {

        var alienImage = document.createElement("IMG");
        alienImage.setAttribute("src", 'images/alien.png');
        alienElement.appendChild(alienImage);
        alienImage.style.height = '60px';
        //alienImage.style.left = -7+'px';
        console.log(alienElement.style.left);
      }
    }

    this.render = function() {
      moving();
    }

create(5);
}
