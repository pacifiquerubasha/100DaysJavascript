import { staffs } from "../utils/data.js";
import { staffFormsFields as formsFields } from "../utils/form-data.js";



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



