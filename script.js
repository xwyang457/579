// JavaScript for generating the calendar
function generateCalendar() {
    const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHtml = '<table><tr><th colspan="7">' + monthNames[month] + ' ' + year + '</th></tr>';
    calendarHtml += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr><tr>';

    for (let day = 1; day <= daysInMonth; day++) {
        let dayOfWeek = new Date(year, month, day).getDay();
        if (day == 1) {
            calendarHtml += '<td colspan="' + dayOfWeek + '"></td>';
        }
        calendarHtml += '<td>' + day + '</td>';
        if (dayOfWeek == 6 && day != daysInMonth) {
            calendarHtml += '</tr><tr>';
        }
    }
    calendarHtml += '</tr></table>';
    document.querySelector('.calendar').innerHTML = calendarHtml;
}

// JavaScript for adding reminders
function addReminder() {
    const reminderText = document.getElementById('reminderText').value;
    const reminderDate = document.getElementById('reminderDate').value;
    // Here you can implement storing the reminder in local storage or displaying it on the page
    console.log('Reminder added:', reminderText, 'on', reminderDate);
}

// JavaScript for upcoming holidays and countdown
const holidays = [
    { name: '新年', date: '2023-01-01' },
    { name: '国庆节', date: '2023-10-01' }
    // Add more holidays as needed
];

function displayUpcomingHolidays() {
    const today = new Date();
    let htmlContent = '';

    for (const holiday of holidays) {
        const holidayDate = new Date(holiday.date);
        const timeDiff = holidayDate - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        htmlContent += '<p>' + holiday.name + ': 还有 ' + daysLeft + ' 天</p>';
    }

    document.querySelector('.upcoming-holidays').innerHTML = htmlContent;
}

// Call the functions to generate the calendar and display upcoming holidays on window load
window.onload = function() {
    generateCalendar();
    displayUpcomingHolidays();
};
