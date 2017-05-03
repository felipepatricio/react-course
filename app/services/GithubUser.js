/**
 * Created by fapatricio on 30/04/17.
 */
var axios = require('axios');

var GithubUser = {
    getByUsername: function(username) {
        return axios.get('https://api.github.com/users/' + username);
    },
    getResposByUsername: function(username) {
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
};

module.exports = GithubUser;