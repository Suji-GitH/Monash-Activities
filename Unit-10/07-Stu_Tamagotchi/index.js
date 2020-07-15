const DigitalPal = () => {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100
}

DigitalPal.prototype.feed() = () => {
    if(this.hungry) {
        console.log("That was yumm");
        this.hungry = false;
        this.sleepy = true;
    } else {
        console.log("No thanks! I'm full")
    };
};

DigitalPal.prototype.sleep() = () => {
    if(this.sleep) {
        console.log("Zzzzzzzz");
        this.sleepy = false;
        this.bored = true;
        increaseAge();
    } else {
        console.log("No way! I'm not tired.")
    };
};

DigitalPal.prototype.increaseAge() = () => {
    let newAge = this.age++;
    console.log(`Happy Birthday to me! I am ${newAge} old!`);
};

DigitalPal.prototype.bark() = () => {
    console.log("Woof!, Woof!");
};

DigitalPal.prototype.goOutsite() = () => {
    if (this.outside){
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
};

DigitalPal.prototype.meow() = () => {
    console.log("Meow!, Meow!");
};

DigitalPal.prototype.buyNewFurniture() = () => {
    this.houseCondition - 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored = false;
    this.sleepy = true;
}