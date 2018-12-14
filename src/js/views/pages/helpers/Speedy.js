const JS = require('../compilers/JS');

const js = new JS();

const AjaxHelper = require('./AjaxHelper');

const interpolating = require('interpolating-polynomial');


class Speedy {

    static async calculate(...codes) {

        const result = {
            functions: [],
            functionTexts: []
        };

        // Let's fetch functions

        for (let code of codes) {

            const resultMap = new Map();

            for (let i = 0; i < 5; i++) {

                const modifiedCode = `const n = ${i};${code}`;

                const result = await js.run(modifiedCode);

                resultMap.set(i, Number(result));

            }

            const apiResult = await AjaxHelper.getInterpolating(resultMap);

            const resultMapArray = [];

            await resultMap.forEach((value, key) => {
                resultMapArray.push([key, value])
            })

            const fn = interpolating(resultMapArray);

            result.functions.push(fn);

            result.functionTexts.push(apiResult.results.replace(/\$\$/g,''));

        }

        return result;

    }

    static async compare(functions) {

        const returnedNumbers = [];

        for(let fn of functions){

            returnedNumbers.push(fn(10000000));

        }

        // This works for only 2 functions

        if(returnedNumbers[0] > returnedNumbers[1]){
            return '>';
        }else if(returnedNumbers[0] < returnedNumbers[1]){
            return '<';
        }

        return '=';

    }

}

module.exports = Speedy;