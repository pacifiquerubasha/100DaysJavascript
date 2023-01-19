
const firstNameInput = document.querySelector('.firstname');
const lastNameInput = document.querySelector('.lastname');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const confirmPasswordInput = document.querySelector('.confirmPassword');
const signUpForm = document.querySelector('.signUpForm');

const togglePassword = document.querySelector('.togglePassword');
const toggleConfirmPassword = document.querySelector('.toggleConfirmPassword');

const signUpBtn = document.querySelector('.signUpBtn')

const handleTogglePassword = (input, toggle)=>{
    if(input.type === 'password'){
        input.type = "text";
        toggle.classList.replace('icon-eye-open', 'icon-eye-close')
    }

    else{
        input.type = "password";
        toggle.classList.replace('icon-eye-close', 'icon-eye-open')

    }
}

togglePassword.addEventListener('click', ()=> handleTogglePassword(passwordInput, togglePassword));
toggleConfirmPassword.addEventListener('click', ()=> handleTogglePassword(confirmPasswordInput, toggleConfirmPassword));


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

const checkPasswords = (password, confirmPassword) => {
    if(!password.value.match(PASSWORD_REGEX)){
        password.parentElement.classList.add('border-red');
        return false;
    }

    if(confirmPassword.value !== password.value){
        confirmPassword.parentElement.classList.add('border-red');
        return false;
    }

    return true;
}

const loader = (button)=>{
    let i = 0
    button.innerHTML = '';
    setInterval(()=>{
        if(button.textContent.length < 3){
            button.innerHTML += '&#9679;';
        }

        else button.innerHTML = '&#9679;';
        i++;

    }, 300)
}

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


console.log(window.screen.availHeight)
console.log(window.screen.height)

console.log(window.screen.availWidth)
console.log(window.screen.width)

