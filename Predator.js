var Predator = (function () { // global variable
  var privateCarnivores = []; // private variable inside the iife
  var privateHerbivores = [];
  
  return {
    
    loadCarnivores: function (callbackFunction) {
      // Create an XHR to load carnivores
      var loader = new XMLHttpRequest();
      // Listen for when the load event is broadcast
      // and execute an anonymous callback
      loader.addEventListener("load", function () {
        // Set the value of the private array
        privateCarnivores = JSON.parse(this.responseText).carnivores;
          console.log("privateCarnivores", privateCarnivores);
        
        callbackFunction(privateCarnivores);
        
      });

        loader.open("GET", "carnivores.json");
        loader.send();
    },
  
  
    loadHerbivores: function (callbackFunction) {
      // Create an XHR to load carnivores
      var loaderH = new XMLHttpRequest();
      // Listen for when the load event is broadcast
      // and execute an anonymous callback
      loaderH.addEventListener("load", function () {
        // Set the value of the private array
        privateHerbivores = JSON.parse(this.responseText).herbivores;
          console.log("privateHerbivores", privateHerbivores);
        
        callbackFunction(privateHerbivores);
        
      });

        loaderH.open("GET", "herbivores.json");
        loaderH.send();
    }
  }

})();






