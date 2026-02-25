const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const date = document.querySelector('#date');

const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();

const currentYear = today.getFullYear();
const currentMonth = months[today.getMonth()];
const currentDay = days[today.getDay()];
const currentDate = today.getDate();

year.textContent = currentDate;
month.textContent = currentMonth;
day.textContent = currentDay;
date.textContent = currentDate;


