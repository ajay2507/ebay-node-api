'use strict';
const makeString = require('make-string');
const { callbackRequest } = require('./callbackRequest');

/**
 * Url inventory Api
 * @type {String}
 */
const URL_EBAY = '/sell/inventory/v1';

/**
 * String of url for scope oauth
 * @type {String}
 */
const SCOPE_API = 'https://api.ebay.com/oauth/api_scope/sell.inventory';

/**
 * String of url for scope oauth readonly
 * @type {String}
 */
const SCOPE_READ_ONLY = 'https://api.ebay.com/oauth/api_scope/sell.inventory.readonly';

/**
 * This call creates a new inventory item record or updates an existing inventory item record.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/createOrReplaceInventoryItem
 * @param {String} sku
 * @param {String} lang
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const createOrReplaceInventoryItem = function (sku, lang, params = null) {
    if (!sku) throw new Error('Error sku is required');
    if (!lang) throw new Error('Error lang is required');
    if (typeof sku !== 'string') throw new Error('Expecting String to sku');
    if (typeof lang !== 'string') throw new Error('Expecting String to lang');
    if (params) {
        if (typeof params !== 'object') throw new Error('Expecting object to params');
        this.options.data = JSON.stringify(params);
    }
    this.options.headers = {'Content-Language': lang};
    return callbackRequest(this, `${URL_EBAY}/inventory_item/${encodeURIComponent(sku)}`, 'PUT', SCOPE_API);
};

/**
 * This call retrieves the inventory item record for a given SKU.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/getInventoryItem
 * @param {String} sku
 * @returns {Promise<Object>}
 */
const getInventoryItem = function (sku) {
    if (!sku) throw new Error('Error sku is required');
    if (typeof sku !== 'string') throw new Error('Expecting string to sku');
    return callbackRequest(this, `${URL_EBAY}/inventory_item/${encodeURIComponent(sku)}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call retrieves all inventory item records defined for the seller's account.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/getInventoryItems
 * @param {String} limit
 * @param {String} offset
 * @returns {Promise<Object>}
 */
const getInventoryItems = function (limit = null, offset = null) {
    let queryString = '';
    if (limit || offset) {
        const filter = {};
        if (limit) filter.limit = limit;
        if (offset) filter.offset = offset;
        queryString = makeString(filter, { quotes: 'no', braces: 'false', seperator: '&', assignment: '=' });
    }
    return callbackRequest(this, `${URL_EBAY}/inventory_item?${queryString}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call is used to delete an inventory item record associated with a specified SKU.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/deleteInventoryItem
 * @param {String} sku
 * @returns {Promise<Object>}
 */
const deleteInventoryItem = function (sku) {
    if (!sku) throw new Error('Error sku is required');
    if (typeof sku !== 'string') throw new Error('Expecting string to sku');
    return callbackRequest(this, `${URL_EBAY}/inventory_item/${encodeURIComponent(sku)}`, 'DELETE', SCOPE_API);
};

/**
 * This call is used by the seller to update the total ship-to-home quantity of an inventory item and/or
 * to update the price and/or quantity of that same inventory item in an actual live offer.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/bulkUpdatePriceQuantity
 * @param {Object} params
 * @param {Object[]} params.requests
 * @returns {Promise<Object>}
 */
const bulkUpdatePriceQuantity = function (params) {
    if (!params) throw new Error('INVALID_REQUEST_PARAMS --> Missing or invalid input parameter');
    if (typeof params !== 'object') throw new Error('Expecting object to params');
    if (!params.requests) throw new Error('Error requests is required');
    this.options.data = JSON.stringify(params);
    return callbackRequest(this, `${URL_EBAY}/bulk_update_price_quantity`, 'POST', SCOPE_API);
};

/**
 * This call is used by the seller to create and/or update up to 25 inventory item records.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/bulkCreateOrReplaceInventoryItem
 * @param {Object} params
 * @param {Object[]} params.requests
 * @returns {Promise<Object>}
 */
const bulkCreateOrReplaceInventoryItem = function (params) {
    if (!params) throw new Error('INVALID_REQUEST_PARAMS --> Missing or invalid input parameter');
    if (typeof params !== 'object') throw new Error('Expecting object to params');
    if (!params.requests) throw new Error('Error requests is required');
    this.options.data = JSON.stringify(params);
    return callbackRequest(this, `${URL_EBAY}/bulk_create_or_replace_inventory_item`, 'POST', SCOPE_API);
};

/**
 * This call is used by the seller to retrieve up to 25 inventory item records.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/bulkGetInventoryItem
 * @param {String} sku
 * @returns {Promise<Object>}
 */
const bulkGetInventoryItem = function (sku = null) {
    if (sku) {
        if (typeof sku !== 'string') throw new Error('Expecting String to sku');
        this.options.data = JSON.stringify({'requests': {'sky': encodeURIComponent(sku)}});
    }
    return callbackRequest(this, `${URL_EBAY}/bulk_get_inventory_item`, 'POST', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call is used by the seller to create or replace a list of products that are compatible with the inventory item.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/product_compatibility/methods/createOrReplaceProductCompatibility
 * @param {String} sku
 * @param {Object} params
 * @param {String} lang
 * @returns {Promise<Object>}
 */
const createOrReplaceProductCompatibility = function (sku, params, lang) {
    if (!sku) throw new Error('Error sku is required');
    if (!lang) throw new Error('Error lang is required');
    if (typeof sku !== 'string') throw new Error('Expecting String to sku');
    if (typeof lang !== 'string') throw new Error('Expecting String to lang');
    if (typeof params !== 'object') throw new Error('Expecting object (https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/product_compatibility/methods/createOrReplaceProductCompatibility)');
    this.options.data = JSON.stringify(params);
    this.options.headers = {'Content-Language': lang};
    return callbackRequest(this, `${URL_EBAY}/inventory_item/${encodeURIComponent(sku)}/product_compatibility`, 'PUT', SCOPE_API);
};

/**
 * This call is used by the seller to retrieve the list of products that are compatible with the inventory item.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/product_compatibility/methods/getProductCompatibility
 * @param {String} sku
 * @returns {Promise<Object>}
 */
const getProductCompatibility = function (sku) {
    if (!sku) throw new Error('Error sku is required');
    if (typeof sku !== 'string') throw new Error('Expecting String to sku');
    return callbackRequest(this, `${URL_EBAY}/inventory_item/${encodeURIComponent(sku)}/product_compatibility`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call is used by the seller to delete the list of products that are compatible with the inventory item.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/product_compatibility/methods/deleteProductCompatibility
 * @param {String} sku
 * @returns {Promise<Object>}
 */
const deleteProductCompatibility = function (sku) {
    if (!sku) throw new Error('Error sku is required');
    if (typeof sku !== 'string') throw new Error('Expecting String to sku');
    return callbackRequest(this, `${URL_EBAY}/inventory_item/${encodeURIComponent(sku)}/product_compatibility`, 'DELETE', SCOPE_API);
};

/**
 * This call creates an offer for a specific product on a specific eBay marketplace
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/createOffer
 * @param {String} lang
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const createOffer = function (lang, params) {
    if (!lang) throw new Error('Error lang is required');
    if (typeof lang !== 'string') throw new Error('Expecting String to lang');
    if (typeof params !== 'object') throw new Error('Expecting object to params');
    this.options.data = JSON.stringify(params);
    this.options.headers = {'Content-Language': lang};
    return callbackRequest(this, `${URL_EBAY}/offer`, 'POST', SCOPE_API);
};

/**
 * This call retrieves all existing offers for the specified SKU value.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/updateOffer
 * @param {String} offerId
 * @param {String} lang
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const updateOffer = function (offerId, lang, params = null) {
    if (!lang) throw new Error('Error lang is required');
    if (typeof offerId !== 'string') throw new Error('Expecting String to offerId');
    if (typeof lang !== 'string') throw new Error('Expecting String to lang');
    if (params) {
        if (typeof params !== 'object') throw new Error('Expecting object to params');
        this.options.data = JSON.stringify(params);
    }
    this.options.headers = {'Content-Language': lang};
    return callbackRequest(this, `${URL_EBAY}/offer/${encodeURIComponent(offerId)}`, 'PUT', SCOPE_API);
};

/**
 * This call retrieves all existing offers for the specified SKU value.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/getOffers#uri.marketplace_id
 * @param {String} sku
 * @param {MarketplaceEnum} marketplaceId
 * @param {FormatTypeEnum} format
 * @param {String} limit
 * @param {String} offset
 * @returns {Promise<Object>}
 */
const getOffers = function (sku, marketplaceId = null, format = null, limit = null, offset = null) {
    if (!sku) throw new Error('Error sku is required');
    if (typeof sku !== 'string') throw new Error('Expecting String to sku');
    const filter = {};
    filter.sku = sku;
    if (marketplaceId) filter.marketplaceId = marketplaceId;
    if (format) filter.format = format;
    if (limit) filter.limit = limit;
    if (offset) filter.offset = offset;
    const queryString = makeString(filter, { quotes: 'no', braces: 'false', seperator: '&', assignment: '=' });
    return callbackRequest(this, `${URL_EBAY}/offer?${queryString}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call retrieves a specific offer.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/getOffer
 * @param {String} offerId The unique identifier of the offer that is to be retrieved.
 * @returns {Promise<Object>}
 */
const getOffer = function (offerId) {
    if (!offerId) throw new Error('Error offerId is required');
    if (typeof offerId !== 'string') throw new Error('Expecting String of offerId');
    return callbackRequest(this, `${URL_EBAY}/offer/${encodeURIComponent(offerId)}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call deletes a specific published or unpublished offer.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/deleteOffer
 * @param {String} offerId
 * @returns {Promise<Object>}
 */
const deleteOffer = function (offerId) {
    if (!offerId) throw new Error('Error offerId is required');
    if (typeof offerId !== 'string') throw new Error('Expecting String of offerId');
    return callbackRequest(this, `${URL_EBAY}/offer/${encodeURIComponent(offerId)}`, 'DELETE', SCOPE_API);
};

/**
 * This call is used to convert an unpublished offer into a published offer, or live eBay listing.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/publishOffer
 * @param {String} offerId
 * @returns {Promise<Object>}
 */
const publishOffer = function (offerId) {
    if (!offerId) throw new Error('Error offerId is required');
    if (typeof offerId !== 'string') throw new Error('Expecting String of offerId');
    return callbackRequest(this, `${URL_EBAY}/offer/${encodeURIComponent(offerId)}`, 'POST', SCOPE_API);
};

/**
 * This call is used to convert all unpublished offers associated with an inventory item group into an active, multiple-variation listing.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/publishOfferByInventoryItemGroup
 * @param {String} inventoryItemGroupKey
 * @param {MarketplaceEnum[]} marketplaceId
 * @returns {Promise<Object>}
 */
const publishOfferByInventoryItemGroup = function (inventoryItemGroupKey, marketplaceId) {
    if (!inventoryItemGroupKey) throw new Error('Error inventoryItemGroupKey is required');
    if (!marketplaceId) throw new Error('Error marketplaceId is required');
    if (typeof inventoryItemGroupKey !== 'string') throw new Error('Expecting String of inventoryItemGroupKey');
    if (!Array.isArray(marketplaceId)) throw new Error('Expecting array (Item marketplace_id)');
    const data = {};
    const requests = [];
    marketplaceId.forEach((e) => {
        requests.push({'MarketplaceEnum': e});
    });
    data.inventoryItemGroupKey = inventoryItemGroupKey;
    data.marketplaceId = requests;
    this.options.data = JSON.stringify(data);
    return callbackRequest(this, `${URL_EBAY}/offer/publish_by_inventory_item_group/`, 'POST', SCOPE_API);
};

/**
 * This call is used to end a multiple-variation eBay listing that is associated with the specified inventory item group. This call only ends multiple-variation eBay listing associated with the inventory item group but does not delete the inventory item group object. Similarly, this call also does not delete any of the offers associated with the inventory item group, but instead all of these offers go into the unpublished state. If the seller wanted to relist the multiple-variation eBay listing, they could use the publishOfferByInventoryItemGroup method.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/withdrawOfferByInventoryItemGroup
 * @param {String} inventoryItemGroupKey
 * @param {MarketplaceEnum[]} marketplaceId
 * @returns {Promise<Object>}
 */
const withdrawOfferByInventoryItemGroup = function (inventoryItemGroupKey = null, marketplaceId = []) {
    const data = {};
    if (inventoryItemGroupKey) {
        if (typeof inventoryItemGroupKey !== 'string') throw new Error('Expecting String of inventoryItemGroupKey');
        data.inventoryItemGroupKey = inventoryItemGroupKey;
    }
    if (marketplaceId.length > 0) {
        if (!Array.isArray(marketplaceId)) throw new Error('Expecting array (Item marketplace_id)');
        const requests = [];
        marketplaceId.forEach((e) => {
            requests.push({'MarketplaceEnum': e});
        });
        data.marketplaceId = requests;
    }
    this.options.data = JSON.stringify(data);
    return callbackRequest(this, `${URL_EBAY}/offer/withdraw_by_inventory_item_group`, 'POST', SCOPE_API);
};

/**
 * This call is used to retrieve the expected listing fees for up to 250 unpublished offers. An array of one or more offerId values are passed in under the offers container.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/getListingFees
 * @param {String[]} offerIds
 * @returns {Promise<Object>}
 */
const getListingFees = function (offerIds) {
    if (!offerIds) throw new Error('Error offers is required');
    if (!Array.isArray(offerIds)) throw new Error('Expecting array of offers.offerId');
    const data = {};
    const requests = [];
    offerIds.forEach((e) => {
        requests.push({'offerId': e});
    });
    data.offers = requests;
    this.options.data = JSON.stringify(data);
    return callbackRequest(this, `${URL_EBAY}/offer/get_listing_fees`, 'POST', SCOPE_API, SCOPE_READ_ONLY,  true);
};

/**
 * This call is used to retrieve the expected listing fees for one to 250 unpublished offers.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/bulkCreateOffer
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const bulkCreateOffer = function (params) {
    if (typeof params !== 'object') throw new Error('Expecting object to params');
    this.options.data = JSON.stringify(params);
    return callbackRequest(this, `${URL_EBAY}/bulk_create_offer`, 'POST', SCOPE_API);
};

/**
 * This call is used to convert unpublished offers (up to 25) into published offers, or live eBay listings. The unique identifier (offerId) of each offer to publlish is passed into the request payload. It is possible that some unpublished offers will be successfully created into eBay listings, but others may fail. The response payload will show the results for each offerId value that is passed into the request payload. The errors and warnings containers will be returned for an offer that had one or more issues being published.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/bulkPublishOffer
 * @param {String[]} offerIds
 * @returns {Promise<Object>}
 */
const bulkPublishOffer = function (offerIds) {
    if (Array.isArray(offerIds)) throw new Error('Expecting array of offerId');
    if (offerIds.length > 25) throw new Error('Error max 25 offerId');
    const data = {};
    const requests = [];
    offerIds.forEach((e) => {
        requests.push({'offerId': e});
    });
    data.requests = requests;
    this.options.data = JSON.stringify(data);
    return callbackRequest(this, `${URL_EBAY}/bulk_publish_offer`, 'POST', SCOPE_API);
};

/**
 * This call is used to end a single-variation listing that is associated with the specified offer. This call is used in place of the deleteOffer call if the seller only wants to end the listing associated with the offer but does not want to delete the offer object. With this call, the offer object remains, but it goes into the unpublished state, and will require a publishOffer call to relist the offer.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/offer/methods/withdrawOffer
 * @param {String} offerIds
 * @returns {Promise<Object>}
 */
const withdrawOffer = function (offerId) {
    if (!offerId) throw new Error('Error offerId is required');
    if (typeof offerId !== 'string') throw  new Error('Expecting String of offerId');
    return callbackRequest(this, `${URL_EBAY}/offer/${encodeURIComponent(offerId)}/withdraw`, 'POST', SCOPE_API);
};

/**
 * This call creates a new inventory item group or updates an existing inventory item group. It is up to sellers whether they want to create a complete inventory item group record right from the start, or sellers can provide only some information with the initial createOrReplaceInventoryItemGroup call, and then make one or more additional createOrReplaceInventoryItemGroup calls to complete the inventory item group record. Upon first creating an inventory item group record, the only required elements are the inventoryItemGroupKey identifier in the call URI, and the members of the inventory item group specified through the variantSKUs array in the request payload.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item_group/methods/createOrReplaceInventoryItemGroup
 * @param {String} inventoryItemGroupKey
 * @param {String} lang
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const createOrReplaceInventoryItemGroup = function (inventoryItemGroupKey, lang, params) {
    if (!lang) throw new Error('Error lang is required');
    if (typeof lang !== 'string') throw new Error('Expecting String to lang');
    this.options.headers = {'Content-Language': lang};
    if (!inventoryItemGroupKey) throw new Error('Error inventoryItemGroupKey is required');
    if (typeof inventoryItemGroupKey !== 'string') throw  new Error('Expecting String of inventoryItemGroupKey');
    if (typeof params !== 'object') throw new Error('Expecting object');
    this.options.data = JSON.stringify(params);
    return callbackRequest(this, `${URL_EBAY}/inventory_item_group/${encodeURIComponent(inventoryItemGroupKey)}`, 'PUT', SCOPE_API);
};

/**
 * This call retrieves the inventory item group for a given inventoryItemGroupKey value. The inventoryItemGroupKey value is passed in at the end of the call URI.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item_group/methods/getInventoryItemGroup
 * @param {String} inventoryItemGroupKey
 * @returns {Promise<Object>}
 */
const getInventoryItemGroup = function (inventoryItemGroupKey) {
    if (!inventoryItemGroupKey) throw new Error('Error inventoryItemGroupKey is required');
    if (typeof inventoryItemGroupKey !== 'string') throw new Error('Expecting String to inventoryItemGroupKey');
    return callbackRequest(this, `${URL_EBAY}/inventory_item_group/${encodeURIComponent(inventoryItemGroupKey)}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call deletes the inventory item group for a given inventoryItemGroupKey value.
 * @param {String} inventoryItemGroupKey
 * @returns {Promise<{String}>}
 */
const deleteInventoryItemGroup = function (inventoryItemGroupKey) {
    if (!inventoryItemGroupKey) throw new Error('Error inventoryItemGroupKey is required');
    if (typeof inventoryItemGroupKey !== 'string') throw new Error('Expecting String to inventoryItemGroupKey');
    return callbackRequest(this, `${URL_EBAY}/inventory_item_group/${encodeURIComponent(inventoryItemGroupKey)}`, 'DELETE', SCOPE_API);
};

/**
 * This call is used to convert existing eBay Listings to the corresponding Inventory API objects.
 * If an eBay listing is successfully migrated to the Inventory API model, new Inventory Location, Inventory Item,
 * and Offer objects are created. For a multiple-variation listing that is successfully migrated,
 * in addition to the three new Inventory API objects just mentioned, an Inventory Item Group object will also be created.
 * If the eBay listing is a motor vehicle part or accessory listing with a compatible vehicle list (ItemCompatibilityList container
 * in Trading API's Add/Revise/Relist/Verify calls), a Product Compatibility object will be created.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/listing/methods/bulkMigrateListing
 * @param {String[]} listingIds
 * @returns {Promise<Object>}
 */
const bulkMigrateListing = function (listingIds) {
    if (Array.isArray(listingIds)) throw new Error('Expecting array of offerId');
    if (listingIds.length > 25) throw new Error('Error max 25 offerId');
    const requests = [];
    listingIds.forEach((e) => {
        requests.push({'listingId': e});
    });
    this.options.data = JSON.stringify({'requests': requests});
    return callbackRequest(this, `${URL_EBAY}/bulk_migrate_listing`, 'POST', SCOPE_API);
};

/**
 * Use this call to create a new inventory location. In order to create and publish an offer (and create an eBay listing), a seller must have at least one inventory location, as every offer must be associated with a location.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/createInventoryLocation
 * @param {String} merchantLocationKey
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const createInventoryLocation = function (merchantLocationKey, params) {
    if (!merchantLocationKey) throw new Error('Error merchantLocationKey is required');
    if (typeof merchantLocationKey !== 'string') throw new Error('Expecting String of merchantLocationKey');
    if (!params) throw new Error('Error params is required');
    if (typeof params !== 'object') throw new Error('Expecting object');
    this.options.data = JSON.stringify(params);
    return callbackRequest(this, `${URL_EBAY}/location/${merchantLocationKey}`, 'POST', SCOPE_API);
};

/**
 * This call deletes the inventory location that is specified in the merchantLocationKey path parameter. Note that deleting a location will not affect any active eBay listings associated with the deleted location, but the seller will not be able modify the offers associated with the inventory location once it is deleted.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/deleteInventoryLocation
 * @param merchantLocationKey {String}
 * @returns {Promise<Object>}
 */
const deleteInventoryLocation = function (merchantLocationKey) {
    if (!merchantLocationKey) throw new Error('Error merchantLocationKey is required');
    if (typeof merchantLocationKey !== 'string') throw new Error('Expecting String of merchantLocationKey');
    return callbackRequest(this, `${URL_EBAY}/bulk_migrate_listing/${merchantLocationKey}`, 'DELETE', SCOPE_API);
};

/**
 * This call disables the inventory location that is specified in the merchantLocationKey path parameter. Sellers can not load/modify inventory to disabled inventory locations. Note that disabling an inventory location will not affect any active eBay listings associated with the disabled location, but the seller will not be able modify the offers associated with a disabled inventory location.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/disableInventoryLocation
 * @param merchantLocationKey {String}
 * @returns {Promise<Object>}
 */
const disableInventoryLocation = function (merchantLocationKey) {
    if (!merchantLocationKey) throw new Error('Error merchantLocationKey is required');
    if (typeof merchantLocationKey !== 'string') throw new Error('Expecting String of merchantLocationKey');
    return callbackRequest(this, `${URL_EBAY}/location/${merchantLocationKey}/disable`, 'POST', SCOPE_API);
};

/**
 * This call enables a disabled inventory location that is specified in the merchantLocationKey path parameter. Once a disabled inventory location is enabled, sellers can start loading/modifying inventory to that inventory location.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/enableInventoryLocation
 * @param {String} merchantLocationKey
 * @returns {Promise<Object>}
 */
const enableInventoryLocation = function (merchantLocationKey) {
    if (!merchantLocationKey) throw new Error('Error merchantLocationKey is required');
    if (typeof merchantLocationKey !== 'string') throw new Error('Expecting String of merchantLocationKey');
    return callbackRequest(this, `${URL_EBAY}/location/${merchantLocationKey}/enable`, 'POST', SCOPE_API);
};

/**
 * This call retrieves all defined details of the inventory location that is specified by the merchantLocationKey path parameter.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/getInventoryLocation
 * @param {String} merchantLocationKey
 * @returns {Promise<Object>}
 */
const getInventoryLocation = function (merchantLocationKey) {
    if (!merchantLocationKey) throw new Error('Error merchantLocationKey is required');
    if (typeof merchantLocationKey !== 'string') throw new Error('Expecting String of merchantLocationKey');
    return callbackRequest(this, `${URL_EBAY}/location/${merchantLocationKey}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * This call retrieves all defined details for every inventory location associated with the seller's account. There are no required parameters for this call and no request payload. However, there are two optional query parameters, limit and offset. The limit query parameter sets the maximum number of inventory locations returned on one page of data, and the offset query parameter specifies the page of data to return. These query parameters are discussed more in the URI parameters table below.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/getInventoryLocations
 * @param {String} offset
 * @param {String} limit
 * @returns {Promise<Object>}
 */
const getInventoryLocations = function (offset = null, limit = null) {
    let queryString = '';
    if (offset || limit) {
        const filters = {};
        if (offset) filters.offset = offset;
        if (limit) filters.limit = limit;
        queryString = makeString(filters, { quotes: 'no', braces: 'false', seperator: '&', assignment: '=' });
    }
    return callbackRequest(this, `${URL_EBAY}/location?${queryString}`, 'GET', SCOPE_API, SCOPE_READ_ONLY, true);
};

/**
 * Use this call to update non-physical location details for an existing inventory location. Specify the inventory location you want to update using the merchantLocationKey path parameter.
 * @link https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/updateInventoryLocation
 * @param {String} merchantLocationKey
 * @param {Object} params
 * @returns {Promise<Object>}
 */
const updateInventoryLocation = function (merchantLocationKey, params) {
    if (!params) throw new Error('Error params is required');
    if (typeof params !== 'object') throw new Error('Expecting object in params');
    if (!merchantLocationKey) throw new Error('Error merchantLocationKey is required');
    if (typeof merchantLocationKey !== 'string') throw new Error('Expecting String of merchantLocationKey');
    return callbackRequest(this, `${URL_EBAY}/location/${merchantLocationKey}/update_location_details`, 'POST', SCOPE_API);
};

module.exports = {
    createOrReplaceInventoryItem,
    getInventoryItem,
    getInventoryItems,
    deleteInventoryItem,
    bulkUpdatePriceQuantity,
    bulkCreateOrReplaceInventoryItem,
    bulkGetInventoryItem,
    createOrReplaceProductCompatibility,
    getProductCompatibility,
    deleteProductCompatibility,
    createOffer,
    updateOffer,
    getOffers,
    getOffer,
    deleteOffer,
    publishOffer,
    publishOfferByInventoryItemGroup,
    withdrawOfferByInventoryItemGroup,
    getListingFees,
    bulkCreateOffer,
    bulkPublishOffer,
    withdrawOffer,
    createOrReplaceInventoryItemGroup,
    getInventoryItemGroup,
    deleteInventoryItemGroup,
    bulkMigrateListing,
    createInventoryLocation,
    deleteInventoryLocation,
    disableInventoryLocation,
    enableInventoryLocation,
    getInventoryLocation,
    getInventoryLocations,
    updateInventoryLocation
};
