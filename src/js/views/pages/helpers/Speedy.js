const JS = require('../compilers/JS');

const js = new JS();

const AjaxHelper = require('./AjaxHelper');

class Speedy {

    static async calculate(code) {

        const resultMap = new Map();

        for (let i = 0; i < 5; i++) {

            const modifiedCode = `const n = ${i};${code}`;

            const result = await js.run(modifiedCode);

            resultMap.set(i, Number(result));

        }

        const result = await AjaxHelper.getInterpolating(resultMap)

        return result.results;

    }

    static compare() {

    }

}

module.exports = Speedy;