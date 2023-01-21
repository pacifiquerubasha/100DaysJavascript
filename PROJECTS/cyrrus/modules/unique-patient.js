import { handlePrinting } from "../utils/utils.js";

/**
 * Dynamically load data from the localstorage to the unique patient page
 */
const dataFromSessionStorage = JSON.parse(sessionStorage.getItem("unique-patient"));

const container = document.querySelector('.patientDetails')
const template = `
        <div class="top-section">
            <img src=${dataFromSessionStorage.picture_url} alt="Profile picture">
            <div class="right-section">
                <div class="header">
                    <span class="name">${dataFromSessionStorage.firstname} ${dataFromSessionStorage.middlename} ${dataFromSessionStorage.lastname}</span>
                    <button data-html2canvas-ignore="true"><i class="icon-edit"></i> Edit</button>
                </div>
                <div class="patient-job">${dataFromSessionStorage.occupation}</div>
                <div class="blood-group"><i class="icon-tint"></i> ${dataFromSessionStorage.blood_group}</div>
                <div class="profile-detail-group">
                    <span>Email address</span>
                    <span>${dataFromSessionStorage.email}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Phone Number</span>
                    <span>${dataFromSessionStorage.phone}</span>
                </div>

            </div>

        </div>

        <div class="bottom-section">
            <div class="bottom-left-section">
                <div class="profile-detail-group">
                    <span>Gender</span>
                    <span>${dataFromSessionStorage.gender}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Date of birth</span>
                    <span>${dataFromSessionStorage.dob}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Nationality</span>
                    <span>${dataFromSessionStorage.nationality}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Marital status</span>
                    <span>${dataFromSessionStorage.marital_status}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Medical Card Number</span>
                    <span>${dataFromSessionStorage.card_no}</span>
                </div>
            </div>
            <div class="bottom-right-section">
                
                <div class="profile-detail-group">
                    <span>Address</span>
                    <span>${dataFromSessionStorage.address}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Contact Person</span>
                    <span>${dataFromSessionStorage.contact_person}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Relationship</span>
                    <span>${dataFromSessionStorage.relationship}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Contact Number</span>
                    <span>${dataFromSessionStorage.contact_number}</span>
                </div>
                <div class="profile-detail-group">
                    <span>Additional info</span>
                    <span>${dataFromSessionStorage.additional_info}</span>
                </div>
            </div>

        </div>

        <div class="unique-patient-actions" data-html2canvas-ignore="true">
            <button class="printHistory">Print history</button>
            <button class="printDetails">Print details</button>
        
        </div>

`

container.insertAdjacentHTML('beforeend', template)

/**
 * Handle go back to list of patients
 */
const backBtn = document.querySelector('.back-to-patient-list');
backBtn.addEventListener('click', ()=>{
    sessionStorage.removeItem("unique-patient")
    window.location = "./view-patient.html"

})


/**
 * Print details of patient logic
 */
const element = document.querySelector('.patientDetails') //HTML Element to print(All parts of this element that I do not want to print have "data-html2canvas-ignore="true"")

const printDetails = document.querySelector('.printDetails'); //The print trigger
const filename = `${dataFromSessionStorage.firstname + dataFromSessionStorage.middlename + dataFromSessionStorage.lastname}-${Date.now()}` //The unique filename


printDetails.addEventListener('click', ()=>{
    handlePrinting(element, filename)

})