var React = require('react/addons');

var NotificationAction = require('../actions/NotificationAction'),
    NotificationStore = require('../stores/NotificationStore');

var NotificationItem = React.createClass({
    componentDidMount: function() {
        var item = this.props.notification;

        setTimeout(function() {
            NotificationAction.clear(item);
        }, 5000);
    },

    clearAlert: function(e) {
        e.preventDefault();
        NotificationAction.clear(this.props.notification);
    },

    render: function() {
        var classString = 'alert alert-' + this.props.notification.status;
        return (
            <div className={classString}>
                {this.props.notification.message}
                <a href="#" onClick={this.clearAlert} className="close">
                    <i className="fa fa-times"></i>
                </a>
            </div>
        );
    }
});

var Notifications = React.createClass({
    getInitialState: function(props) {
        return {
            notifications: NotificationStore.get()
        };
    },

    componentDidMount: function() {
        NotificationStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        NotificationStore.removeChangeListener(this._onChange);
    },

    componentWillReceiveProps: function(newprops) {

    },

    _onChange: function() {
        this.setState(this.getInitialState());
    },

    render: function() {
        var items = [];

        this.state.notifications.forEach(function(item, index) {
            items.push(<NotificationItem key={index} notification={item}></NotificationItem>);
        });

        return (
            <div>{items}</div>
        );
    }
});

module.exports = Notifications;
