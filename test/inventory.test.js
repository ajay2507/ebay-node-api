'use strict';

const expect = require('chai').expect;
const nock = require('nock');
const Ebay = require('../src/index');

describe('test inventory api', () => {
    describe('test inventory api calls', () => {
        it('test createOrReplaceInventoryItem method', () => {
            const ebay = new Ebay({
                clientID: 'ClientId'
            });
            const ebay1 = new Ebay({
                clientID: 'clientId',
                clientSecret: 'clientSecret',
                appAccessToken: '1234',
                body: {
                    grant_type: 'client_credentials',
                    scope: '12345'
                }
            });
            expect(() => { ebay.createOrReplaceInventoryItem(); }).to.throw('Error sku is required');
            expect(() => { ebay.createOrReplaceInventoryItem('1234'); }).to.throw('Error lang is required');
            expect(() => { ebay.createOrReplaceInventoryItem(1234, '1234'); }).to.throw('Expecting String to sku');
            expect(() => { ebay.createOrReplaceInventoryItem('1234', 1234); }).to.throw('Expecting String to lang');
            expect(() => { ebay.createOrReplaceInventoryItem('1234', '1234', 'object'); }).to.throw('Expecting object to params');
            expect(() => { ebay.createOrReplaceInventoryItem('1234', '1234', {'1234': '1234'}); }).to.throw('INVALID_AUTH_TOKEN --> Missing Access token, generate access token');
            ebay.options.appAccessToken = '1234';
            expect(() => { ebay.createOrReplaceInventoryItem('1234', '1234', {'1234': '1234'}); }).to.throw('INVALID_SCOPE --> Missing body.scope');
            expect(() => { ebay1.createOrReplaceInventoryItem('1234', '1234', {'1234': '1234'}); }).to.throw('INVALID_SCOPE_URL --> Invalid scope url, correct https://api.ebay.com/oauth/api_scope/sell.inventory');
            ebay1.options.body.scope = 'https://api.ebay.com/oauth/api_scope/sell.inventory';
            expect(() => { ebay1.createOrReplaceInventoryItem('1234', '1234', {'1234': '1234'}); }).to.not.throw;
        });
        it('test getInventoryItem method', () => {
            const ebay = new Ebay({
                clientID: 'ClientId'
            });
            const ebay1 = new Ebay({
                clientID: 'clientId',
                clientSecret: 'clientSecret',
                appAccessToken: '1234',
                body: {
                    grant_type: 'client_credentials',
                    scope: '12345'
                }
            });
            expect(() => { ebay.getInventoryItem(); }).to.throw('Error sku is required');
            expect(() => { ebay.getInventoryItem(1234); }).to.throw('Expecting string to sku');
            expect(() => { ebay.getInventoryItem('1234'); }).to.throw('INVALID_AUTH_TOKEN --> Missing Access token, generate access token');
            ebay.options.appAccessToken = '1234';
            expect(() => { ebay.getInventoryItem('1234'); }).to.throw('INVALID_SCOPE --> Missing body.scope');
            expect(() => { ebay1.getInventoryItem('1234'); }).to.throw('INVALID_SCOPE_URL --> Invalid scope url, correct https://api.ebay.com/oauth/api_scope/sell.inventory');
            ebay1.options.body.scope = 'https://api.ebay.com/oauth/api_scope/sell.inventory';
            expect(() => { ebay1.getInventoryItem('1234'); }).to.not.throw;
        });
        it('test getInventoryItems method', () => {
            const ebay = new Ebay({
                clientID: 'ClientId'
            });
            const ebay1 = new Ebay({
                clientID: 'clientId',
                clientSecret: 'clientSecret',
                appAccessToken: '1234',
                body: {
                    grant_type: 'client_credentials',
                    scope: '12345'
                }
            });
            expect(() => { ebay.getInventoryItems(); }).to.throw('INVALID_AUTH_TOKEN --> Missing Access token, generate access token');
            ebay.options.appAccessToken = '1234';
            expect(() => { ebay.getInventoryItems(); }).to.throw('INVALID_SCOPE --> Missing body.scope');
            expect(() => { ebay1.getInventoryItems(); }).to.throw('INVALID_SCOPE_URL --> Invalid scope url, correct https://api.ebay.com/oauth/api_scope/sell.inventory');
            ebay1.options.body.scope = 'https://api.ebay.com/oauth/api_scope/sell.inventory';
            expect(() => { ebay1.getInventoryItems(); }).to.not.throw;
        });
        it('test deleteInventoryItem method', () => {
            const ebay = new Ebay({
                clientID: 'ClientId'
            });
            const ebay1 = new Ebay({
                clientID: 'clientId',
                clientSecret: 'clientSecret',
                appAccessToken: '1234',
                body: {
                    grant_type: 'client_credentials',
                    scope: '12345'
                }
            });
            expect(() => { ebay.deleteInventoryItem(); }).to.throw('Error sku is required');
            expect(() => { ebay.deleteInventoryItem(1234); }).to.throw('Expecting string to sku');
            expect(() => { ebay.deleteInventoryItem('1234'); }).to.throw('INVALID_AUTH_TOKEN --> Missing Access token, generate access token');
            ebay.options.appAccessToken = '1234';
            expect(() => { ebay.deleteInventoryItem('1234'); }).to.throw('INVALID_SCOPE --> Missing body.scope');
            expect(() => { ebay1.deleteInventoryItem('1234'); }).to.throw('INVALID_SCOPE_URL --> Invalid scope url, correct https://api.ebay.com/oauth/api_scope/sell.inventory');
            ebay1.options.body.scope = 'https://api.ebay.com/oauth/api_scope/sell.inventory';
            expect(() => { ebay1.deleteInventoryItem('1234'); }).to.not.throw;
        });
        it('test bulkUpdatePriceQuantity method', () => {
            const ebay = new Ebay({
                clientID: 'ClientId'
            });
            const ebay1 = new Ebay({
                clientID: 'clientId',
                clientSecret: 'clientSecret',
                appAccessToken: '1234',
                body: {
                    grant_type: 'client_credentials',
                    scope: '12345'
                }
            });
            expect(() => { ebay.bulkUpdatePriceQuantity(); }).to.throw('INVALID_REQUEST_PARAMS --> Missing or invalid input parameter');
            expect(() => { ebay.bulkUpdatePriceQuantity(1234); }).to.throw('Expecting object to params');
            expect(() => { ebay.bulkUpdatePriceQuantity({tinocino: 'ciao'}); }).to.throw('Error requests is required');
            ebay.options.appAccessToken = '1234';
            expect(() => { ebay.bulkUpdatePriceQuantity({requests: {}}); }).to.throw('INVALID_SCOPE --> Missing body.scope');
            expect(() => { ebay1.bulkUpdatePriceQuantity({requests: {}}); }).to.throw('INVALID_SCOPE_URL --> Invalid scope url, correct https://api.ebay.com/oauth/api_scope/sell.inventory');
            ebay1.options.body.scope = 'https://api.ebay.com/oauth/api_scope/sell.inventory';
            expect(() => { ebay1.bulkUpdatePriceQuantity({requests: {}}); }).to.not.throw;
        });
    });
});
