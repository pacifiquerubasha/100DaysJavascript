import { staffs } from "../utils/data.js";
import { staffFormsFields as formsFields } from "../utils/form-data.js";

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


/**
 * Display list of staff data
 */


const staffListContainer = document.querySelector(".dataTable");

staffs.forEach((staff)=>{
    const template = `
        <div class="data-table-row">
            <span>${staff.id}</span>
            <span>${staff.name}</span>                                                         
            <span>${staff.lastname}</span>
            <span>${staff.title}</span>
            <span>${staff.department}</span>
            <span>${staff.nationality}</span>
            <span>${staff.insertionDate}</span>
            <span class="actions">
                <i class="icon-trash"></i>
                <i class="icon-edit"></i>
            </span>
        </div>    
    
    `

    staffListContainer.insertAdjacentHTML('beforeend', template);
})