const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Pick your first number: ', (number1) => {s
    readline.question('Enter the second number: ', (number2) => {
      const sum = Number(number1) + Number(number2);
      console.log(`The sum of ${number1} and ${number2} is ${sum}`);
      readline.close();
    });
  });

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Pick your first number: ', (number1) => {
    readline.question('Pick your second number: ', (number2) => {
      const num1 = Number(number1);
      const num2 = Number(number2);
      const sum = num1 + num2;
      const diff = num1 - num2;
      console.log(`The sum of ${num1} and ${num2} is ${sum}`);
      console.log(`The difference of ${num1} and ${num2} is ${diff}`);
      readline.close();
    });
  });