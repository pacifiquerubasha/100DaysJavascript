
import { patients } from "../utils/data.js";
import { handleToggleCustomSelectInputs } from "../utils/utils.js";

/**
 * TODO: MINIMIZE THE USE OF DUPLICATE CODE. WILL BE MORE EFFICIENT WHEN SHIFTING TO MODULES(VITE)
 */


/**
 * Custom utility function that handles Hide/Show select items on click
 */


const patientFormSelects = document.querySelectorAll('.inputContainer-selectText');

handleToggleCustomSelectInputs(patientFormSelects);

const loadPatientsList = (data)=>{
    const patientListContainer = document.querySelector('.dataTable');

    patientListContainer.textContent = '';
    
    const headerTemplate = `
    <div class="data-table-row table-header">
        <span>ID</span>
        <span>Profile</span>
        <span>First Name</span>                                                         
        <span>Last Name</span>
        <span>Gender</span>
        <span>Email</span>
        <span>Nationality</span>
        <span>Blood group</span>
        <span>Marital status</span>
        <span>Medical Card No</span>
    </div>
    `
    patientListContainer.insertAdjacentHTML('beforeend', headerTemplate);



    data.forEach((patient, key)=>{
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

}

loadPatientsList(patients);




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
        location.href = '../pages/unique-patient.html'
    
}


const filterInput = document.querySelector('.filter-patients');

filterInput.addEventListener('keyup', (e)=>{

    const filteredPatientList = patients.filter((patient)=> patient.firstname.toLocaleLowerCase().includes(e.target.value) || patient.lastname.toLocaleLowerCase().includes(e.target.value))
    
    loadPatientsList(filteredPatientList);

})