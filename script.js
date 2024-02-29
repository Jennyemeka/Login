document.getElementById('btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (validateUsername(username) && validatePassword(password)) {
        alert('Well done');
    } else {
        alert('Please check that your username(10) or password(8) are not more than the required value. Please check your input.');
    }
});

function validateUsername(username) {
    return username.length <= 10;
}

function validatePassword(password) {
    return password.length >= 8;
}
