'use strict';

var _ = require('lodash'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var StoreUtils = {
    createStore: function(spec) {
        var store = _.assign({
            emitChange: function() {
                this.emit(CHANGE_EVENT)
            },

            addChangeListener: function(callback) {
                this.on(CHANGE_EVENT, callback);
            },

            removeChangeListener: function(callback) {
                this.removeListener(CHANGE_EVENT, callback);
            }
        }, spec, EventEmitter.prototype);

        _.forEach(store, function(val, key) {
            if (_.isFunction(val)) {
                store[key] = store[key].bind(store);
            }
        });

        store.setMaxListeners(0);

        return store;
    }
};

module.exports = StoreUtils;
