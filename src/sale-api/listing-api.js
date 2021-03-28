'use strict';
const { callbackRequest } = require('./callbackRequest');

/**
 * Url
 * @type {String}
 */
const URL_EBAY = '/sell/listing/v1_beta/item_draft/';

/**
 * String of url for scope oauth
 * @type {String}
 */
const SCOPE_API = 'https://api.ebay.com/oauth/api_scope/sell.item.draft';

/**
 *
 * @param xEbayCMarketPlaceId {String}
 * @param lang {String}
 * @param params {Object}
 * @returns {Promise<Object>}
 */
const createItemDraft = function (xEbayCMarketPlaceId, lang, params = null) {
    if (!xEbayCMarketPlaceId) throw new Error('Error xEbayCMarketPlaceId is required');
    if (!lang) throw new Error('Error lang is required');
    if (typeof xEbayCMarketPlaceId !== 'string') throw new Error('Expecting String to xEbayCMarketPlaceId');
    if (typeof lang !== 'string') throw new Error('Expecting String to lang');
    if (params) {
        if (typeof params !== 'object') throw new Error('Expecting Object to params');
        if (!params.title) throw new Error('Params title is required');
        this.options.data = JSON.stringify(params);
    }
    this.options.headers = {
        'X-EBAY-C-MARKETPLACE-ID': xEbayCMarketPlaceId,
        'Content-Language': lang
    };
    return callbackRequest(this, `${URL_EBAY}`, 'POST', SCOPE_API);
};


module.exports = {
    createItemDraft
};
