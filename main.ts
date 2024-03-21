#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//step 01 Choices through Inquirer
const answers:{
    numberOne: number
    numberTwo: number
    operator: string
} = await inquirer.prompt([
    { type: "number",
         name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
       name: "numberTwo",
      message: "enter your second number"
    },
    { type: "list",
      name: "operator",
        message: "enter your operator",
        choices: ["+", "-", "*", "/"]}
        ])

//Step02 USe Switch Case
        const { numberOne, numberTwo, operator } = answers;

        let result
        switch (operator) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
            default:
                console.log("invalid operator");
        }
        console.log(`${numberOne} ${operator} ${numberTwo} =${result}`);