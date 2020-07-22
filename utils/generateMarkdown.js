function generateMarkdown(data) {
return `
# ${data.project}
* Project URL: ${data.url}
* Project Repo: https://github.com/${data.username}/${data.project}
* Description: ${data.description}
* Project dependencies: ${data.dependencies}
* Tests: ${data.test}
*  License: This project uses ${data.license} license.
* Contributing: ${data.contributing}
* Usage: ${data.usage}
* Contact email: ${data.email}
`;
}

module.exports = generateMarkdown;