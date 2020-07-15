function character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;



    this.printStats = function() {
        console.log(`Name: ${this.name}, Profession: ${this.profession}, Gender: ${this.gender}, Age: ${this.age}, Strength: ${this.strength}, HitPoints: ${this.hitpoints}`)
    }
}

character.prototype.isAlive = function (){
    if(this.hitpoints > 0){
        console.log("test");
    }
};

let Me = new character("suji", "IT", "male", "1", "10", "73");

Me.printStats();