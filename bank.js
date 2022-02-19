document.getElementById('login_submit').addEventListener('click', function () {
    // get user email
    const emailFeild = document.getElementById('user_email');
    const userEmail = emailFeild.value;

    // get user password
    const passwordFeild = document.getElementById('user_passwoed');
    const userPassword = passwordFeild.value;

    // email and password

    if (userEmail == 'nayeem@gmail.com' && userPassword == 'nayeem') {
        window.location.href = 'bankking.html';
    }

})