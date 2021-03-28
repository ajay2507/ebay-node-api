'use strict';
let httpRequest = require('https');

const getRequest = (url) => {
    if (url.includes('http://')) httpRequest = require('http');
    return new Promise(((resolve, reject) => {
        httpRequest.get(url, (res) => {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => {
                if (JSON.parse(body).errorMessage) {
                    reject(body);
                }
                resolve(body);
            });
            res.on('error', (error) => {
                reject(error);

            });
        });
    }));
};

function makeRequest(self, endpoint, methodName, token, marketPlaceID = 'EBAY_US') {
    const dataString = self.body ||  '';
    const options = {
        'hostname': self.baseUrl,
        'path': endpoint,
        'method': methodName || 'GET',
        'headers': {
            'content-type': self.contentType ? self.contentType : 'application/json',
            'Authorization': token,
            'cache-control': 'no-cache',
            'X-EBAY-C-MARKETPLACE-ID': marketPlaceID,
            ...self.headers
        }
    };
    return new Promise(((resolve, reject) => {
        const req = httpRequest.request(options, (res) => {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => {
                resolve(body);
            });
            res.on('error', (error) => {
                reject(error);
            });
        });
        //console.log('request ' + dataString);
        if (methodName === 'POST') req.write(dataString);
        req.end();
    }));
}

const base64Encode = (encodeData) => {
    const buff = Buffer.from(encodeData);
    return buff.toString('base64');
};

module.exports = { getRequest, makeRequest, base64Encode };
