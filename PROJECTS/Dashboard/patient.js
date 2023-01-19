
/**
 * Custom utility function that handles Hide/Show select items on click
 */

const handleToggleCustomSelectInputs = (inputs)=>{

    inputs.forEach((select, i)=>{
        const KEY = select.id.split("-")[1]
        const correspondingItemsContainer = document.getElementById(`item-${KEY}`);

        select.addEventListener('click', ()=>{
            correspondingItemsContainer.classList.toggle('hidden')
        })

        /**
         * Simple function that, for each element of the items list toggled, adds the value to the field on click
         */
        const handleSelectElement = ()=>{
            const fieldElements = document.querySelectorAll(`#item-${KEY} .field-element`);
    
            fieldElements.forEach((element)=>{
                element.addEventListener('click', ()=>{
                    correspondingItemsContainer.classList.toggle('hidden')

                    const selectedValueContainer = document.getElementById(`select-${KEY}`);
                    selectedValueContainer.innerHTML = `<span class="selected-value">${element.textContent}</span>`
                })
            })

        }

        handleSelectElement();


    })   

}

const patientFormSelects = document.querySelectorAll('.inputContainer-selectText');

handleToggleCustomSelectInputs(patientFormSelects);


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
        id:"LM30KH",
        firstname:'Emmanuella',
        middlename:"Rubasha",
        lastname:"Habamungu",
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
        id:"LM30KH",
        firstname:'Audrey',
        middlename:"Gustavo",
        lastname:"Sua",
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
]

const patientListContainer = document.querySelector('.dataTable');

patients.forEach((patient, key)=>{
    const template = `
        <div class="data-table-row" id="patient-${key}">
            <span><p>${patient.id}</p></span>
            <span><img src=${patient.picture_url} class="profileImagePatient"/></span>                                                         
            <span><p>${patient.firstname}</p></span>
            <span><p>${patient.lastname}</p></span>
            <span><p>${patient.gender}</p></span>
            <span><p>${patient.email}</p></span>
            <span><p>${patient.nationality}</p></span>
            <span><p>${patient.blood_group}</p></span>
            <span><p>${patient.marital_status}</p></span>
            <span><p>${patient.card_no}</p></span>

        </div>    
    
    `

    patientListContainer.insertAdjacentHTML('beforeend', template);
})


const tableRows = document.querySelectorAll('.data-table-row');

tableRows.forEach((row)=>{
    row.addEventListener('click', ()=>{
        const data =patients[Number(row.id.split('-')[1])]; 
        navigateToDetailsPage(data)
    })
})


const navigateToDetailsPage = (data)=>{
    sessionStorage.setItem("unique-patient", JSON.stringify(data))

    if(sessionStorage.getItem("unique-patient"))
        location.href = './unique-patient.html'
    
}