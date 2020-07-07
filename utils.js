const fetch = require("node-fetch");

const utils = {
    // Invoke the API to post a quote to the Zen wall
    // baseUrl: base URL of the API
    // repoUrl: the URL to the GitHub repository, passed as a query parameter to the API endpoint
    addToWall: async function (baseUrl, repoUrl) {
        const response = await fetch(`${baseUrl}?repoUrl=${repoUrl}`, { method: 'POST' });
        const message = await response.text();
        if (response.status != 200) {
            throw new Error(
                `Received ${response.status} status code. Reason: ${message}`
            );
        }
        return message;
    }

};

module.exports = utils;