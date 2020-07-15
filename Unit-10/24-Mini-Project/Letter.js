class Letter {
    constructor(char){
        this.char = char.toString();
        // this.guessed = guessed;
    }

    underlineString = () =>{
        console.log(this.char);
    } 
    return "-"

       
};

const letter = new Letter("Test");

letter.underlineString();