import { displayLetterAfterLetter, handleTogglePassword, loader } from "../utils/utils.js";
import { PASSWORD_REGEX } from "../utils/constants.js";


const loginPassword = document.querySelector('#loginPassword');
const loginForm = document.querySelector('.login-page-form');
const loginBtn = document.querySelector('.loginBtn');
const togglePassword = document.querySelector('.icon-eye-open')


togglePassword.addEventListener('click', ()=> handleTogglePassword(loginPassword, togglePassword));


/**
 * Function to handle login of users
 * @param {*} e 
 */

const handleLogin = (e)=>{
    e.preventDefault();

    if(!loginPassword.value.match(PASSWORD_REGEX)){
        loginPassword.parentElement.classList.add('border-red');
    }

    else{
        loginPassword.parentElement.classList.remove('border-red');
        loader(loginBtn);
    }
}


loginForm.addEventListener('submit', handleLogin)


/**
 * Little Login title animation(Maybe useless)
 */

const formIntroTitle = document.querySelector('.formIntro .title');

displayLetterAfterLetter('Welcome Back', formIntroTitle);

