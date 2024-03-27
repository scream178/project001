import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", name: "firstNumber", type: "number" },
    { message: "Enter Second Number", name: "secondNumber", type: "number" },
    { message: "select one pf the operators to perform the operation",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division"], },
]);
if (answer.operators === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
console.log("here is your answer");
