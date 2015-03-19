var _ = require('lodash'),
    Dispatcher = require('flux').Dispatcher;

var AppDispatcher = _.assign(new Dispatcher(), {
    handleAction: function(action) {
        console.log('all actions', action);
        if (!action.type) {
            throw new Error('Empty action.type');
        }

        this.dispatch({
            source: 'NOTIFICATION_EVENT_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;