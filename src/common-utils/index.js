'use strict';
const currency = require('./currency.json');

const base64Encode = encodeData => {
    const buff = Buffer.from(encodeData);;
    return buff.toString('base64');
};

const isString = (value)=>{
    return typeof value === 'string' || value instanceof String;
}

/**
 * Constructs query param based on some logic to support filter and aspect_filter params.
 * output will be keywords=iphone&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=FreeShippingOnly&itemFilter(1).value=true&itemFilter(2).name=SoldItemsOnly&itemFilter(2).value=true
 * @param {Object} options
 */
function constructAdditionalParams(options){
    let params = '';
    let count = 0;
    let currencyKey = this ? this.options.globalID : 'EBAY-US';

    for (let key in options) {
        if (!options.hasOwnProperty(key)) {
            continue;
        }
        const value = options[key];
        if (['entriesPerPage', 'pageNumber'].includes(key)) {
            params += `paginationInput.${key}=${value}&`;
        }
        else if (['keywords', 'categoryId', 'productId', 'sortOrder', 'storeName'].includes(key)) {
            const encodeParam = encodeURIComponent(value);
            params += `${key}=${encodeParam}&`;
        }
        else if (key === 'affiliate') {
            for (let innerKey in value) {
                params += `${key}.${innerKey}=${value[innerKey]}&`;
            }
        }
        else {
            params += `itemFilter(${count}).name=${key}&`;
            if (!Array.isArray(value)) {
                params += `itemFilter(${count}).value=${value}&`;
            } else {
                for (let innerKey in value) {
                    params += `itemFilter(${count}).value(${innerKey})=${value[innerKey]}&`;
                }
            }
            if(key === "MinPrice" || key === "MaxPrice"){
                params += `itemFilter(${count}).paramName=Currency&
                itemFilter(${count}).paramValue=${currency[currencyKey]}&`;
            }
            
            count++;
        }
        
    }
    // replace extra space
    params = params.replace(/\s/g, '');
    return params.substring(0, params.length - 1);
};

module.exports = {
    setSiteId: function (siteId) {
        this.options.siteId = siteId;
    },
    setHeaders(self, headerObj) {
        self.headers = Object.assign({}, self.headers, headerObj);
    },
    upperCase(data) {
        if (!isString(data)) data = data.toString();
        return data.toUpperCase();
    },
    isString,
    // Returns if object is empty or not
    isEmptyObj(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    },

    encodeURLQuery(url) {
        return encodeURIComponent(url).replace(/'/g, '%27').replace(/"/g, '%22');
    },

    // parses the object and converts it into query params.
    parseObj(options, url = '') {
        if (options) {
            for (let key in options) {
                url = `${url}&${key}=${options[key]}`
            }
        }
        return url;
    },
    base64Encode,
    constructAdditionalParams
};