var obsticle = function(settings) {

    //settings
    var alienElement1 = document.getElementById('alien1');
    var alienElement2 = document.getElementById('alien2');

    //movement of the obsticle element
    function moving() {
      for (var i = 0; i < 500; i++){
        alienElement1.style.top += i+"px";
        alienElement2.style.top += i+"px";
      }
    }

    //create a function that create an alien
    function create() {
      //for (var i = 0; i < noOfAlien; i++) {
        //create a var to store the .createelement
        var alienImage1 = document.createElement("IMG");
        var alienImage2 = document.createElement("IMG");
        //create alienImage for both player 1 and player 2
        alienImage1.setAttribute("src", 'images/alien.png');
        alienImage2.setAttribute("src", "images/alien.png");
        alienElement1.appendChild(alienImage1);
        alienElement2.appendChild(alienImage2);
        alienImage1.style.height = '55px';
        alienImage2.style.height = '55px';
        //alienImage.style.left = -7+'px';
        //console.log(alienElement1.style.left);
      }

      //create a row of alienSpeed
      function createRow(noOfAlien) {
        for (var i = 0; i < noOfAlien; i++) {
          create();
        }
      }




    this.render = function() {
      moving();
    }

createRow(4);
}
