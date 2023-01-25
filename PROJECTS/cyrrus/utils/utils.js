import { PASSWORD_REGEX } from "./constants.js";

/**
 * Utitlity function to display text letter after another
 * @param {*} text(The text to animate)
 * @param {*} container(The HTML element to contain the text) 
 */

export const displayLetterAfterLetter = (text, container)=>{
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


/**
 * Simple utility function to handle hide/show password
 * @param {*} input(the input element) 
 * @param {*} toggle(the icon to be toggled eye/eye-slash)
 */

export const handleTogglePassword = (input, toggle)=>{
    if(input.type === 'password'){
        input.type = "text";
        toggle.classList.replace('icon-eye-open', 'icon-eye-close')
    }

    else{
        input.type = "password";
        toggle.classList.replace('icon-eye-close', 'icon-eye-open')

    }
}


/**
 * Simple utility function to show a loading animation
 * @param {*} button(The HTML element to contain the loader)
 */
export const loader = (button)=>{
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
 * Custom function to check whether the password is strong enough to be allowed 
 * @param {*} password(The input to contain the password) 
 * @param {*} confirmPassword(The input to contain the confirm password) 
 * @returns password status
 */
export const checkPasswords = (password, confirmPassword) => {
    if(!password.value.match(PASSWORD_REGEX)){
        password.parentElement.classList.add('border-red');
        confirmPassword.parentElement.classList.remove('border-red');
        return "Password too weak";
    }

    else if(confirmPassword.value !== password.value){
        confirmPassword.parentElement.classList.add('border-red');
        password.parentElement.classList.remove('border-red');
        return "Passwords do not match";
    }

    return "pass";
}


/**
 * Utility function to print HTML sections
 * @param {*} element(The HTML container to be printed) 
 * @param {*} filename(The name of the file to be printed) 
 */
export const handlePrinting = (element, filename)=>{
    var opt = {
        margin:       0.5,
        filename:     `${filename}.pdf`,
        image:        { type: 'png', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf(element, opt);

}

/**
 * Custom utility function that handles Hide/Show select items on click
 * @param {*} inputs(The nodelist of inputs to be toggled) 
 */

export const handleToggleCustomSelectInputs = (inputs)=>{

    inputs.forEach((select, i)=>{

        const KEY = select.id.split("-")[1]
        const correspondingItemsContainer = document.getElementById(`item-${KEY}`);

        handleTogglePopup(`#${select.id}`, `#item-${KEY}`)

        /**
         * Simple function that, for each element of the items list toggled, adds the value to the field on click
         */
        const handleSelectElement = ()=>{
            const fieldElements = document.querySelectorAll(`#item-${KEY} .field-element`);
    
            fieldElements.forEach((element)=>{
                element.addEventListener('click', ()=>{
                    correspondingItemsContainer.classList.toggle('hidden')

                    const selectedValueContainer = document.getElementById(`select-${KEY}`);
                    selectedValueContainer.innerHTML = `<span class="selected-value">${element.textContent}</span>`
                })
            })

        }

        handleSelectElement();

    })   


}

/**
 * Handles the toggling of popups by allowing close on click outside
 * @param {*} toggleSelector(The css ]selector of the popup toggler) 
 * @param {*} popupSelector(The css ]selector of the popup to be displayed/hidden) 
 */

export const handleTogglePopup = (toggleSelector, popupSelector)=>{
    
    const popup = document.querySelector(popupSelector);

    document.addEventListener('click', (e)=>{

        if(e.target.closest(toggleSelector)){            
            popup.classList.toggle('hidden');
        }

        else if (e.target.closest(popupSelector) === null && !popup.classList.contains('hidden')) {
            popup.classList.add('hidden')
        }
        

    })

}

/**
 * Handling display/hide error messages
 * @param {*} isDisplay(The display condition) 
 * @param {*} container(The container of the message) 
 */
export const handleDisplayMessage = (isDisplay, container)=>{
    const condition = container.classList.contains('hidden');
    
    if(isDisplay && !condition)
            container.classList.add('hidden')
    
    else if(!isDisplay && condition)
            container.classList.remove('hidden')
    
}

/**
 * Handling navigation to profided url(relative path)
 * @param {*} url(The url to redirect to) 
 */
export const cyrrusNavigate = (url)=>{
    location.href = url;
}