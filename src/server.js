const express = require('express');
const app = express();
const PyShell = require('./python/shell')
const fs = require('fs');
const path = require('path');

const port = process.env.port || 5000;

let ReadMarkdown = (filePath) => {
    return fs.readFileSync(path.join(filePath), 'utf-8');
}

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

app.get('/md', (req, res) => {
    res.send({
        "response": ReadMarkdown(req.query.file)
    });
});

app.get('/controllers', (req, res) => {
    let controllers = require('require-all')(
        {
            dirname: __dirname + '/../Content',
            filter:  /()\.md$/,
            recursive: true,
            resolve: function (Controller) {
                return new Controller();
            }
        }
    )
    res.send({
        "response": controllers
    });
    console.log(controllers);
});

app.listen(port, () => console.log(`Listening on port ${port}`));