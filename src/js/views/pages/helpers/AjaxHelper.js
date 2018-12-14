const axios = require('axios');
const config = require('../../../../config/config');
const qs = require('qs');

class AjaxHelper {

    static getInterpolating(dataMap) {

        return new Promise(async (resolve, reject) => {

            const data = [];

            await dataMap.forEach((value, key) => {
                data.push(`(${key},${value})`);
            });
            
            this.post(config.interpolating.url, qs.stringify({
                tool: config.interpolating.tool,
                points: data.join('')
            }), {
                'Content-Type': 'application/x-www-form-urlencoded'
            }).then((result) => {
                resolve(result.data)
            })

        })

    }

    static post(url, postData, headers) {

        return axios.post(url, postData, {
            headers
        })

    }

}

module.exports = AjaxHelper;