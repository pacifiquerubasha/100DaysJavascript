
/**
 * TODO: MINIMIZE THE USE OF DUPLICATE CODE. WILL BE MORE EFFICIENT WHEN SHIFTING TO MODULES(VITE)
 */

/**
 * Loading depatments and handling click events for each of the items of the list
 */

const departments = [
    {
        id:1,
        name:"Surgery",
        email:"surgery@cyrrus.com",
        image:'./assets/surgery.jpg'
    },
    {
        id:2,
        name:"Pediatry",
        email:"pediatry@cyrrus.com",
        image:'./assets/pediatry.jpg'
    }
]

const departments_container = document.querySelector('.depatments-list')

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

const patients = [
    {
        id:"LM30KH",
        firstname:'Lady',
        middlename:"Rubasha",
        lastname:"Mary",
        gender:"F",
        phone:"439483430",
        dob:"12/12/1998",
        email:"ladymary@gmail.com",
        nationality:"Algeria",
        blood_group:"0+",
        marital_status:"married",
        occupation:"Software Developer",
        card_no:"239427824",
        address:"Pamplemousses, ALC Campus",
        contact_person:"Senior Rubasha",
        relationship:"Father",
        contact_number:"42842940",
        picture_url:"./assets/profile.jpg",
        additional_info:`As I said there is nothing `

    },
    {
        id:"ER30KH",
        firstname:'Emmanuella',
        middlename:"Rubasha",
        lastname:"Habamungu",
        gender:"F",
        phone:"439483430",
        dob:"12/12/1998",
        email:"daniella@gmail.com",
        nationality:"Algeria",
        blood_group:"B+",
        marital_status:"married",
        occupation:"Nutritionist",
        card_no:"239427824",
        address:"Pamplemousses, ALC Campus",
        contact_person:"Senior Rubasha",
        relationship:"Father",
        contact_number:"42842940",
        picture_url:"./assets/user-1.jpg",
        additional_info:`As I said there is nothing As I said there is nothingAs I said there is nothing As I said there is nothing  `

    },

    {
        id:"AG30KH",
        firstname:'Audrey',
        middlename:"Gustavo",
        lastname:"Sua",
        gender:"F",
        phone:"439483430",
        dob:"12/12/1998",
        email:"audrey@gmail.com",
        nationality:"Algeria",
        blood_group:"A+",
        marital_status:"married",
        occupation:"Business Analyst",
        card_no:"239427824",
        address:"Pamplemousses, ALC Campus",
        contact_person:"Senior Rubasha",
        relationship:"Father",
        contact_number:"42842940",
        picture_url:"./assets/user-2.jpg",
        additional_info:`As I said there is nothing `

    },
]


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







