

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

export const loadChartData = (id, data, colorValues)=>{

    const lineChart = new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{ 
            data: data.values,
            label: "Recovered Patient",
            borderColor: `rgba(${colorValues})`,
            borderWidth:1.5,
            backgroundColor: `rgba(${colorValues},0.1)`,
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