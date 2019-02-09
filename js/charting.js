var barChart = document.querySelector('#bar-chart').getContext('2d');
var doughnutChart1 = document.querySelector('#doughnut-chart-1').getContext('2d');
var doughnutChart2 = document.querySelector('#doughnut-chart-2').getContext('2d');
var doughnutChart3 = document.querySelector('#doughnut-chart-3').getContext('2d');

var chart = new Chart(barChart, {
  type: 'bar', 
  data: {
    labels:['S','M','T','W','T','F','S','S',
      'M','T','W','T','F','S'],
    datasets:[{
      label: "Applicants",
      data: [
        50,230,300,370,180,280,110,
        30,300,390,250,220,180,80 ],
      backgroundColor: 'lightgray'
    }]
  },
  options:{
    legend:{
      display: false,
    },
    responsive: false,
    maintainAspectRation: true,
  }
});

var doughnutChart1 = new Chart(doughnutChart1,{
  type: 'doughnut',
  data: {
    labels: ['Applicants'],
    datasets: [{
      data: [3154, 846],
      backgroundColor: ['red', 'lightgray'],
      borderWidth: 0
    }],
  },
  options: {
    legend:{
      display: false,
    },
    responsive: false,
    cutoutPercentage: 85,
    rotation: .5 * Math.PI
  }
});

var doughnutChart2 = new Chart(doughnutChart2,{
  type: 'doughnut',
  data: {
    labels: ['Interviews'],
    datasets: [{
      data: [1546, 2454],
      backgroundColor: ['orange', 'lightgray'],
      borderWidth: 0
    }]
  },
  options: {
    legend:{
      display: false,
    },
    responsive: false,
    cutoutPercentage: 85,
    rotation: .5 * Math.PI
  }
});

var doughnutChart3 = new Chart(doughnutChart3,{
  type: 'doughnut',
  data: {
    labels: ['Forwards'],
    datasets: [{
      data: [912,3088],
      backgroundColor: ['orange', 'lightgray'],
      borderWidth: 0
    }]
  },
  options: {
    legend:{
      display: false,
    },
    responsive: false,
    cutoutPercentage: 85,
    rotation: .5 * Math.PI
  }
});