const fs = require('fs');
const path = require('path');
class Compiler{

    constructor(){
        this.extention = '';
        this.codesPath = './codes';
    }

    saveCode(code){

        if(!fs.existsSync(this.codesPath)){

            fs.mkdirSync(this.codesPath)

        }

        const fileName = Date.now() + `.${this.extention}`;

        fs.writeFileSync(path.join(this.codesPath, fileName), code);

        return fileName;

    }

    run(){
        throw new Error('run method should be override.');
    }

}

module.exports = Compiler;