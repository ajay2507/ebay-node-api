# Ebay API Node.js
### They are still in development, they are not ready for use.

Ebay API Client for node js.

The intent is to simplify the request process by handling the tedious logic. It's a thin wrapper around eBay Api.

[![npm version](https://badge.fury.io/js/ebay-node-api.svg)](https://badge.fury.io/js/ebay-node-api)
[![Downloads](https://img.shields.io/npm/dt/ebay-node-api.svg)](https://img.shields.io/npm/dt/ebay-node-api.svg)
[![Build Status](https://travis-ci.org/pajaydev/ebay-node-api.svg?branch=master)](https://travis-ci.org/ajay2507/ebay-node-api)

**Documentation:** [https://pajaydev.github.io/ebay-node-api](https://pajaydev.github.io/ebay-node-api)

## 📒 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Using Express js](#using-express-js)
- [API Details](#api-details)
- [Examples](#examples)
- [Test](#test)
- [Issues](#issues)

## Installation

```shell
npm install ebay-node-api
```

## Usage

```javascript
let eBay = require("ebay-node-api");

let ebay = new eBay({
  clientID: "-- Client APP ID ----",
  env: "SANDBOX", // optional default = 'PRODUCTION'
  headers: {
    // optional
    "X-EBAY-C-MARKETPLACE-ID": "EBAY_GB" // For Great Britain https://www.ebay.co.uk
  }
});
```

For Country Code and Marketplace id [check here](https://developer.ebay.com/DevZone/finding/CallRef/Enums/GlobalIdList.html)

## Documentation

Check out the [Starter Guide](https://pajaydev.github.io/ebay-node-api) documentation with examples to get started.

## Using Express js

You can consume these ebay node api's using [Express](https://expressjs.com/). You can checkout the sample app in [Codesandbox playground](https://codesandbox.io/s/ebaynodeapiusingexpress-xezws?file=/README.md).

## API details

### Without Auth flow

| HTTP Method | Methods              | Description                                                                                                                                                                     | Usage                                                                                 | Offical doc                                                                           |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| GET         | findItemsByKeywords  | Searches for items on eBay by a keyword query.                                                                                                                                  | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L21)  | [doc](https://developer.ebay.com/devzone/finding/callref/finditemsbykeywords.html)    |
| GET         | findCompletedItems   | Searches for items whose listings are completed and are no longer available for sale by category (using categoryId), by keywords (using keywords), or a combination of the two. | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L40)  | [doc](https://developer.ebay.com/devzone/finding/callref/findCompletedItems.html)     |
| GET         | findItemsByProduct   | Searches for items on eBay using specific eBay product values.                                                                                                                  | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L55)  | [doc](https://developer.ebay.com/devzone/finding/callref/finditemsbykeywords.html)    |
| GET         | findItemsAdvanced    | Searches items on eBay by category or keyword or both.                                                                                                                          | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L65)  | [doc](https://developer.ebay.com/devzone/finding/callref/findItemsAdvanced.html)      |
| GET         | getSingleItem        | Retrieves publicly visible details about one listing on eBay.                                                                                                                   | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L40)  | [doc](https://developer.ebay.com/Devzone/shopping/docs/CallRef/GetSingleItem.html)    |
| GET         | getMultipleItems     | Retrieves publicly available data for one or more listings.                                                                                                                     | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/shopping.js#L49) | [doc](https://developer.ebay.com/Devzone/shopping/docs/CallRef/GetMultipleItems.html) |
| GET         | getShippingCosts     | Retrieve estimated shipping cost to ship an active item to a specified destination country and postal code.                                                                     | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L40)  | [doc](https://developer.ebay.com/devzone/shopping/docs/callref/GetShippingCosts.html) |
| GET         | getItemStatus        | Get item status for given item ids.                                                                                                                                             | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/shopping.js#L28) | [doc](https://developer.ebay.com/Devzone/shopping/docs/CallRef/GetItemStatus.html)    |
| GET         | getUserDetails       | Get User Profile.                                                                                                                                                               | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/shopping.js#L19) | [doc](https://developer.ebay.com/Devzone/shopping/docs/CallRef/GetUserProfile.html)   |
| GET         | getDeals(Deprecated) | Get details about the deals across eBay.                                                                                                                                        | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/deals.js)        | [doc](https://developer.ebay.com/devzone/finding/callref/finditemsbykeywords.html)    |

### With Auth flow

| HTTP Method | Methods                   | Description                                                                                                                                                                                            | Usage                                                                                         | Offical doc                                                                                                        |
| ----------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| GET         | searchItems               | Searches for eBay items by various query parameters and retrieves summaries of the items. You can search by keyword, category, eBay product ID (ePID), or GTIN, charity ID, or a combination of these. | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/searchApi.js#L17)        | [doc](https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search)                        |
| GET         | getItem                   | Retrieve the complete details of a specific item.                                                                                                                                                      | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/browseApi.js#L16)        | [doc](https://developer.ebay.com/api-docs/buy/browse/resources/item/methods/getItem)                               |
| GET         | getItemsByItemGroup       | Retrieve all the individual items in a group.                                                                                                                                                          | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/browseApi.js#L55)        | [doc](https://developer.ebay.com/api-docs/buy/browse/resources/item/methods/getItemsByItemGroup#uri.item_group_id) |
| GET         | getItemByLegacyId         | Returns the RESTful item ID, which can then be used in any of other Buy API methods.                                                                                                                   | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L21)          | [doc](https://developer.ebay.com/devzone/finding/callref/finditemsbykeywords.html)                                 |
| GET         | searchByImage             | Returns the RESTful item ID, which can then be used in any of other Buy API methods.                                                                                                                   | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/searchApi.js#L93)        | [doc](https://developer.ebay.com/api-docs/buy/browse/resources/search_by_image/methods/searchByImage)              |
| GET         | getMostWatchedItems       | Retrieves data for items with the highest watch counts for the entire site or for a specific category.                                                                                                 | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/merchandisingApi.js#L15) | [doc](https://developer.ebay.com/DevZone/merchandising/docs/CallRef/getSimilarItems.html)                          |
| GET         | getSimilarItems           | Retrieves recommended similar items for a specified item.                                                                                                                                              | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/searchApi.js#L93)        | [doc](https://developer.ebay.com/api-docs/buy/browse/resources/search_by_image/methods/searchByImage)              |
| GET         | getItemAspectsForCategory | Retrieve an array of aspects that are appropriate for describing items in a specified category.                                                                                                        | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L40)          | [doc](https://developer.ebay.com/api-docs/commerce/taxonomy/resources/methods)                                     |
| GET         | getDefaultCategoryTreeId  | Retrieve the default category tree reference for a specific eBay marketplace.                                                                                                                          | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L40)          | [doc](https://developer.ebay.com/api-docs/commerce/taxonomy/resources/methods)                                     |
| GET         | getCategoryTree           | Retrieve the complete category tree for category id.                                                                                                                                                   | [Example](https://github.com/pajaydev/ebay-node-api/blob/master/demo/finding.js#L40)          | [doc](https://developer.ebay.com/api-docs/commerce/taxonomy/resources/methods)                                     |

## Examples

```javascript
// findItemsBykeyword
ebay
  .findItemsByKeywords({
    keywords: "Garmin nuvi 1300 Automotive GPS Receiver",
    sortOrder: "PricePlusShippingLowest", //https://developer.ebay.com/devzone/finding/callref/extra/fndcmpltditms.rqst.srtordr.html
    pageNumber: 2,
    limit: 10
  })
  .then(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );

// Get Single item listing on eBay
ebay.getSingleItem("153265274986").then(data => {
  console.log(data);
});

// Search Items by Keyword
ebay.getAccessToken().then(data => {
  ebay
    .searchItems({
      keyword: "drone",
      limit: "3"
    })
    .then(data => {
      console.log(data);
      // Data is in format of JSON
      // To check the format of Data, Go to this url (https://developer.ebay.com/api-     docs/buy/browse/resources/item_summary/methods/search#w4-w1-w4-SearchforItemsbyKeyword-0)
    });
});

// perform Advance Search Items by Keyword or category or both
// Search Buy It Now ipad items with one day shipping. (https://developer.ebay.com/DevZone/finding/CallRef/findItemsAdvanced.html)
ebay
  .findItemsAdvanced({
    entriesPerPage: 2,
    keywords: "ipad",
    ExpeditedShippingType: "OneDayShipping",
    ListingType: "AuctionWithBIN"
  })
  .then(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
```

[More Examples](https://pajaydev.github.io/ebay-node-api)

## Test

All test files are present inside test folder. You can run using

```javascript
npm run test
```

## Issues:

If you are facing any issues or missing something, you can create the issues [here](https://github.com/pajaydev/ebay-node-api/issues).

## 👍 Contribution:

Show your ❤️ and support by giving a ⭐. Willing to share your idea or ready to contribute, check [here](https://github.com/pajaydev/ebay-node-api/blob/master/CONTRIBUTING.md)

## 📝 License:

MIT.

## Examples:

I have provided the examples here
https://github.com/pajaydev/ebay-node-api/tree/master/demo.
