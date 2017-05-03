/**
 * Created by fapatricio on 30/04/17.
 */
var React = require('react');
var GithubUser = require('../services/GithubUser');

var SearchUser = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();

        GithubUser.getByUsername(this.refs.username.value).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));

        GithubUser.getResposByUsername(this.refs.username.value).then(function(response){
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function () {
        return(
            <div className="jumbotron">
                <h1>Github Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                ref="username"
                                className="form-control"
                                placeholder="Nome do Usuário"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SearchUser;