
import { patients as patientDetails, doctorsDetails } from "../utils/data.js";


/**
 * Loading dashboard statistics data 
 */

const stats = document.querySelector('.stats');
const statsDetails = [
    {
        title:"Total Patient",
        total:783000,
        chartInfo:'+4%',
        icon:"heart-empty",
        color:"red"
    },
    {
        title:"Doctor",
        total:76,
        chartInfo:'-4%',
        icon:"stethoscope",
        color:"green"
    },
    {
        title:"Appointment",
        total:76,
        chartInfo:'-4%',
        icon:"calendar",
        color:"blue"
    },
    {
        title:"Hospital Earning",
        total:56000,
        chartInfo:'+4%',
        icon:"dollar",
        color:"purple"
    }
]

statsDetails.forEach((stat)=>{
    const amount = stat.total > 1000 ?` ${Math.floor(stat.total/1000)}k` : stat.total;

    const template = `
            <div class="stat-box bg-${stat.color}">
                <div class="stat-box-left ">
                    <div class="stat-title">${stat.title}</div>
                    <div class="stat-data">
                        <div class="amount">${stat.icon=== 'dollar' ? `$${amount}` : amount}</div>
                        <div class="stat-chart">
                            <div class="chart">X</div>
                            <span>${stat.chartInfo}</span>
                        </div>
                    </div>
                </div>
                <div class="stat-box-right">
                    <i class="icon-${stat.icon}"></i>
                </div>
            </div>
    `;

    stats.insertAdjacentHTML("beforeend", template)

})


/**
 * Loading sample patient data for dashboard
 */
const patientsContainer = document.querySelector('.patients');


patientDetails.forEach((patient)=>{
    const template = `    
        <div class="pat-info">
            <div class="pat-image">
                <img
                    src=${patient.picture_url}
                    alt="patient's profile"
                    class=""
                />
            </div>
            <div class="pat">
                <p>
                    <span class="pat-name">${patient.firstname}&nbsp;${patient.lastname}</span><br /><span
                        class="pat-age"
                        >${Math.floor((new Date() - new Date(patient.dob))/1000/3600/24/365)} Years</span
                    >
                </p>

                <p class="pat-status ${patient.status === "On Recovery" ? 'recovery' : patient.status.toLowerCase()}">${patient.status}</p>
            </div>
        </div>
        <div class="divider"></div>
        `
    patientsContainer.insertAdjacentHTML("beforeend", template)
    
})


/**
 * Loading sample doctors data for dashboard
 */
const doctorsContainer = document.querySelector('.doctor-card');

doctorsDetails.forEach((doctor)=>{
    const template = `    
            <div>
                <div class="doc-image">
                    <img src=${doctor.image} alt="image" class="" />

                    <div class="ratingBox">
                        <i class="fa-solid fa-star fa-2xs"></i>
                        <span>${doctor.rating}</span>
                    </div>
                </div>

                <p class="doc-name">${doctor.name}</p>
                <p class="doc-title">${doctor.title}</p>
                <p class="doc-address">
                   ${doctor.address}
                </p>
                <div class="container-icon">
                    <div class="socials">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div class="socials">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div class="socials">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        `
    doctorsContainer.insertAdjacentHTML("beforeend", template)
    
})


/**
 * Handles Display/Hide of year list for the first dashboard chart
 */
const toggleYearList = document.querySelector('.header-year');
const yearList = document.querySelector('.yearsList')

toggleYearList.addEventListener('click', ()=>{
    yearList.classList.toggle('toggle-year-list')
})

const listOfYears = document.querySelectorAll('.unique-year');

listOfYears.forEach((year)=>{
    year.addEventListener('click', ()=>{
        yearList.classList.toggle('toggle-year-list');
        toggleYearList.firstElementChild.textContent = year.textContent;
    })
})