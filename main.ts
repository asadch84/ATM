import inquirer from "inquirer";

let myBalance = 1000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Number",
        type: "number"
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Your pin number is correct");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);

    if (operationAns.operation === "Withdraw") {
        // Logic for withdraw
        console.log("Withdraw operation selected");
        
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    } else if (operationAns.operation === "Check Balance") {
        // Logic for checking balance
        console.log("Check balance operation selected");
        console.log("Your current balance is: " + myBalance);
    }
 
    
} else {
    console.log("Your pin number is invalid");
}
