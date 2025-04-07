const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the first number: ', (number1) => {
    readline.question('Enter the second number: ', (number2) => {
      const sum = Number(number1) + Number(number2);
      console.log(`The sum of ${number1} and ${number2} is ${sum}`);
      readline.close();
    });
  });