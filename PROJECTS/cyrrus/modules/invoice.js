import { patients, departments } from "../utils/data.js";


/**
 * TODO: MINIMIZE THE USE OF DUPLICATE CODE. WILL BE MORE EFFICIENT WHEN SHIFTING TO MODULES(VITE)
 */

/**
 * Loading depatments and handling click events for each of the items of the list
 */



const departments_container = document.querySelector('.departments-list')

departments.forEach((dept)=>{
    const template = `<span class="departments_list_item" id="dept-${dept.id}" ><p>${dept.name}</p> </span>`;
    departments_container.insertAdjacentHTML('beforeend', template)
})


const departments_list_items = document.querySelectorAll('.departments_list_item');
const fromDetails_Name = document.querySelector('.from-details .name');
const fromDetails_Email = document.querySelector('.from-details .email');
const fromDetails_Image = document.querySelector('.from-Image');

departments_list_items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const data =departments[Number(item.id.split('-')[1])-1]; 
        
        fromDetails_Name.textContent = data.name;
        fromDetails_Email.textContent = data.email;
        fromDetails_Image.setAttribute('src', data.image)
        fromDetails_Image.classList.remove('default-image')

        departments_container.classList.toggle('hidden')

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



document.querySelector('.dept-toggle').addEventListener('click', ()=>{
    departments_container.classList.toggle('hidden')
})

document.querySelector('.patients-toggle').addEventListener('click', ()=>{
    patients_list.classList.toggle('hidden')
})




const patients_list_items = document.querySelectorAll('.patients_list_item');
const toDetails_name = document.querySelector('.to-details .name');
const toDetails_email = document.querySelector('.to-details .email');
const toDetails_image = document.querySelector('.to-Image');

patients_list_items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const id = item.id.split('-')[1];
        const data = patients.find(el => el.id === id);

        toDetails_name.textContent = `${data.firstname} ${data.lastname}`;
        toDetails_email.textContent = data.email;
        toDetails_image.setAttribute('src', data.picture_url)
        toDetails_image.classList.remove('default-image')

        patients_list.classList.toggle('hidden')

    })
})


/**
 * Handle adding items on click Add button
 */
const addInvoiceItemBtns = document.querySelectorAll('.addInvoiceItemBtn');
const invoiceItemsContainer = document.querySelector('.invoiceItems');

let i = 0;
const handleAddNewInvoiceItem = (e)=>{
    const template = `
    <div class="invoice-item-row">
        <div class="input-container-invoice">
            <input aria-label="Item Name" type="text" id="item-name" placeholder="Enter item name">
        </div>

        <div class="input-container-invoice">
            <input aria-label="Item price" type="text" id="item-price"  placeholder="Enter item price">
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


addInvoiceItemBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        handleAddNewInvoiceItem(e)
    })

})







