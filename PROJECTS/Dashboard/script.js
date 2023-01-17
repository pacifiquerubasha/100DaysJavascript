
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

const patientDetails = [
    {
        name:"Lady Mary",
        profile:"./assets/profile.jpg",
        age:50,
        status:'Pending'
    },
    {
        name:"Lady Mary",
        profile:"./assets/profile.jpg",
        age:50,
        status:'On Recovery'
    },{
        name:"Lady Mary",
        profile:"./assets/profile.jpg",
        age:50,
        status:'Rejected'
    },{
        name:"Lady Mary",
        profile:"./assets/profile.jpg",
        age:50,
        status:'Recovered'
    },
]



patientDetails.forEach((patient)=>{
    const template = `    
        <div class="pat-info">
            <div class="pat-image">
                <img
                    src=${patient.profile}
                    alt="patient's profile"
                    class=""
                />
            </div>
            <div class="pat">
                <p>
                    <span class="pat-name">${patient.name}</span><br /><span
                        class="pat-age"
                        >${patient.age} Years</span
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

const doctorsDetails = [
    {
        name: 'Dr. Stephany',
        image: "./assets/profile.jpg",
        rating: 4.2,
        title: 'Dentist',
        address:`795 Folsom Ave, Suite 600<br />
        San Francisco, CADGE 94107`
    },
    {
        name: 'Dr. Lil Mbwa',
        image: "./assets/profile.jpg",
        rating: 4.2,
        title: 'Gynecologist',
        address:`795 Folsom Ave, Suite 600<br />
        San Francisco, CADGE 94107`
    },{
        name: 'Dr Louis Ng',
        image: "./assets/profile.jpg",
        rating: 4.2,
        title: 'Cardiologist',
        address:`795 Folsom Ave, Suite 600<br />
        San Francisco, CADGE 94107`
    },
    {
        name: 'Dr. Stephany',
        image: "./assets/profile.jpg",
        rating: 4.2,
        title: 'Dentist',
        address:`795 Folsom Ave, Suite 600<br />
        San Francisco, CADGE 94107`
    },
]

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



const toggleNavBtn = document.querySelector('.toggle-nav');
const navigation = document.querySelector('.navigation');
const dashboard = document.querySelector('.dashboard');
const main = document.querySelector('.main');

toggleNavBtn.addEventListener('click', ()=>{
    navigation.classList.toggle('toggled-nav-menu');
    
    if(toggleNavBtn.classList.contains('icon-align-right'))
        toggleNavBtn.classList.replace('icon-align-right', 'icon-align-left')
    else toggleNavBtn.classList.replace('icon-align-left', 'icon-align-right')
})


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