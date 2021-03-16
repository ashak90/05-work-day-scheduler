var currentHour = moment().format("LT")
var currentDate = moment().format("dddd, D MMMM");

$("#currentDay").text(currentDate);
$("#currentTime").text(currentHour);
console.log(currentHour)