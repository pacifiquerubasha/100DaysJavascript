import { staffs } from "../utils/data.js";
import { staffFormsFields as formsFields } from "../utils/form-data.js";
import { loader } from "../utils/utils.js";

/**
 * Loading Staff registration form items 
 */

const formsContainers = document.querySelectorAll('.forms');

formsContainers.forEach((container, index)=>{

    const fields = index === 0 ? formsFields.left :formsFields.right;

    fields.forEach((field)=>{
        const template = `
        <div class="inputContainer">
            <span>${field.label}</span>
            <div>
                <input aria-label="${field.label}" type="${field.type}" placeholder="${field.placeholder}">
                <i class="${field.icon}"></i>
            </div>
        </div>        
        `
        container.insertAdjacentHTML(`${index === 1 ? "afterbegin" :"beforeend"}`, template)
    })


})


const registerStaffSubmitBtn = document.querySelector('.formRight.forms .submitBtn');

registerStaffSubmitBtn.addEventListener('click', ()=>{
    const allInputs = document.querySelectorAll('.inputContainer div input');

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

    if(!fieldsValid.includes(false)){
        loader(registerStaffSubmitBtn)
    }


})