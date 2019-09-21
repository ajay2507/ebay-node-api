'use strict';

const urlObject = require('./buildURL');
const { getRequest } = require('./request');

const findItemsByKeywords = function (options) {
    if (!options) {
        throw new Error('Keyword is missing, Keyword is required');
    }
    this.options.operationName = 'findItemsByKeywords';
    this.options.param = 'keywords';
    // support only keyword string.
    if (!options.keywords) {
        this.options.name = options;
    }
    else {
        this.options.name = encodeURIComponent(options.keywords);
        this.options.sortOrder = options.sortOrder;
        this.options.pageNumber = options.pageNumber;
        this.options.limit = options.limit;
    }

    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsByKeywordsResponse;

    }, console.error
    );
};

const findItemsByCategory = function (categoryID) {
    if (!categoryID) throw new Error('Category ID is null or invalid');
    this.options.name = categoryID;
    this.options.operationName = 'findItemsByCategory';
    this.options.param = 'categoryId';
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsByCategoryResponse;

    }, console.error
    );
};

/**
 * searches for items whose listings are completed and are no longer available for
 * sale by category (using categoryId), by keywords (using keywords), or a combination of the two.
 * @param {Object} options
 */
const findCompletedItems = function (options) {
    if (!options) throw new Error('Keyword or category ID are required.');
    if (!options.keywords && !options.categoryId) throw new Error('Keyword or category ID are required.');
    if (options.keywords) {
        options.keywords = encodeURIComponent(options.keywords);
    }
    this.options.operationName = 'findCompletedItems';
    this.options.additionalParam = constructAdditionalParams(options);
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).findCompletedItemsResponse;

    }, console.error
    );
};


const getVersion = function () {
    this.options.operationName = 'getVersion';
    const url = urlObject.buildSearchUrl(this.options);
    return getRequest(url).then((data) => {
        return JSON.parse(data).getVersionResponse[0];
    }, console.error
    );
};

/**
 * Searches for items on eBay using specific eBay product values.
 * @param {Object} options
 */
const findItemsByProduct = function (options) {
    if (!options) throw new Error('Please enter the Valid input.');
    if (!options.productId) throw new Error('Product ID is required.');
    this.options.operationName = 'findItemsByProduct';
    this.options.additionalParam = constructAdditionalParams(options);
    let url = urlObject.buildSearchUrl(this.options);
    url = `${url}&productId.@type=ReferenceID`;
    return getRequest(url).then((data) => {
        return JSON.parse(data).findItemsByProductResponse;

    }, console.error
    );
};

const constructAdditionalParams = (options) => {
    let params = '';
    let count = 0;
    for (let key in options) {
        if (options.hasOwnProperty(key)) {
            if (key === 'entriesPerPage' || key === 'pageNumber') {
                params = `${params}paginationInput.${key}=${options[key]}&`;
            }
            else if (key === 'keywords' || key === 'categoryId' || key === 'productId' || key === 'sortOrder') {
                params = `${params}${key}=${options[key]}&`;
            }
            else {
                params = `${params}itemFilter(${count}).name=${key}&
                itemFilter(${count}).value=${options[key]}&`;
                count += 1;
            }
        }
    }
    // replace extra space
    params = params.replace(/\s/g, '');
    return params.substring(0, params.length - 1);
};

module.exports = {
    findItemsByKeywords,
    findItemsByCategory,
    findCompletedItems,
    constructAdditionalParams,
    findItemsByProduct,
    getVersion
};
