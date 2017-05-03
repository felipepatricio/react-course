/**
 * Created by fapatricio on 03/05/17.
 */
var React = require('react');

var UserInfo = React.createClass({
    render: function () {
        if (this.props.user){
            return(
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-circle" src={this.props.user.avatar} alt="avatar" width={140} height={140}/>
                        <h2>{this.props.user.login}</h2>
                        <p>{this.props.user.name}</p>
                        <p>follower: {this.props.user.followers} / Following: {this.props.user.following}</p>
                        <p><a className="btn btn-defaul" href={this.props.user.html_url} role="button">View Details</a></p>
                    </div>
                </div>
            );
        }
        return(null);
    }
});

module.exports = UserInfo;