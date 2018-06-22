const child_process = require('child_process');
const path = require('path');

let response = '';

let PyShell = (name, args) => {
    if (name) {
        child_process.exec('python ' + path.join(__dirname, name + '.py ') + args,
        (e, stdout) => {
            if (e instanceof Error) {
                console.error(e);
                throw e;
            }

            response = stdout;
        }
    )}
    else { console.warn("Не указано имя исполняемого файла"); }
    return response;
}

module.exports = PyShell;