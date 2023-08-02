// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// questions to take user input to generate the markdown file
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
        choices: ["MIT", "GNU_AGPLv3", "GNU_GPLv3", "GNU_LGPLv3", "Mozilla_Public_2.0", "Apache_2.0", "Boost_Software_1.0", "None"],
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

// Function that writes the readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("README.md file generation successful!");
        }
    });
}

// function that initializes the app, uses the writeToFile function to create readme
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("Generating....");
            writeToFile('./output/README.md', generateMarkdown({ ...answers }));
        })
}

// Function call to initialize app
init();
