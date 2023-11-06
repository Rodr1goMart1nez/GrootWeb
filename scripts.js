const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');
              
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: 'Valor',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['rgb(65, 149, 244)','rgb(65, 149, 244)','rgb(65, 149, 244)','rgb(65, 149, 244)','rgb(65, 149, 244)','rgb(65, 149, 244)']
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        scales: {
            y: {
            beginAtZero: true
        }
        }
    }
});

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: 'Valor',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['orange','orange','orange','orange','orange','orange']
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: 'Valor',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['orange','orange','orange','orange','orange','orange']
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});

new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: 'Valor',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['rgb(65, 149, 244)']
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});