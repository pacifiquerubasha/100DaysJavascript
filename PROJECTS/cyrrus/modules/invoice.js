import { patients, departments } from "../utils/data.js";
import { handlePrinting, handleTogglePopup } from "../utils/utils.js";
import { handleDropdownToggle } from "./dropdown.js";


handleDropdownToggle();

/**
 * Loading depatments and handling click events for each of the items of the list
 */


const departments_container = document.querySelector('.departments-list')

departments.forEach((dept)=>{
    const template = `<span class="departments_list_item" id="dept-${dept.id}" ><p>${dept.name}</p> </span>`;
    departments_container.insertAdjacentHTML('beforeend', template)
})

/**
 * Combined function to handle selecting department/patient for an invoice
 * @param {*} elements 
 * @param {*} data 
 * @param {*} popup 
 * @param {*} isPatient 
 */
const handleSelectInvoiceParties = (elements, data, popup, isPatient)=>{
    elements.name.textContent = !isPatient ? data.name : `${data.firstname} ${data.lastname}`;
    elements.email.textContent = data.email;
    elements.image.setAttribute('src', data.image ? data.image : data.picture_url)
    elements.image.classList.remove('default-image')

    popup.classList.toggle('hidden')


}

const departments_list_items = document.querySelectorAll('.departments_list_item');
const fromDetails_Name = document.querySelector('.from-details .name');
const fromDetails_Email = document.querySelector('.from-details .email');
const fromDetails_Image = document.querySelector('.from-Image');

departments_list_items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const data =departments[Number(item.id.split('-')[1])-1]; 
        const fields = {
            name:fromDetails_Name,
            email:fromDetails_Email,
            image:fromDetails_Image
        }

        handleSelectInvoiceParties(fields, data, departments_container);

    })
})



/**
 * Dynamically loading patient list and handling click events on each of the elements of the list
 */


const patients_list = document.querySelector('.patients-list')

patients.forEach((patient)=>{
    const template = `<span class="patients_list_item" id="patient-${patient.id}" ><p>${patient.firstname}&nbsp;${patient.lastname}</p> </span>`;
    patients_list.insertAdjacentHTML('beforeend', template)
})


/**
 * Handle toggle select dept/patient popups
 */

handleTogglePopup('.dept-toggle', '.departments-list')

handleTogglePopup('.patients-toggle', '.patients-list')


const patients_list_items = document.querySelectorAll('.patients_list_item');
const toDetails_name = document.querySelector('.to-details .name');
const toDetails_email = document.querySelector('.to-details .email');
const toDetails_image = document.querySelector('.to-Image');

patients_list_items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const id = item.id.split('-')[1];
        const data = patients.find(el => el.id === id);

        const fields = {
            name:toDetails_name,
            email:toDetails_email,
            image:toDetails_image
        }

        handleSelectInvoiceParties(fields, data, patients_list, true);

    })
})


/**
 * Handle adding items on click Add button
 */
const addInvoiceItemBtns = document.querySelectorAll('.addInvoiceItemBtn');
const invoiceItemsContainer = document.querySelector('.invoiceItems');

let i = 0;
const invoiceItemsArray = [];


const handleAddNewInvoiceItem = (e)=>{

    const firstPrevInput = e.target.parentElement.previousElementSibling.previousElementSibling.lastElementChild;
    const secondPrevInput = e.target.parentElement.previousElementSibling.lastElementChild;
   
    if(firstPrevInput.value === ""){
        firstPrevInput.focus();
    }

    else if(secondPrevInput.value == ""){
        secondPrevInput.focus()
    }

    else{

        invoiceItemsArray.push({
            name:firstPrevInput.value,
            price:secondPrevInput.value
        });

        const template = `
        <div class="invoice-item-row">
            <div class="input-container-invoice">
                <input aria-label="Item Name" type="text" id="item-name" placeholder="Enter item name" required>
            </div>
    
            <div class="input-container-invoice">
                <input aria-label="Item price" type="number" id="item-price"  placeholder="Enter item price" required>
            </div>
            <div>
                <i id="btn-${i}" class="icon-plus-sign-alt addInvoiceItemBtn"></i>
            </div>
        </div>
        `
        invoiceItemsContainer.insertAdjacentHTML('beforeend', template);
    
        const addedBtn = document.getElementById(`btn-${i}`)
        addedBtn.addEventListener('click', (e)=>handleAddNewInvoiceItem(e))
    
        i++;
        e.target.style.display = "none";

    }


}


addInvoiceItemBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        handleAddNewInvoiceItem(e)
    })

})


/**
 * 
 * Generating invoices logic
 */
const generateInvoiceBtn = document.querySelector('.invoice-actions button');
const printableDetailsContainer = document.querySelector('.printable-details');

/**
 * Function that handles the validation of the data before generating invoices
 * 
 * @returns validation metric
 */
const handleInitialValidation = ()=>{

    const initalFirstInput = document.querySelector('.initalFirstInput');
    const initalSecondInput = document.querySelector('.initalSecondInput');

    const fromBox = document.querySelector('.from');
    const toBox = document.querySelector('.to');

    const validateTitleDetails = (field, value, parent)=>{
        
        parent.style.border = field.textContent === value ? '2px solid red' : "none";

        return field.textContent !== value;
    }

    const validateFirstInput = validateTitleDetails(fromDetails_Name, "Select Department", fromBox);
    const validateSecondInput = validateTitleDetails(toDetails_name, "Select Patient", toBox);

    if(!validateFirstInput || !validateSecondInput) return false;

    if(initalFirstInput.value !== "" && initalSecondInput.value != ""){

        if(printableDetailsContainer.textContent.trim() === "" && invoiceItemsArray.length === 0)
            invoiceItemsArray.push({
                name:initalFirstInput.value,
                price:initalSecondInput.value
            });

    }

    else if(invoiceItemsArray.length === 0){
        return false;
    }

    return true;

}

const generateInvoiceId = (number)=>{
    let formattedInvoiceNumber;

    if(number < 10) formattedInvoiceNumber = `CY00${invoiceNumber}`;
    else if(number < 100) formattedInvoiceNumber = `CY0${invoiceNumber}`;
    else formattedInvoiceNumber = `CY${invoiceNumber}`;

    return formattedInvoiceNumber;
}

let invoiceNumber = 1;

generateInvoiceBtn.addEventListener('click', ()=>{
    
    const isValid = handleInitialValidation();

    if(!isValid) return;

    const template = `

    <span class="invoice-title">Invoice ${generateInvoiceId(invoiceNumber)}</span>

    <div class="dept-detail">
        <span>Issuing department</span>
        <span>${fromDetails_Name.textContent}</span>
    </div>

    <div class="patient-detail">
        <span>Patient</span>
        <div>
            <span>ID</span>
            <span>Lady Mary</span>
        </div>
        <div>
            <span>Names</span>
            <span>${toDetails_name.textContent}</span>
        </div>

        <div>
            <span>Email</span>
            <span>${toDetails_email.textContent}</span>
        </div>

    </div>
    <div class="invoice-items-right">
        <p class="title">Items</p>
        ${invoiceItemsArray.map((item)=>{
            return `
            <div>
                <span>${item.name}</span>
                <span>${item.price}$</span>
            </div>
            
            `
        }).join("")
        }

    </div>

    <div class="totals">
        <p>Total</p>
        <span>
        ${invoiceItemsArray.reduce((acc, item)=> acc+=Number(item.price), 0)}$
        </span>
    </div>

    <button class="printInvoice" data-html2canvas-ignore="true">Print invoice</button>
    
    
    `
    printableDetailsContainer.innerHTML = template;

    const elementToPrint = document.querySelector('.right-details');

    document.querySelector('.printInvoice').addEventListener('click', ()=>{
        handlePrinting(elementToPrint, `Invoice-${toDetails_name.textContent.replace(/\s+/g, '')}-${fromDetails_Name.textContent.replace(/\s+/g, '')}-${invoiceNumber}-${Date.now()}`)
    })

    invoiceNumber++;
})



