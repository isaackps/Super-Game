var obsticle = function(settings) {

    //settings
    var alienElement1 = document.getElementById('alien1');
    var alienElement2 = document.getElementById('alien2');
    //arrays to hold the spawned alien
    var alienArr1 = [];
    var alienArr2 = [];

    var alienId1 = 0;
    var alienId2 = 0;


    //movement of the obsticle element
    // function moving() {
    //   for (var i = 0; i < 500; i++){
    //     alienElement1.style.top += i+"px";
    //     alienElement2.style.top += i+"px";
    //   }
    // }

    //random generator for position x and y.
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    //create a function that create an alien
    function create() {
      spawnAlien1();
      spawnAlien2();

      function spawnAlien1() {
        //spawn object at random x & y position
        var spawnAX1 = getRandomInt(25, 390);
        var spawnAY1 = getRandomInt(5,440);

        var randomAlien1 = document.createElement("IMG");
        //create the position of the alien created
        randomAlien1.setAttribute("src", 'images/alien.png');
        randomAlien1.style.position = "absolute";
        randomAlien1.style.height = '55px';
        randomAlien1.style.left = spawnAX1+'px';
        randomAlien1.style.top = spawnAY1+'px';
        randomAlien1.id = "randomAlien1-"+alienId1;
        alienElement1.appendChild(randomAlien1);
        alienId1++;
        alienArr1.push(randomAlien1);
        console.log(spawnAX1,spawnAY1);
        console.log(randomAlien1.style.left, randomAlien1.style.top)

        setTimeout(spawnAlien1, 4500);
        setTimeout(removeAlien1, 20000);
      }

      function spawnAlien2() {
        //spawn object at random x & y position
        var spawnAX2 = getRandomInt(25, 390);
        var spawnAY2 = getRandomInt(5,440);

        var randomAlien2 = document.createElement("IMG");
        //create the position of the alien created
        randomAlien2.setAttribute("src", 'images/alien.png');
        randomAlien2.style.position = "absolute";
        randomAlien2.style.height = '55px';
        randomAlien2.style.left = spawnAX2+'px';
        randomAlien2.style.top = spawnAY2+'px';
        randomAlien2.id = "randomAlien2-"+alienId2;
        alienElement2.appendChild(randomAlien2);
        alienId2++;
        alienArr2.push(randomAlien2);
        console.log(spawnAX2,spawnAY2);
        console.log(randomAlien2.style.left, randomAlien2.style.top)

        setTimeout(spawnAlien2, 4500);
        setTimeout(removeAlien2, 20000);
      }

    }

    //remove alien if its too long on the screen
    function removeAlien1() {
      var firstArrayEle1 = alienArr1[0];
      document.getElementById('alien1').removeChild(firstArrayEle1);
      alienArr1.splice(0,1);
    }
    //remove alien if its too long on the screen
    function removeAlien2() {
      var firstArrayEle2 = alienArr2[0];
      document.getElementById('alien2').removeChild(firstArrayEle2);
      alienArr2.splice(0,1);
    }

create();



    this.render = function() {
      //create();
    }

//createRow(4);
}
