import { handleTogglePassword, checkPasswords, loader } from "../utils/utils";


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
    if(isValidForm){
        passwordInput.parentElement.classList.remove('border-red');
        confirmPasswordInput.parentElement.classList.remove('border-red');

        loader(signUpBtn)

    }

}

signUpForm.addEventListener('submit', handleSignup)



