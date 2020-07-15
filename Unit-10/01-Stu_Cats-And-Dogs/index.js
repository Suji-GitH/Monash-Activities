const dogs = {
    raining: true,
    noise : "woof!",
    makeNoise: () => {
        if (dogs.raining){
            console.log(dogs.noise);
        };
        
    }
};

const cats = {
    raining: false,
    noise : "Meow!",
    makeNoise: () => {
        if (cats.raining){
            console.log(cats.noise);
        };
        
    }
};

dogs.makeNoise();
cats.makeNoise();
massHysteria();

function massHysteria() {
    if(dogs.raining === true || cats.raining === false){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
};

