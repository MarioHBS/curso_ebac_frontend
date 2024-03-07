$(document).ready(() =>
    fetch('http://api.github.com/users/MarioHBS')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            nameElm.innerText = json.name;
            userElm.innerText = json.login;
            // json.avatar_url;
            // json.following;
            // json.followers;
            // json.public_repos;
            // json.html_url;
        })
);

