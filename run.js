$(document).ready(() =>
    fetch('http://api.github.com/users/MarioHBS')
        .then((response) => response.json())
        .then(function (json) {
            console.log(json);
            $('.profile-name').text(json.name);
            $('.profile-username').text(json.login);
            $('#count-flwn').text(json.following)// ;
            $('#count-flwr').text(json.followers) // ;
            $('#ocunt-repos').text(json.public_repos) // ;

            $('.profile-avatar').attr('src', json.avatar_url);
            $('.profile-link').attr('href', json.html_url);
        })
);

