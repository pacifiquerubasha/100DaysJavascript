
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
