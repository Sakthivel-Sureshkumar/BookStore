/*------- search button ----------- */

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}


/*----- login form -------- */

var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{

    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{

    loginForm.classList.remove('active');
}

