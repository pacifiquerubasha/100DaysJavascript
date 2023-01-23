

//Chart options(Reusable options)
const hideAxis = {
    display:false,
    grid: {
      display: false
    },
    ticks: {
      display: false
  }
}

const chartOptions = {
    scales: {
        x: hideAxis,
        y: hideAxis
      
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
    }
  }

export const loadInvoiceChartData = (id, data)=>{

    const lineChart = new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{ 
            data: data.values,
            label: "Recovered Patient",
            borderColor: "rgba(199, 89, 89)",
            borderWidth:1.5,
            backgroundColor: "rgba(199, 89, 89,0.1)",
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 0
          }
        ]
      },
      options: {...chartOptions}
    });

    return lineChart;
  }