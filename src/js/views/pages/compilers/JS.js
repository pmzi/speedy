const Compiler = require('./Compiler');
const exec = require('child_process').exec;
const path = require('path');

class JS extends Compiler {

    constructor() {
        super();

        this.extention = 'js';

    }

    async run(code) {

        return new Promise((resolve, reject) => {
            const fileName = this.saveCode(code);

            const child = exec(`node ${path.join(this.codesPath, fileName)}`,
                (error, stdout, stderr) => {
                    resolve(stdout)
                });
        })
    }

}

module.exports = JS;