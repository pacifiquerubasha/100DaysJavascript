
import { invoiceBoxes } from "../utils/form-data.js";
import { invoices } from "../utils/data.js";

const loadStatsBoxes = ()=>{

    const invoice_stats_container = document.querySelector('.invoices-stats');
    
    invoiceBoxes.forEach((box)=>{
        const statsTemplate = `
            <div class="invoice-unique-stat">
                <div class="invoice-unique-stat-left">
                    <span>${box.title}</span>
                    <span>${box.total}</span>
                </div>
                <div class="invoice-unique-stat-right">
                    X
                </div>
        
            </div>
        `
    
        invoice_stats_container.insertAdjacentHTML('beforeend', statsTemplate)
    })

}

loadStatsBoxes();


const loadTableHeader = ()=>{
    const headerItems = ['All invoices', 'Active', 'Paid', 'Unpaid'];
    const headerLeftContainer = document.querySelector('.invoice-header-left');
    headerItems.forEach((item, key)=>headerLeftContainer.insertAdjacentHTML('beforeend', `<div class="header-item ${key===0 && 'selected'}">${item}</div>`));

    const unique_header_items = document.querySelectorAll('.header-item');


    unique_header_items.forEach((item)=>{
        item.addEventListener('click', ()=>{
            document.querySelector('.header-item.selected').classList.remove('selected');
            item.classList.toggle('selected');
        })

    })


}

loadTableHeader();


const loadTableData = (data)=>{

    const container = document.querySelector('.current-invoice-table');

    data.forEach((datum, index)=>{
        const template = `
        <div class="current-invoice-table-row">
            <div class="small-column">${datum.id}</div>
            <div class="normal-column">${datum.created}</div>
            <div class="big-column">
                <img src=${datum.profile_pic} alt="">
                <p>${datum.names}</p> 
            </div>
            <div class="normal-column">${datum.dept}</div>
            <div class="normal-column">${datum.total}</div>
            <div class="normal-column">
            <button id="toggle-status-${index}"><span>${datum.status}</span><i class="icon-sort-down"></i> </button> 
            
            <div id="status-list-${index}" class="change-status-list hidden">
                    <p>Unpaid</p>
                    <p>Paid</p>
                    <p>Active</p>
            </div>
            </div>
            <div class="normal-column">${datum.updated}</div>

        </div>
        
        `;

        container.insertAdjacentHTML('beforeend', template);

        const toggleBtn = document.getElementById(`toggle-status-${index}`);
        const toggleList = document.getElementById(`status-list-${index}`);
        toggleBtn.addEventListener('click', ()=> {
            console.log("CLICKED")
            toggleList.classList.toggle('hidden');
        })

    })
}

loadTableData(invoices);

