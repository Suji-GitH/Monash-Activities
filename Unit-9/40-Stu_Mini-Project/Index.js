const inquirer = require("inquirer");
const fs = require("fs");
const util = require("until");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ]);
}

promptUser()
.then(function(){
    return writeFileAsync("test", "utf8");
});