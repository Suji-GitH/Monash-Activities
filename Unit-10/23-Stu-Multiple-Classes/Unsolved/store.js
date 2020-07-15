const { toys } = require("./toy");

class store {
  constructor(Name, Stock) {
      this.Name = Name;
      this.Stock = Stock;
      this.Revenue = 0
  }

  processProductSale(toyName) {
    for (const toy of this.Stock) {
      if (toy.name === toyName && toy.count > 0) {
        this.revenue += toy.price;
        toy.count --;
      } else {
        console.log("No More");
      }
    }
  }

  replenishStock(Name, Count)

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

}


module.exports = Store;
