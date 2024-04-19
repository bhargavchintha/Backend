const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
    // Send HTML content as a response
    return res.status(200).send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Express Testing</title>
            </head>
            <body>
                <h1>Express Testing</h1>
                <p>The app is working properly!</p>
            </body>
        </html>
    `);
});

module.exports = router;
