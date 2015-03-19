/** @jsx React.DOM */

var React = require('react/addons');
var Notifications = require('./component/Notifications'),
    NotificationAction = require('./actions/NotificationAction');

module.exports = React.createClass({
    addSuccessNotification: function(e) {
        e.preventDefault();
        NotificationAction.add('success', 'success');
    },

    addErrorNotification: function(e) {
        e.preventDefault();
        NotificationAction.add('error', 'danger');
    },

    clearNotifications: function(e) {
        e.preventDefault();
        NotificationAction.clearAll();
    },

    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-pill nav-stacked">
                            <li><a href="#" className="btn btn-default" onClick={this.addSuccessNotification}>Add Success Notification</a></li>
                            <li><a href="#" className="btn btn-default" onClick={this.addErrorNotification}>Add Error Notification</a></li>
                            <li><a href="#" className="btn btn-default" onClick={this.clearNotifications}>Clear Notifications</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
});