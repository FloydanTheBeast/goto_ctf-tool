module.exports = PyShell = (name) => {
    if (name) {
        const ChildProcess = require('child_process');
        const path = require('path');

        py = ChildProcess.spawn('python', [path.join(__dirname, name + '.py')]);
        py.stdout.on('data', (data) => console.log(data.toString()));
        py.stdout.on('end', () => console.log("YAY"));
        return py;
    } else console.warn("Не указано имя исполняемого файла");
}