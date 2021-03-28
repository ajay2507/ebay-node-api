'use strict';
const qs = require('querystring');
const ebayBuyApi = require('./buy-api');
const shoppingApi = require('./shopping');
const taxonomyApi = require('./taxonomy-api');
const ebayFindingApi = require('./finding');
const dealsApi = require('./deals');
const commonUtils = require('./common-utils');
const merchandisingApi = require('./merchandising');
const itemApi = require('./item');
const inventoryApi = require('./sale-api/inventory-api');
const {
    getAccessToken,
    getUserAuthorizationUrl,
    getUserTokenByCode,
    getUserTokenByRefresh,
    setAppAccessToken,
    setUserAccessToken
} = require('./credentials');
const {
    PROD_OAUTHENVIRONMENT_WEBENDPOINT,
    SANDBOX_OAUTHENVIRONMENT_WEBENDPOINT,
    PROD_BASE_URL,
    SANDBOX_BASE_URL,
    BASE_SANDBX_SVC_URL,
    BASE_SVC_URL
} = require('./constants');
const PROD_ENV = 'PROD';
const SANDBOX_ENV = 'SANDBOX';


/**
 * Creates a eBay instance.
 *
 * @param {Object} options configuration options
 * @param {String} options.clientID Client Id/App id
 * @param {String} options.clientSecret eBay Secret/Cert ID - required for user access tokens
 * @param {String} options.env Environment, defaults to PROD
 * @param {String} options.headers HTTP request headers
 * @constructor
 * @public
 */
function Ebay(options) {
    if (!options) throw new Error('Options is missing, please provide the input');
    if (!options.clientID) throw Error('Client ID is Missing\ncheck documentation to get Client ID http://developer.ebay.com/DevZone/account/');
    if (!(this instanceof Ebay)) return new Ebay(options);
    if (!options.env) options.env = PROD_ENV;
    options.baseUrl = PROD_BASE_URL;
    options.baseSvcUrl = BASE_SVC_URL;
    options.oauthEndpoint = PROD_OAUTHENVIRONMENT_WEBENDPOINT;
    // handle sandbox env.
    if (options.env === SANDBOX_ENV) {
        options.baseUrl = SANDBOX_BASE_URL;
        options.baseSvcUrl = BASE_SANDBX_SVC_URL;
        options.oauthEndpoint = SANDBOX_OAUTHENVIRONMENT_WEBENDPOINT;
    }
    this.options = options;
    commonUtils.setHeaders(this, options.headers);
    this.options.globalID = options.countryCode || 'EBAY-US';
    this.options.siteId = options.siteId || '0';
}

Ebay.prototype = {
    getAccessToken,
    getUserAuthorizationUrl,
    getUserTokenByCode,
    getUserTokenByRefresh,
    setUserAccessToken,
    setAppAccessToken,
    ...inventoryApi,
    ...merchandisingApi,
    ...commonUtils,
    ...shoppingApi,
    ...ebayBuyApi,
    ...taxonomyApi,
    ...ebayFindingApi,
    ...dealsApi,
    ...itemApi
};

module.exports = Ebay;
