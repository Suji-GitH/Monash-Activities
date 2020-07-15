function MiniBank(balance) {
  this.statement = [balance],
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  },
  this.setBalance = function(value) {
    this.balance = value;
  },
  this.updateStatement = function(num) {
    this.balance.push(num);
  },
  this.getStatement = function() {
    return this.statement;
  },
  this.printStatement = function() {
    for(const value of this.statement) {
      console.log(value + "\n");
    }
  },
  this.deposit = function (value) {
    this.updateStatement(value);
    this.setBalance(value);
  }; 
}

const bank = new MiniBank(1000000);
