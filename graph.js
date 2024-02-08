function generateSalesData(numDays) {
    const baseSales = 100;
    const volatility = 20; 
    const trendRate = 0.5; 

    const salesData = [];

    let currentSales = baseSales;

    for (let day = 1; day <= numDays; day++) {
        const trend = trendRate * day;
        const randomVolatility = Math.random() * volatility;
        currentSales = baseSales + trend + randomVolatility;
        currentSales = Math.round(currentSales * 100) / 100;
        salesData.push(currentSales);
    }

    return salesData;
}

const salesData_1 = generateSalesData(40);
const salesData_2 = generateSalesData(40);


const data = {
    labels: Array.from({ length: 40 }, (_, i) => `Day ${i + 1}`),
    datasets: [
        { 
            label: 'Line 1',
            data: salesData_1,
            backgroundColor: '#F04922', 
            borderColor: '#F04922', 
            borderWidth: 2, 
            fill: false
        },
        {
            label: 'Line 2',
            data: salesData_2,
            backgroundColor: '#FFDAC9', 
            borderColor: '#FFDAC9', 
            borderWidth: 2, 
            fill: false
        }
    ]
};

const options = {
    scales: {
        y: {
            max: 160,
            min: 80,
            beginAtZero: true,
            grid: {
                display: false 
            },
            ticks: {
                stepSize: 50,
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
            labels: {
                color: 'black',
                font: {
                    size: 14
                }
            }
        }
    }
};

// Create a chart instance
const chartContainer = document.getElementById('canvas');
const canvas = document.getElementById('myChart')
const ctx = canvas.getContext('2d');

canvas.height = 430;
canvas.width = chartContainer.clientWidth;

const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});