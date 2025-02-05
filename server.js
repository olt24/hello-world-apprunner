const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello, World! Welcome to AWS App Runner");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
