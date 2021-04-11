// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
      {
        type: 'input',
        name: 'github',
        message: 'GitHub name: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email: ',
      },
      {
        type: 'input',
        name: 'title',
        message: "Project title: ",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description: '
      },
      {
        type: 'input',
        name: 'instalIn',
        message: 'Installation Instructions: '
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'Usage Information: '
      },
      {
        type: 'list',
        name: 'license',
        message: 'License: ',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'No License']
      },
      {
        type: 'input',
        name: 'contrGuide',
        message: 'Contribution Guidelines: '
      },
      {
        type: 'input',
        name: 'testIn',
        message: 'Test Instruction: '
      },
  ])
  .then((data) => {
    // Use user feedback for... whatever!!
    const filename = "README.md";

    fs.writeFile(filename, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!'));
  });

