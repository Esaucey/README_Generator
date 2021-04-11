// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License') {
    let mitLicense = `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    return mitLicense;
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'No License') {
    return `[License](#license)`;
  } else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `${license} license is being used`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents

  ### [Installation](#installation)

  ### [Usage](#usage)

  ### ${renderLicenseLink(data.license)}

  ### [Contribution](#contribution)

  ### [Tests](#tests)

  ### [Questions](#questions)
  
  ## Installation Guides:

  ${data.instalIn}

  ## Usage Information: 

  ${data.usageInfo}


  ## License: 

  ${renderLicenseSection(data.license)}

  ## Contribution Guides:

  ${data.contrGuide}

  ## Test Instructions:

  ${data.testIn}

  ## Questions:

  If you have any questions, you can reach out to me at ${data.email} and https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
