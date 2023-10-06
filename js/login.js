document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    // user je email diyese // get user email
    const userEmali = emailField.value;

    //get user password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;

    //check email and password
    if (userEmali == 'abdur@gmail.com' && userPassword == 'abdur123') {
        window.location.href = 'banking.html'
    }

});

