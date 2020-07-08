var fs = require("fs");

fs.appendFile("Testlog.txt", process.argv[2] + '\r', function(Error) {
  if(Error) {
    console.log(Error);
  }
  else {
    console.log("Complete");
  }

});
