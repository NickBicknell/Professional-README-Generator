// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",

    },
    {
        type: "input",
        message: "Give a description of your project:",
        name: "desc",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? (If none put N/A)",
        name: "installation",
    },
    {
        type: "input",
        message: "What are some intructions to use your application?",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose what license you have for your application:",
        choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public 2.0", "Apache 2.0", "Boost Software 1.0", "N/A"],
        name: "license",
    },
    {
        type: "input",
        message: "List any contributors to your project:",
        name: "credits",
    },
    {
        type: "input",
        message: "How do your run tests on your application?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is the link to your GitHub profile?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("README.md file generation successful!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("Generating....");
            writeToFile('./tests/README.md', generateMarkdown({ ...answers }));
        })
}

// Function call to initialize app
init();
