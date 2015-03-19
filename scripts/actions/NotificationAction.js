'use strict';

var AppConstants = require('../constants/AppConstants'),
    AppDispatcher = require('../dispatchers/AppDispatcher');

module.exports = {

    add: function(message, status) {
        AppDispatcher.handleAction({
            type: AppConstants.NOTIFICATION_ADD,
            message: message,
            status: status
        });
    },

    clear: function(item) {
        AppDispatcher.handleAction({
            type: AppConstants.NOTIFICATION_CLEAR,
            item: item
        });
    },

    clearAll: function() {
        AppDispatcher.handleAction({
            type: AppConstants.NOTIFICATION_CLEARALL
        });
    }

};