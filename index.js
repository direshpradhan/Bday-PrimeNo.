var readlineSync = require("readline-sync");
var chalk = require("chalk");

var name = readlineSync.question(chalk.yellowBright("Enter your name: "));
console.log("Hey " + chalk.cyan(name) + ", Let us check if your DOB is a prime number!!");
var isPrime=true;

function prime() {
  var birthdate = readlineSync.question(chalk.green("\nEnter your birth date in DD/MM format: "));

  var date=birthdate.split('/'); 
  var day = date[0];
  var month = date[1];


  if(day<=0 || day>31 || isNaN(day) || isNaN(month) || month<=0 || month>12 || (month==02 && (day==30 || day==31))) {
    console.log(chalk.red("Please enter a valid date"));
    prime();
  }


  if(day===1) {
    console.log("Your DOB is neither a prime number nor a composite number.");
  }
  else if(day>=2 && day<=31) {
    for(var i=2;i<day;i++) {
      if(day%i==0) {
        isPrime = false;
        console.log(chalk.bgCyan("Your DOB is not a prime number!!"));
        break;
      }
    }
  }

  if(isPrime===true && day!= 1) {
    console.log(chalk.bgBlue("Your DOB is a prime number!!"));
  }
}
prime();