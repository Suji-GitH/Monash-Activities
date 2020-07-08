const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  animalJSON.forEach(animal => {
    if (animal.species === "dog") {
      dogs.push(animal);
    } else if (animal.species === "cat") {
      cats.push(animal);
    }
  });

  const JSONDogs = JSON.stringify(dogs);
  const JSONcats = JSON.stringify(cats);

  fs.writeFile("dogs.json", JSONDogs, function(err) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to dogs.json file");
  });

  fs.writeFile("cats.json", JSONcats, function(err) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to cats.json file");
  });
});
