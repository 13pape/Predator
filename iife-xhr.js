function listCarnivores (carnivores) {
   // List the carnivores in the DOM
        var list = document.getElementById("carnivores-list");
        var outputString = "";

        for (var i =0; i < carnivores.length; i++) {
          var currentCarnivore = carnivores[i];
          console.log("currentCarnivore", currentCarnivore);
          //Build up our DOM string
          outputString += `<h1>${currentCarnivore}</h1>`;
        }

        list.innerHTML = outputString;
}

function gridCarnivores (carnivores) {
        var grid = document.getElementById("carnivores-grid");
        var outputString = "";

        for (var i =0; i < carnivores.length; i++) {
          var currentCarnivore = carnivores[i];
          console.log("currentCarnivore", currentCarnivore);
          //Build up our DOM string
          outputString += `<div class="carnivores-card">${currentCarnivore}</div>`;
        }

        grid.innerHTML = outputString;
}



function listHerbivores (herbivores) {
   // List the herbivores in the DOM
        var listH = document.getElementById("herbivores-list");
        var outputString = "";

        for (var i =0; i < herbivores.length; i++) {
          var currentHerbivore = herbivores[i];
          console.log("currentHerbivore", currentHerbivore);
          //Build up our DOM string
          outputString += `<h1>${currentHerbivore}</h1>`;
        }

        listH.innerHTML = outputString;
}

// Only padding in the reference to the function.
// It will be invoked later.
Predator.loadCarnivores(listCarnivores);

Predator.loadCarnivores(gridCarnivores);

Predator.loadHerbivores(listHerbivores);

