
const labels = [
  {
    type:"monthly",
    labels:["January","February","March","April","May","June","July",
    "August","September","October","November","December"],
    data1:[500,200,600,350,650,850,780,400,600,300, 400, 200],
    data2:[250,400,200,300,200,450,400,780,230,530, 360, 950]
  },

  {
    type:"weekly",
    labels:['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'],
    data1:[500, 600, 650, 400,300, 400, 200],
    data2:[250, 300, 200,450, 230, 530, 950]
  },

  {
    type:"today",
    labels:["08","09","10","11","12","13","14",
    "15","16","17","18","19"],
    data1:[6,10,20,15,5,2,8,40,8,10, 2, 9],
    data2:[2,10,20,7,20,10,10,9,23,14, 10, 9]
  },

]

let dataToShow = labels[0]


const lineChart = new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: dataToShow.labels,
        datasets: [{ 
            data: dataToShow.data1,
            label: "Recovered Patient",
            borderColor: "rgba(199, 89, 89)",
            borderWidth:1.5,
            backgroundColor: "rgba(199, 89, 89,0.1)",
            fill: true
          }, { 
            data: dataToShow.data2,
            label: "New Patient",
            borderColor: "rgba(0, 128, 0)",
            borderWidth:1.5,
            backgroundColor: "rgba(0, 128, 0, 0.1)",
            fill: true        
          }
        ]
      },
      options: {
          scales: {
              x: {
                grid: {
                  display: false
                }
              },
              
          },
  
      }
    });

  // console.log("LLLL", lineChart.data.datasets[0].data)

const updateChart = (data)=>{
  lineChart.data.labels = data.labels;
  lineChart.data.datasets[0].data = data.data1;
  lineChart.data.datasets[1].data = data.data2;

  lineChart.update();
}

const filterBtns = document.querySelectorAll('.filterBtn');

filterBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.btn-green').classList.remove('btn-green')
        btn.classList.add('btn-green');

        switch(btn.id){
          case "month":
            dataToShow = labels[0]
            break;
          case "week":
            dataToShow = labels[1]
            break;
          case "today":

            dataToShow = labels[2]
            break;

        }

      updateChart(dataToShow)
    })
})



new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["06", "07", "08", "09", "10"],
      datasets: [
        {
          label: "Income",
          backgroundColor: ["#3e95cd"],
          data: [2478,5267,734,784,433],
          borderRadius: 5,
          barPercentage:0.3
        },
        {
            label: "Expenses",
            backgroundColor: ["rgba(0, 128, 0)"],
            data: [2478,5267,734,784,433],
            borderRadius: 5,
            barPercentage:0.3

          }
      ]
    },
    options: {
      legend: { 
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Total revenue'
      },

      scales: {
        x: {
          grid: {
            display: false
          }
        },
        
      }
    }
});


