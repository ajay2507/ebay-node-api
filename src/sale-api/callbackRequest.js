'use strict';
const { makeRequest } = require('./request');

/**
 * Call callback promise request
 * @param {Object} self
 * @param {String} uri Uri request
 * @param {String} method POST GET DELETE PUT
 * @param {String} scope
 * @param {String} scopeRO
 * @param {Boolean} AndCheckIfScopeIsReadOnly
 * @returns {Promise<Object>}
 */
function callbackRequest(self, uri, method, scope, scopeRO = null, AndCheckIfScopeIsReadOnly = false) {
    if (!self.options.appAccessToken) throw new Error('INVALID_AUTH_TOKEN --> Missing Access token, generate access token');
    if (!self.options.body) throw new Error('INVALID_SCOPE --> Missing body.scope');
    if (!self.options.body.scope) throw new Error('INVALID_SCOPE --> Missing scope');
    if (AndCheckIfScopeIsReadOnly) {
        if (self.options.body.scope !== scope || self.options.body.scope !== scopeRO) throw new Error('INVALID_SCOPE_URL --> Invalid scope url');
    }
    else {
        if (self.options.body.scope !== scope) throw new Error('INVALID_SCOPE_URL --> Invalid scope url');
    }
    const auth = 'Bearer ' + self.options.appAccessToken;
    self.options.contentType = 'application/json';
    return new Promise((resolve, reject) => {
        makeRequest(self.options, uri, method, auth, self.options.globalID).then((result) => {
            return resolve(result);
        }).then((error) => {
            return reject(error);
        });
    });
}

module.exports = {
    callbackRequest
};
