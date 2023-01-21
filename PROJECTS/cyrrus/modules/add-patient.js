import { patientFormFields } from "../utils/form-data.js";


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
    
    formsContainer.insertAdjacentHTML("afterbegin", template)
})