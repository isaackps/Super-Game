var pointers = function(settings) {
  //settings
  var pointers = null;
  //object id for left objects
  var objId1 = 0;
  //object id for right objects
  var objId2 = 0;
  //this array holds all spawned object for left screen
  window.objects1 = [];
  //this.objects1 = objects1;
  //this array holds all spawned object for right screen
  window.objects2 = [];
  //spawn a new object every 1000ms
  var spawnRate = 1000;
  //when was teh last object spawned
  var lastSpawn = -1;

  //random generator for position x and y.
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //to spawn random things on p2 screen
  function createRandom() {

    spawnRandomObject1();
    spawnRandomObject2();

    //spawn random object to left screen
    function spawnRandomObject1() {
      //spawn object at random top
      var spawnX1 = getRandomInt(5, 485);
      //spawn object at random left
      var spawnY1 = getRandomInt(20,457);
      //console.log('spawn random object')
      var randomObjects1 = document.createElement("div");
      //create the position for the object created
      randomObjects1.style.position = "absolute";
      randomObjects1.style.left = spawnY1+'px';
      randomObjects1.style.top = spawnX1+'px';
      //create style of the object created
      randomObjects1.style.width = "10px";
      randomObjects1.style.height = "10px";
      randomObjects1.style.backgroundColor = "white";
      //create the id for the object created
      randomObjects1.id = "randomObjects1-"+objId1;
      //append the element to html so that it will appear on screen
      document.getElementById('alien1').appendChild(randomObjects1);
      //increase objid so next object will be different id
      objId1++;
      //add the new object to the objects[] array
      objects1.push(randomObjects1);
      //set time interval so that it will have a delay before it create the next object
      setTimeout(spawnRandomObject1, 1500);

    setTimeout(removeObject1, 30000);
  }

    //spawn random object to right screen
    function spawnRandomObject2() {
      //spawn object at random top
      var spawnX2 = getRandomInt(5, 485);
      //spawn object at random left
      var spawnY2 = getRandomInt(20,457);
      //console.log('spawn random object')
      var randomObjects2 = document.createElement("div");
      //create the position for the object created
      randomObjects2.style.position = "absolute";
      randomObjects2.style.left = spawnY2+'px';
      randomObjects2.style.top = spawnX2+'px';
      //create style of the object created
      randomObjects2.style.width = "10px";
      randomObjects2.style.height = "10px";
      randomObjects2.style.backgroundColor = "white";
        //create the id for the object created
      randomObjects2.id = "randomObjects2-"+objId2;
        //append the element to html so that it will appear on screen
      document.getElementById('alien2').appendChild(randomObjects2);
      //increase objid so next object will be different id
      objId2++;
      //add the new object to the objects[] array
      objects2.push(randomObjects2);
      //set time interval so that it will have a delay before it create the next object
      setTimeout(spawnRandomObject2, 1500);

      setTimeout(removeObject2, 30000);
    }
  }//createRandom closer
  //remove object if its too long on the screen
  function removeObject1() {
    var firstArrayEle1 = objects1[0];
    document.getElementById('alien1').removeChild(firstArrayEle1);
    objects1.splice(0,1);
  }
  //remove object if its too long on th screen
  function removeObject2() {
    var firstArrayEle2 = objects2[0];
    document.getElementById('alien2').removeChild(firstArrayEle2);
    objects2.splice(0,1);
  }
  //detect the distance and 'collect' the object
  function detection1() {

  }





createRandom();


  this.render = function() {
    console.log(objects1[0].style.left, objects1[0].style.top);


  }


}
