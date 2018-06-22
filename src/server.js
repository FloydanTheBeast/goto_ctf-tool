const express = require('express');
const app = express();
const PyShell = require('./python/shell')

const port = process.env.port || 5000;

app.get('/python', (req, res) => {
    console.log(PyShell(req.query.name));
    res.send()
});

app.listen(port, () => console.log(`Listening on port ${port}`));