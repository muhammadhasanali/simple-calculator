#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNum" },
  { message: "Enter Second Number", type: "number", name: "secNum" },
  {
    message: "Select any operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"]
  },
]);

if (answer.operator === 'Addition'){
    console.log(answer.firstNum + answer.secNum);
}else if(answer.operator === 'Substraction') {
    console.log(answer.firstNum - answer.secNum);
}else if(answer.operator === 'Multiplication') {
    console.log(answer.firstNum * answer.secNum);
}
else if(answer.operator === 'Division') {
    console.log(answer.firstNum / answer.secNum);
}else{
    console.log("Select Valid Operator");
}

