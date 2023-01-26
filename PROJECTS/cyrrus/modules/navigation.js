
const navigationData = [
    {
        id:4,
        icon:'fa-money',
        title:'Invoices',
        isExpendable:true,
        subItems:[
            {
                label:'Generate invoice', 
                link:"../app/invoice.html"
            },
            {
                label:'View invoices', 
                link:"../app/view-invoices.html"
            },
            
        ]
    },
    {
        id:3,
        icon:'fa-hospital-user',
        title:'Patients',
        isExpendable:true,
        subItems:[
            {
                label:'Register Patient', 
                link:"../app/patient.html"
            },
            {
                label:'View Patients', 
                link:"../app/view-patient.html"
            },
            
        ]
    },
    {
        id:2,
        icon:'fa-user-doctor',
        title:'Staff',
        isExpendable:true,
        subItems:[
            {
                label:'Add Staff', 
                link:"../app/staff.html"
            },
            {
                label:'View Staffs', 
                link:"../app/view-staff.html"
            },
            
        ]
    },
    {
        id:1,
        icon:'fa-chart-line',
        title:'Dashboard',
        isExpendable:false,
        link:'/'
    },
    
]

/**
 * Loading navigation items in the navigation section
 */
const navContainer = document.querySelector('.nav-container');

navigationData.forEach((item, index)=>{
    const template = `  

        <a key=${index} ${!item.isExpendable && `href= ${item.link}` } class="expandable" id=${item.id}>
            <div>
                <i class="fa-solid ${item.icon}"></i>
                <span>${item.title}</span>
            </div>
            ${item.isExpendable ? `<i class="fa-solid fa-angle-right" id="expandable-icon-${item.id}"></i>` : ''}

        </a>

        ${item.subItems ? (
            `<div class="sub-items hidden" id="sub-item-${item.id}">
                ${item.subItems.map((item, i)=>{
                    return `<a href="${item.link}">${item.label}</a>`
                }).join("")
                }
            </div>`
            ) : ""
        }
        `
    navContainer.insertAdjacentHTML("afterbegin", template)
    
})


/**
 * Handles click on navigation items to expand them
 */
const expandables = document.querySelectorAll('.expandable');

expandables.forEach((expandable, i)=>{
    expandable.addEventListener('click', ()=>{
        const expandableSubitem = document.getElementById(`sub-item-${expandable.id}`);

        expandableSubitem.classList.toggle('hidden');
        expandable.classList.toggle('expandable-green');
        
        const icon = document.getElementById(`expandable-icon-${expandable.id}`);

        icon.classList.contains('fa-angle-right') ? 
        icon.classList.replace('fa-angle-right', "fa-angle-down"):
        icon.classList.replace('fa-angle-down', "fa-angle-right")

    })
})


/**
 * Toggle navigation
 */
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