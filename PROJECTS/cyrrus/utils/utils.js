import { PASSWORD_REGEX } from "./constants.js";

/**
 * Utitlity function to display text letter after another
 * @param {*} text The text to animate 
 * @param {*} container The HTML element to contain the text  
 */

export const displayLetterAfterLetter = (text, container)=>{
    let index = 0;
    const classesList = ["var(--color-blue)", 'var(--color-black)', 'var(--color-black)', "var(--main-color)",'var(--color-black)','var(--color-black)', "var(--color-red)",'var(--color-black)', "var(--color-purple)", "var(--color-black)"]
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
 * @param {*} input the input element  
 * @param {*} toggle the icon to be toggled eye/eye-slash 
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
 * @param {*} button The HTML element to contain the loader 
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
 * @param {*} password The input to contain the password  
 * @param {*} confirmPassword The input to contain the confirm password  
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
 * @param {*} element The HTML container to be printed  
 * @param {*} filename The name of the file to be printed  
 */
export const handlePrinting = (element, filename)=>{
    var opt = {
        margin:       0.5,
        filename:     `${filename}.pdf`,
        image:        { type: 'png', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' }
    };

    html2pdf(element, opt);

    /**
     * JSPDF FORMATS
     * a0 - a10
     * b0 - b10
     * c0 - c10
     * dl
     * letter
     * government-letter
     * legal
     * junior-legal
     * ledger
     * tabloid
     * credit-card
     */


}



/**
 * Custom utility function that handles Hide/Show select items on click
 * @param {*} inputs The nodelist of inputs to be toggled  
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
 * @param {*} toggleSelector The css ]selector of the popup toggler  
 * @param {*} popupSelector The css ]selector of the popup to be displayed/hidden  
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
 * @param {*} isDisplay The display condition  
 * @param {*} container The container of the message  
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
 * @param {*} url The url to redirect to  
 */
export const cyrrusNavigate = (url)=>{
    location.href = url;
}


/**
 * Utility function to generate random {labels, values} data for chart 
 * @param {*} labels The chart labels to accompany the randomly generated data
 * @returns random chart data
 */
export const generateData = (labels)=>{
    const values = new Array(10).fill(0).map((i)=>Math.floor(Math.random() * 100))
    return {
        labels,
        values
    }
}


/**
 * Toast message trigger
 * @param {*} message The message to display on the toast container
 * @param {*} isError The boolean to decide on type of message
 */

export const startToastProgress = (message, isError)=>{
    const dashboard = document.querySelector('.dashboard');

    dashboard.insertAdjacentHTML('afterbegin', `
        <div class="toast hidden">
            <p>Message here</p>
            <div class="progress-bar"></div>
            <i class="icon-remove-sign"></i>
        </div>
    `)

    const toastContainer = document.querySelector('.toast');
    const toastProgress = document.querySelector('.toast .progress-bar');
    const toastMessage = document.querySelector('.toast p');
    const closeToast = document.querySelector('.toast i')

    toastContainer.classList.remove('hidden');
    toastMessage.textContent = message;
    toastProgress.style.border = `2px solid ${isError ? "rgba(255, 0, 0, 0.808)" : "rgba(0, 128, 0, 0.808)"}`
    toastContainer.style.backgroundColor = `${isError ? "rgba(255, 0, 0, 0.058)" : "rgba(0, 128, 0, 0.058)"}`


    let total = 100;
    let interval;

    const startProgress = ()=>{
        interval = setInterval(()=>{
            if(total == 0){
                clearInterval(this)
                toastContainer.classList.add('hidden')
            }
    
            toastProgress.style.width = `${total}%`;
            total--;
        }, 80)
    }

    startProgress();

    toastContainer.addEventListener('mouseover', ()=>{
        clearInterval(interval)
    })

    toastContainer.addEventListener('mouseout', ()=>{
        startProgress()

    })

    closeToast.addEventListener('click', ()=> toastContainer.classList.add('hidden'))
}


export const toggleDarkMode = ()=>{
    const main = document.querySelector('.main');
    main.classList.toggle('dark-main');

    if(main.classList.contains('dark-main')){
        main.style.setProperty('--color-white', 'rgba(255, 255, 255, 0.8)');
        main.style.color = 'rgba(255, 255, 255, 0.8)';

    }

    else{
        main.style.setProperty('--color-white', 'white');
        main.style.color = 'black';

    }

}