/**
 * Created by fapatricio on 30/04/17.
 */
var React = require('react');
var SearchUser = require('./SearchUser');

var Github = React.createClass({
    render: function() {
        return(
        <div className="container">
            <SearchUser/>
        </div>
        );
    }
});
module.exports = Github;