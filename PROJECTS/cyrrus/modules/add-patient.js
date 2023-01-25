import { patientFormFields } from "../utils/form-data.js";
import { handleToggleCustomSelectInputs, loader } from "../utils/utils.js";
import { handleDropdownToggle } from "./dropdown.js";

handleDropdownToggle();

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


/**
 * PATIENT FORM VALIDATION
 */

const registerPatientSubmitBtn = document.querySelector('.formsContainer.patientForm .submitBtn');

registerPatientSubmitBtn.addEventListener('click', ()=>{
    
    const allInputs = document.querySelectorAll('.inputContainer div input');
    const allSelectsInputs = document.querySelectorAll('.inputContainer-selectText');

    let fieldsValid = [];

    const checkFields = (isNormalInput, inputsArray)=>{        

        inputsArray.forEach((input)=>{
            const condition = isNormalInput ? (input.value === "") : (input.textContent.includes('Select'))

            input.parentElement.parentElement.style.border = condition ? "1px solid red" : "1.5px solid rgba(128, 128, 128, 0.404)";
            fieldsValid.push(!condition)
        })

    }

    checkFields(true, allInputs);
    checkFields(false, allSelectsInputs)

     

    if(!fieldsValid.includes(false)){
        loader(registerPatientSubmitBtn)
    }


})

