#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 7 + 1);
const name = "Wellcome ";
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess the number 1 To 7",
  },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congtratulation! you guessed right number. ")
}else{
    console.log("You guessed wrong number");
    
}