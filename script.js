const date_opt = document.getElementById("date");
const day_opt = document.getElementById("day");
const month_opt = document.getElementById("month");
const year_opt = document.getElementById("year");
const time = document.getElementById("time");
var present_date = new Date();
let display_Calander = () => {
  let dates = present_date.getDate();
  let months = present_date.getMonth();
  let years = present_date.getFullYear();

  let date = dates < 10 ? `0${dates}` : `${dates}`;

  let Days_of_Weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let NameOfMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = Days_of_Weeks[present_date.getDay()];
  let month = NameOfMonths[months + 1];
  // Updating Text Nodes
  date_opt.textContent = date;
  day_opt.textContent = day;
  month_opt.textContent = month;
  year_opt.textContent = years;
};

let update_timer = () => {
  var present_date = new Date();
  let hours = present_date.getHours();
  let minutes = present_date.getMinutes();
  let seconds = present_date.getSeconds();

  let hour = hours < 10 ? `0${hours}` : hours;
  let minute = minutes < 10 ? `0${minutes}` : minutes;
  let second = seconds < 10 ? `0${seconds}` : seconds;
  time.textContent = `${hour}:${minute}:${second}`;
};

let timer = setInterval(() => {
  update_timer();
}, 1000);

display_Calander();
