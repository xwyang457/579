function updateClock() {
    const now = new Date();
    const utc5 = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) - (5 * 3600000));
    document.getElementById('time').innerHTML = utc5.toLocaleString();
    setTimeout(updateClock, 1000);
}

const holidays = [
    { name: 'Christmas', date: '2023-12-25' },
    { name: 'New Year', date: '2024-01-01' }
    // Add more holidays as needed
];

function displayHolidays() {
    const today = new Date();
    let htmlContent = '';
    for (const holiday of holidays) {
        const holidayDate = new Date(holiday.date);
        const timeDiff = holidayDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        htmlContent += '<li>' + holiday.name + ': ' + daysLeft + ' days left</li>';
    }
    document.getElementById('holidayList').innerHTML = htmlContent;
}

function addHoliday() {
    const holidayName = document.getElementById('holidayName').value;
    const holidayDate = document.getElementById('holidayDate').value;
    holidays.push({ name: holidayName, date: holidayDate });
    displayHolidays();
}

window.onload = function() {
    updateClock();
    displayHolidays();
};

