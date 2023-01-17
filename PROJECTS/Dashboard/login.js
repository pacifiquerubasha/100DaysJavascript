
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const loginForm = document.querySelector('.login-page-form');
const loginBtn = document.querySelector('.loginBtn');
const togglePassword = document.querySelector('.icon-eye-open')

/**
 * Simple utility function to handle hide/show password
 * @param {*} input(the input element) 
 * @param {*} toggle(the icon to be toggle eye/eye-slash)
 */
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

togglePassword.addEventListener('click', ()=> handleTogglePassword(loginPassword, togglePassword));

/**
 * Simple utility function to show a loading animation
 * @param {*} button 
 */
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


/**
 * Function to handle login of users
 * @param {*} e 
 */

//Email and password REGEX to allow for easy validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //Not used yet because of built-in validation
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 special character and 1 digit


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


const formIntroTitle = document.querySelector('.formIntro .title');

/**
 * Utitlity function to display text letter after another
 * @param {*} text 
 * @param {*} container 
 */

const displayLetterAfterLetter = (text, container)=>{
    let index = 0;
    const classesList = ["var(--color-blue)", 'black', 'black', "var(--main-color)",'black','black', "var(--color-red)",'black', "var(--color-purple)", "black"]
    let interval = setInterval(()=>{
        if(index < text.length){
            container.textContent += text[index]
            container.style.color = classesList[index];
            index++;
        }

        else clearInterval(interval)
    
    }, 100)
}

displayLetterAfterLetter('Welcome Back', formIntroTitle);