var visitcountries = function() {

  var world = {};
  world.asia = {};
  world.africa = {};
  world.america = {};
  world.asia.japan = {};
  world.asia.japan.tokyo = {};
  world.asia.japan.kyoto = {};

  console.log("Visited %j",world);
}

visitcountries();
