
import { patients as patientDetails, doctorsDetails } from "../utils/data.js";
import { handleDropdownToggle } from "./dropdown.js";
import { loadChartData } from "./invoice-charts.js";
import { generateData, cyrrusNavigate } from "../utils/utils.js";


handleDropdownToggle(true);

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

statsDetails.forEach((stat, key)=>{
    const amount = stat.total > 1000 ?` ${Math.floor(stat.total/1000)}k` : stat.total;
    
    const labels = ["January","February","March","April","May","June","July",
    "August","September","October"];

    const data = generateData(labels);
    const difference = ((data.values[data.values.length-1]-data.values[0])*100/data.values[0]).toFixed(1);

    const template = `
            <div class="stat-box bg-${stat.color}">
                <div class="stat-box-left ">
                    <div class="stat-title">${stat.title}</div>
                    <div class="stat-data">
                        <div class="amount">${stat.icon=== 'dollar' ? `$${amount}` : amount}</div>
                        <div class="stat-chart">
                            <canvas id="dashboard-stat-${key}" class="dasboard-stat-chart"></canvas>
                            <span>${difference > 0 ? '+' : ''}${difference}%</span>
                        </div>
                    </div>
                </div>
                <div class="stat-box-right">
                    <i class="icon-${stat.icon}"></i>
                </div>
            </div>
    `;

   
    stats.insertAdjacentHTML("beforeend", template)

    loadChartData(`dashboard-stat-${key}`, data, '256, 256, 256')

})



/**
 * Loading sample patient data for dashboard
 */
const patientsContainer = document.querySelector('.patients');


patientDetails.forEach((patient, key)=>{
    const template = `    
        <div class="pat-info" id="patient-info-${key}">
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

    const recentPatient = document.querySelector(`#patient-info-${key}`);

    recentPatient.addEventListener('click', ()=>{
        localStorage.setItem("unique-patient", JSON.stringify(patient));

        if(localStorage.getItem("unique-patient"))
            cyrrusNavigate('../app/unique-patient.html')
    })
  

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

