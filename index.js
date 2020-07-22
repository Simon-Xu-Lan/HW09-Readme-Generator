const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email for Github?"
    },
    {
        type: "input",
        name: "project",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "url",
        message: "Please input the project's URL?"
    },
    {
        type: "input",
        name: "description",
        message: "Please compose a short description of the project"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What are the project's dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command to run tests?",
        default: "npm test"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license does your project have?",
        choices: ["APACHE 2.O", "MIT", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the use need to know about contributing to the repo?"
    },
];

inquirer.prompt(questions)
    .then(function(data) {
        fs.writeFile("readme.md", generateMarkdown(data), function(err)  {
            if (err) throw err;
            console.log("Readme is created")
        });
    });

// function writeToFile(fileName, data) {
//         fs.writeFile(fileName, data, (err, data) => {
//             if (err) {
//                 return reject(err);
//             }
//             console.log(data);
//     });
// };

// function init() {
//     inquirer.prompt(questions).then(function(data) {
//         writeToFile("readme.md", generateMarkdown(data), function(err)  {
//             if (err) throw err;
//             console.log("Readme is created")
//         })
//     })
// };

// init();