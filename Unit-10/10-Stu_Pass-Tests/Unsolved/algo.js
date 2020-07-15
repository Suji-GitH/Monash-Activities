function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split("").reverse().join();
};

Algo.prototype.isPalindrome = function(str) {
    if(str == str.split("").reverse().join()){
        console.log("Success!");
    }

};

Algo.prototype.capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = Algo;
