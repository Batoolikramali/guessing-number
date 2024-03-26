import inquirer from "inquirer";
// 1. computer wil genterate a random number. (Done).
// 2. user input for gussing number. (Done).
// 3. campare user input with copmuter generated number and show result.
const randomNumber = Math.floor(Math.random() * 10 - 1);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please gusse a number between 1 - 10"
    },
]);
if (answers.userGussedNumber === randomNumber) {
    console.log("congtragulation! you gusssed right number.");
}
else {
    console.log("you gussed wrong number.");
}
console.log(randomNumber);
