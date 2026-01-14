// Chart Configuration & dummy data

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCharts();
});

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-tab]');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active classes
            navItems.forEach(n => n.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));

            // Add active class
            item.classList.add('active');
            const tabId = item.getAttribute('data-tab');
            document.getElementById(`view-${tabId}`).classList.add('active');
        });
    });
}

function initCharts() {
    // --- 1. Individual: Radar Chart ---
    const ctxRadar = document.getElementById('chartRadar').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['目標釐清', '任務執行', '作法改善 (SOP)', '超越目標', '風險補償'],
            datasets: [{
                label: 'Arthur Dent',
                data: [4, 5, 2, 3, 4],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 5
                }
            }
        }
    });

    // --- 1. Individual: Stacked Bar (Value Trend) ---
    const ctxStack = document.getElementById('chartStack').getContext('2d');
    new Chart(ctxStack, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: '風險盤 (Risk)',
                    data: [10, 15, 5, 8],
                    backgroundColor: '#fab1a0',
                },
                {
                    label: '資產盤 (Asset)',
                    data: [5, 5, 20, 35],
                    backgroundColor: '#55efc4',
                },
                {
                    label: '基本盤 (Base)',
                    data: [80, 85, 85, 90],
                    backgroundColor: '#74b9ff',
                },
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: { stacked: true },
                y: { stacked: true }
            }
        }
    });

    // --- 2. Team: Scatter Plot (Matrix) ---
    const ctxMatrix = document.getElementById('chartMatrix').getContext('2d');
    new Chart(ctxMatrix, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '員工分佈',
                data: [
                    { x: 80, y: 80 }, { x: 90, y: 75 }, // Captains (High/High)
                    { x: 30, y: 80 }, { x: 20, y: 70 }, // Dreamers (Low/High)
                    { x: 85, y: 20 }, { x: 95, y: 15 }, { x: 80, y: 30 }, // Soldiers (High/Low)
                    { x: 20, y: 20 }  // Passenger
                ],
                backgroundColor: 'rgba(9, 132, 227, 0.6)'
            }]
        },
        options: {
            scales: {
                x: {
                    title: { display: true, text: 'Execution (基本盤)' },
                    min: 0, max: 100
                },
                y: {
                    title: { display: true, text: 'Innovation (增值盤)' },
                    min: 0, max: 100
                }
            },
            plugins: {
                annotation: {
                    // Note: Annotation plugin not loaded, using static explanation in UI
                }
            }
        }
    });

    // --- 3. Org: Area Chart (Asset Accumulation) ---
    const ctxArea = document.getElementById('chartArea').getContext('2d');
    new Chart(ctxArea, {
        type: 'line',
        data: {
            labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
            datasets: [{
                label: 'SOP 總分',
                data: [120, 150, 200, 220, 350, 410],
                fill: true,
                backgroundColor: 'rgba(85, 239, 196, 0.2)',
                borderColor: 'rgb(85, 239, 196)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });

    // --- 3. Org: Bar Chart (Cost of Misalignment) ---
    const ctxWaterfall = document.getElementById('chartWaterfall').getContext('2d');
    new Chart(ctxWaterfall, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: '失準成本 ($)',
                data: [50000, 120000, 30000, 10000], // Q2 high
                backgroundColor: '#ff7675'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: { display: true, text: '執行與釐清的落差 (Gap between Execution & Clarification)' }
            }
        }
    });
}
