const express = require('express');
const app = express();
const PyShell = require('./python/shell')

const port = process.env.port || 5000;

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/python', (req, res) => {
    res.send({
        "response": PyShell(req.query.name, req.query.args)
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));