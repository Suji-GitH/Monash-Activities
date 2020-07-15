class Character {

  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints =hitPoints;
  }
  
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for NAME are as following: ${this.name}, ${this.strength}, ${this.hitPoints}`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has HITPOINTS hit points remaining!`);
    console.log("------------");
  }


  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
      if(this.hitPoints > 0){
        console.log("test");
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

const Character = new Character ("suji", "45", "100");

Character.isAlive();

// Create an interval that alternates attacks every 2000 milliseconds
