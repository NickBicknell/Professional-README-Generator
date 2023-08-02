// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License ${license}](https://img.shields.io/badge/license-${license}-yellow.svg)`
  } else {
    return ''
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
  ## License 

  Copyright © ${license}. All rights reserved.
    
  Licensed under the ${license} license.
    `
  } else {
    return ''
  }
}

// function that generates markdown in template literal 
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.desc}

  ## Table of Contents 

  [Installation](#installation)\n
  [Usage](#usage)\n
  [Credits](#credits)\n
  ${renderLicenseLink(data.license)}\n
  [Questions](#questions)\n
  [Tests](#tests)\n

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Questions

  ### Github 
  ${data.github}
  ### Contact Me
  If you have any further questions feel free to contact me at ${data.email}

  ## Tests

  ${data.tests}
`;
}

module.exports = generateMarkdown;
