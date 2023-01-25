import { handleTogglePassword, checkPasswords, loader, handleDisplayMessage } from "../utils/utils.js";


const passwordInput = document.querySelector('.password');
const confirmPasswordInput = document.querySelector('.confirmPassword');
const signUpForm = document.querySelector('.signUpForm');

const togglePassword = document.querySelector('.togglePassword');
const toggleConfirmPassword = document.querySelector('.toggleConfirmPassword');

const signUpBtn = document.querySelector('.signUpBtn')


togglePassword.addEventListener('click', ()=> handleTogglePassword(passwordInput, togglePassword));
toggleConfirmPassword.addEventListener('click', ()=> handleTogglePassword(confirmPasswordInput, toggleConfirmPassword));


const handleSignup = (e)=>{
    e.preventDefault();
    
    const isValidForm = checkPasswords(passwordInput, confirmPasswordInput);

    if(isValidForm === "pass"){
        passwordInput.parentElement.classList.remove('border-red');
        confirmPasswordInput.parentElement.classList.remove('border-red');
        
        handleDisplayMessage(false, messageContainer)

        loader(signUpBtn)
    }

    else{
        let messageContainer = document.querySelector('.message-container .core-message');
        messageContainer.textContent = isValidForm;

        handleDisplayMessage(true, messageContainer)

    }

}

signUpForm.addEventListener('submit', handleSignup)



