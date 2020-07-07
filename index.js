var express = require("express");
const fetch = require('node-fetch');
const { addToWall } = require('./utils');

var app = express();

// Post a quote to the Zen wall
// The API base URL is retrieved from the BASE_URL environment variable
// The GitHub repository URL is passed in as a query parameter
app.get("/addtowall", async (req, res, next) => {
    try {
        const baseUrl = process.env.BASE_URL;
        const repoUrl = req.query.repoUrl;

        console.log(`Base URL: ${baseUrl}`);
        console.log(`Repo URL: ${repoUrl}`);

        let response = await addToWall(baseUrl, repoUrl);

        console.log('Got zen');
        res.json(response);
    } catch (error) {
        res.status(500).send(error);
    };
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
