import { patientFormFields } from "../utils/form-data.js";
import { handleToggleCustomSelectInputs, loader } from "../utils/utils.js";


/**
 * Loading Patient registration form items 
 */

const formsContainer = document.querySelector('.formFields');

patientFormFields.forEach((field, key)=>{
    const templateText = `
    <div class="inputContainer">
        <span>${field.label}</span>
        <div>

            <input aria-label="${field.label}" type="${field.type}" id="${key}-${field.label.replace(/\s+/g, '')}" class="${field.type === "date" && "date-input"}" placeholder="${field.placeholder}">
            
            ${field.type !== "date" ? `<i class="${field.icon}"></i>` : ""}
            
        </div>
    </div>        
    `
    const templateSelect = `
        <div class="inputContainer">
            <span>${field.label}</span>
            <div>
                <span id="select-${key}" class="inputContainer-selectText">${field.placeholder}</span>
                <i class="${field.icon}"></i>
                
            </div>

            <div class="select-items hidden" id="item-${key}">
                ${field.values?.map((field, index)=>{
                    return `<span class="field-element" id="field-element-${index}"=>${field}</span>`
                }).join("")
                }
                
            </div>
        </div> 
    `

    let template;

    switch(field.type){
        case "select":
            template = templateSelect;
            break;
        default:
            template = templateText;
    }
    
    formsContainer.insertAdjacentHTML("afterbegin", template);
})


const patientFormSelects = document.querySelectorAll('.inputContainer-selectText');

handleToggleCustomSelectInputs(patientFormSelects);


const registerPatientSubmitBtn = document.querySelector('.formsContainer.patientForm .submitBtn');

registerPatientSubmitBtn.addEventListener('click', ()=>{
    const allInputs = document.querySelectorAll('.inputContainer div input');
    const allSelectsInputs = document.querySelectorAll('.inputContainer-selectText');

    let fieldsValid = [];

    allInputs.forEach((input)=>{
        if(input.value === ""){
            input.parentElement.parentElement.style.border = "1px solid red";
            fieldsValid.push(false)
        }
        else{
            input.parentElement.parentElement.style.border = "1.5px solid rgba(128, 128, 128, 0.404)";
            fieldsValid.push(true)

        }
    })

    allSelectsInputs.forEach((select)=>{
        if(select.textContent.includes('Select')){
            select.parentElement.parentElement.style.border = "1px solid red";
            fieldsValid.push(false)
        }
        else{
            select.parentElement.parentElement.style.border = "1.5px solid rgba(128, 128, 128, 0.404)";
            fieldsValid.push(true)

        }

    })

    if(!fieldsValid.includes(false)){
        loader(registerPatientSubmitBtn)
    }


})

