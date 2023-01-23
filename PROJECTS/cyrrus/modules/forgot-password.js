

const sendEmailForm = document.querySelector('form.container');
const emailInput = document.querySelector('.context .email');
const instruction = document.querySelector('p.instruction');
const contextContainer = document.querySelector('.context');
const submitBtn = document.querySelector('.second-context button')
const codeInput = document.querySelector('.code');

sendEmailForm.addEventListener('submit', (e)=>{
    e.preventDefault();  

    const codeInputTemplate = `
        <input
            aria-label="code"
            id="loginCode"
            type="text"
            class="code"
            placeholder="XXXX"
            required
        />
    `
    
    if(submitBtn.textContent !== "Confirm code"){
        instruction.innerHTML = `We sent you the reset code on your email ${emailInput.value}.<br/>Please enter the code below`;
         emailInput.style.display = 'none';
         contextContainer.insertAdjacentHTML('beforeend', codeInputTemplate);
         submitBtn.textContent = "Confirm code"
    }


    const messageContainer = document.querySelector('.message-container .core-message');

    if(codeInput && codeInput.value !== "M0A3R0Y"){
        if(messageContainer.classList.contains('hidden'))
            messageContainer.classList.remove('hidden')
    }

   

})