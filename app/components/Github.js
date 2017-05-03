/**
 * Created by fapatricio on 30/04/17.
 */
var React = require('react');
var SearchUser = require('./SearchUser');
var UserInfo = require('./UserInfo');

var Github = React.createClass({
    getInitialState: function () {
        return{
      user: null,
      respos: [],
        };
    },
    updateUser: function(user) {
      this.setState({user: user});
    },
    updateRepos: function(repos) {
        this.setState({repos: repos});
    },
    render: function() {
        return(
        <div className="container">
            <SearchUser
                updateUser={this.updateUser}
                updateRepos={this.updateRepos}
            />
            <UserInfo
                user={this.state.user}
                repos={this.state.repos}
            />
        </div>
        );
    }
});
module.exports = Github;