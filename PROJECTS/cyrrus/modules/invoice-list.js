
import { invoiceBoxes } from "../utils/form-data.js";
import { invoices } from "../utils/data.js";
import { loadChartData as loadInvoiceChartData } from "./invoice-charts.js";
import { handleTogglePopup, generateData } from "../utils/utils.js";
import { handleDropdownToggle } from "./dropdown.js";


handleDropdownToggle();

/**
 * Chat update handler
 * @param {*} chart The chart element
 * @param {*} data The data to change
 */
const updateChart = (chart, data)=>{
    chart.data.datasets[0].data = data;
    chart.update();
}

/**
 * Handler for loading statistics boxes
 */
const loadStatsBoxes = ()=>{

    const invoice_stats_container = document.querySelector('.invoices-stats');
  
    invoiceBoxes.forEach((box, key)=>{
        const statsTemplate = `
            <div class="invoice-unique-stat">
                <div class="invoice-unique-stat-left">
                    <span>${box.title}</span>
                    <span>${box.total}</span>
                </div>
                <div class="invoice-unique-stat-right">
                    <canvas id="invoice-box-${key}" ></canvas>
                </div>
            </div>
        `
        const labels = ["January","February","March","April","May","June","July",
        "August","September","October"];

        invoice_stats_container.insertAdjacentHTML('beforeend', statsTemplate)
        const chart = loadInvoiceChartData(`invoice-box-${key}`, generateData(labels), '199, 89, 89');

        setInterval(()=>{
            updateChart(chart, generateData(labels).values)
        }, 1000)
    })

}

loadStatsBoxes();

/**
 * Handler for Loading table data
 * @param {*} data The data to fill the invoices table
 */
const loadTableData = (data)=>{

    const container = document.querySelector('.current-invoice-table-body');

    container.textContent = '';

    data.forEach((datum, index)=>{
        let statusClass = '';

        switch(datum.status){
            case 'Paid':
                statusClass = 'bg-green'
                break;
            case 'Unpaid':
                statusClass = 'bg-red'
                break;
            default:                
                break;

        }

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
            <button id="toggle-status-${index}" class=${statusClass}><span>${datum.status}</span><i class="icon-sort-down"></i> </button> 
            
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
        
    
        handleTogglePopup(`#toggle-status-${index}`, `#status-list-${index}`)

        const listElements = document.querySelectorAll(`#status-list-${index} p`);
        
        listElements.forEach((el)=>{
            el.addEventListener('click', ()=>{
                document.querySelector(`#toggle-status-${index} span`).textContent = el.textContent;
                
                toggleList.classList.toggle('hidden');

                switch(el.textContent){
                    case 'Paid':
                        toggleBtn.classList = ['bg-green']
                        break;
                    case 'Unpaid':
                        toggleBtn.classList = ['bg-red']
                        break;
                    default:
                        toggleBtn.classList = ['bg-gray']
                        break;
                }


            })
        })

    })
}

loadTableData(invoices);

/**
 * Table header(Filters) handler
 */
const loadTableHeader = ()=>{
    const headerItems = ['All invoices', 'Active', 'Paid', 'Unpaid'];
    const headerLeftContainer = document.querySelector('.invoice-header-left');
    headerItems.forEach((item, key)=>headerLeftContainer.insertAdjacentHTML('beforeend', `<div class="header-item ${key===0 && 'selected'}">${item}</div>`));

    const unique_header_items = document.querySelectorAll('.header-item');

    unique_header_items.forEach((item)=>{
        item.addEventListener('click', ()=>{
            document.querySelector('.header-item.selected').classList.remove('selected');
            item.classList.toggle('selected');

            const data = invoices.filter((invoice)=>invoice.status === `${item.textContent}`)

            loadTableData(data.length === 0 ? invoices : data);
        })

    })


}

loadTableHeader();

/**
 * Search handler to filter table data
 */

const handleSearch = ()=>{
    const searchInput = document.querySelector('.invoice-header-right');
    searchInput.addEventListener('keyup', (e)=>{
        setTimeout(()=>{

            const data = invoices.filter((invoice)=>invoice.names.toLowerCase().includes(e.target.value.toLowerCase()) || invoice.dept.toLowerCase().includes(e.target.value.toLowerCase()));
            loadTableData(data)
        }, 80)
    })
}

handleSearch();


