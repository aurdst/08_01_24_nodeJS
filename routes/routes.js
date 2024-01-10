const express = require('express');

const app = express();
app.use(express.json());

app.get("/status", (req, res) => {
    const status = {
        "Status":"En cours d'execution"
    };

    res.send(status)
});