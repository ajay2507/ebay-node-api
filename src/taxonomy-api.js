'use strict';
const { makeRequest } = require('./request');
const { upperCase } = require('./common-utils');

/**
  * @method getDefaultCategoryTreeId {Function}
  * @param {String} marketPlaceId = default = EBAY_US
  */

const DEFAULT_CATEGORY_TREE = 'EBAY_US';
const getDefaultCategoryTreeId = function (marketPlaceId) {
    if (!marketPlaceId) marketPlaceId = DEFAULT_CATEGORY_TREE;
    marketPlaceId = upperCase(marketPlaceId);
    if (!this.options.appAccessToken) throw new Error('Missing Access token, Generate access token');
    const auth = 'Bearer ' + this.options.appAccessToken;
    return makeRequest(this.options, `/commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=${marketPlaceId}`, 'GET', auth).then((result) => {
        return JSON.parse(result);
    });
};

/**
  * @method getCategoryTree {Function}
  * @param {Integer} categoryTreeId = default = 0
  */

const getCategoryTree = function (categoryTreeId) {
    if (!categoryTreeId) categoryTreeId = 0;
    if (!this.options.appAccessToken) throw new Error('Missing Access token, Generate access token');
    const auth = 'Bearer ' + this.options.appAccessToken;
    return makeRequest(this.options, `/commerce/taxonomy/v1/category_tree/${categoryTreeId}`, 'GET', auth).then((result) => {
        return JSON.parse(result);
    });
};

/**
  * @method getCategorySubtree {Function}
  * @param {String} categoryId = identifier of the category at the top of the subtree.
  * @param {String} categoryTreeId = The unique identifier of the eBay category tree from which a category subtree is being requested.
  */

const getCategorySubtree = function (categoryTreeId, categoryId) {
    if (!categoryTreeId) categoryTreeId = 0;
    if (!categoryId) throw new Error('Missing Categor id \n Refer documentation here https://developer.ebay.com/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategorySubtree#h2-samples');
    if (!this.options.appAccessToken) throw new Error('Missing Access token, Generate access token');
    const auth = 'Bearer ' + this.options.appAccessToken;
    return makeRequest(this.options, `/commerce/taxonomy/v1/category_tree/${categoryTreeId}/get_category_subtree?category_id=${categoryId}`, 'GET', auth).then((result) => {
        return JSON.parse(result);
    });
};

/**
  * @method getCategorySuggestions {Function}
  * @param {String} categoryTreeId = identifier of the category at the top of the subtree.
  * @param {String} keyword = input string to get CategorySuggestions.
  */

const getCategorySuggestions = function (categoryTreeId, keyword) {
    if (!categoryTreeId) categoryTreeId = 0;
    if (!keyword) throw new Error('Missing keyword \n Refer documentation here https://developer.ebay.com/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategorySuggestions');
    if (!this.options.appAccessToken) throw new Error('Missing Access token, Generate access token');
    const auth = 'Bearer ' + this.options.appAccessToken;
    return makeRequest(this.options, `/commerce/taxonomy/v1/category_tree/${categoryTreeId}/get_category_suggestions?q=${keyword}`, 'GET', auth).then((result) => {
        return JSON.parse(result);
    });
};

/**
  * @method getItemAspectsForCategory {Function}
  * @param {String} categoryId = identifier of the category at the top of the subtree.
  * @param {String} keyword = input string to get CategorySuggestions.
  */
const getItemAspectsForCategory = function (categoryTreeId, categoryId) {
    if (!categoryTreeId) categoryTreeId = 0;
    if (!categoryId) throw new Error('Missing Category id \n Refer documentation here https://developer.ebay.com/api-docs/commerce/taxonomy/resources/category_tree/methods/getItemAspectsForCategory#h2-samples');
    if (!this.options.appAccessToken) throw new Error('Missing Access token, Generate access token');
    const auth = 'Bearer ' + this.options.appAccessToken;
    return makeRequest(this.options, `/commerce/taxonomy/v1/category_tree/${categoryTreeId}/get_item_aspects_for_category?category_id=${categoryId}`, 'GET', auth).then((result) => {
        return JSON.parse(result);
    });
};

module.exports = {
    getDefaultCategoryTreeId,
    getCategoryTree,
    getCategorySubtree,
    getCategorySuggestions,
    getItemAspectsForCategory
};
