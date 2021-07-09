'use strict';

const { getRequest } = require('./request');
const urlObject = require('./buildURL');
const makeString = require('make-string');

const getAllCategories = function (categoryID) {
    const requestURL = `${urlObject.buildShoppingUrl(this.options, 'GetCategoryInfo')}&${stringifyUrl({ 'CategoryID': categoryID || -1 })}`;
    return getRequest(requestURL).then((data) => {
        return JSON.parse(data);
    }, console.error // eslint-disable-line no-console
    );
};

const getUserDetails = function (input) {
    if (!input || typeof input !== 'object') throw new Error('invalid_request_error -> Invalid input');
    if (!input.userId) throw new Error('invalid_request_error -> userId is null or invalid');
    input.includeSelector = input.includeSelector ? input.includeSelector : 'Details';
    const requestUrl = `${urlObject.buildShoppingUrl(this.options, 'GetUserProfile')}&${stringifyUrl(input)}`;
    return getRequest(requestUrl).then((data) => {
        return JSON.parse(data);
    }, console.error // eslint-disable-line no-console
    );
};

const getItemStatus = function (itemIds) {
    if (!itemIds) throw new Error('invalid_request_error -> Item ID is null or invalid');
    const paramsObj = {
        'ItemID': makeString(itemIds, { braces: 'false', quotes: 'no' })
    };
    const requestUrl = `${urlObject.buildShoppingUrl(this.options, 'GetItemStatus')}&${stringifyUrl(paramsObj)}`;
    return getRequest(requestUrl).then((data) => {
        return JSON.parse(data);
    }, console.error // eslint-disable-line no-console
    );
};

const getShippingCosts = function (input) {
    if (!input || typeof input !== 'object') throw new Error('invalid_request_error -> Invalid input');
    if (!input.itemId) throw new Error('invalid_request_error -> Item id is null or invalid');
    const url = `${urlObject.buildShoppingUrl(this.options, 'GetShippingCosts')}&${stringifyUrl(input)} `;
    return getRequest(url).then((data) => {
        return JSON.parse(data);
    }, console.error // eslint-disable-line no-console
    );
};

/**
  * @method getMultipleItems {Function}
  * Retrieves publicly visible details about for one or more listings on eBay.
  * @param {Object} options (required)
  */
const getMultipleItems = function (options) {
    if (!options || !options.itemId) throw new Error('invalid_request_error -> Item ID is null or invalid');
    const requestUrl = `${urlObject.buildShoppingUrl(this.options, 'GetMultipleItems')}&${stringifyUrl({ 'itemId': makeString(options.itemId, { braces: 'false', quotes: 'no' }) })}`;
    return getRequest(requestUrl).then((data) => {
        return JSON.parse(data);
    }, console.error // eslint-disable-line no-console
    );
};


/**
  * @method getSingleItem {Function}
  * Retrieves publicly visible details about one listing on eBay.
  * @param {String} itemId (required)
  */
const getSingleItem = function (itemId) {
    if (!input || (typeof input !== 'object' && typeof input !== 'string'))
        throw new Error('invalid_request_error -> Invalid input');
    // To preserve backwards compatibility
    if (typeof input === 'string') {
        input = { ItemID: input };
    }
    const requestUrl = `${urlObject.buildShoppingUrl(
        this.options,
        'GetSingleItem'
    )}&${stringifyUrl(input)} `;
    return getRequest(requestUrl).then(
        (data) => {
            return JSON.parse(data);
        },
        console.error // eslint-disable-line no-console
    );
};

const stringifyUrl = (obj) => {
    return makeString(obj, { braces: 'false', assignment: '=', quotes: 'no', seperator: '&' });
};

module.exports = {
    getAllCategories,
    getUserDetails,
    getItemStatus,
    getShippingCosts,
    getSingleItem,
    getMultipleItems
};
