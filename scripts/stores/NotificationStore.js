'use strict';

var _ = require('lodash');

var AppConstants = require('../constants/AppConstants'),
    AppDispatcher = require('../dispatchers/AppDispatcher'),
    StoreUtils = require('../utils/StoreUtils');

var _notifications = [];

var NotificationStore = StoreUtils.createStore({
    get: function() {
        return _notifications;
    }
});

NotificationStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
        case AppConstants.NOTIFICATION_ADD:
            _notifications.push({
                message: action.message,
                status: action.status
            });
            break;
        case AppConstants.NOTIFICATION_CLEAR:
            _notifications.splice(_notifications.indexOf(action.item), 1);
            break;
        case AppConstants.NOTIFICATION_CLEARALL:
            _notifications = [];
            break;
        default:
            return true;
    }
    NotificationStore.emitChange();
});

module.exports = NotificationStore;
