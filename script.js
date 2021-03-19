// var currentHour = moment().format("LT");
var currentDate = moment().format("dddd, D MMMM");
var currentHour = moment().format("H A")
// var currentHour = 13;

$("#currentDay").text(currentDate);
// $("#currentTime").text(currentHour+":00");
//Display current time every second
  setInterval(function () {
    var d = new Date();
   
    var n = d.toLocaleTimeString();
    // console.log(n)
    $("#currentTime").text(n);
  }, 1000);
// console.log(currentHour);

var timeOfDay = ["09:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM", "6:00 PM"];

for (let i=0; i<timeOfDay.length; i++) {
    // var newRow = $("row");
    // var hourDisplay = $(".hour").text(timeOfDay[i] + ".00");
    var newRow = $("<div class = 'row'>");
    var hourDisplay = $("<div class='col-med-1 hour'>").text(
        timeOfDay[i] + "   "
      );
    var taskInput = $("<textarea class = 'description col-sm-10 time-block'>");
    taskInput.attr("data-hour", timeOfDay[i]);
    var saveBtn = $("<button class= 'col-sm-1 save-btn'>")
    var saveIcon = $("<i class='far fa-save'>")
    saveBtn.append(saveIcon)
    // saveBtn.attr("data-hour", timeOfDay[i]);

    newRow.append(hourDisplay, taskInput,saveBtn);
    $(".container").append(newRow);

    if (taskInput.attr("data-hour")<currentHour){
        taskInput.addClass("future")
    } else if (taskInput.attr("data-hour")==currentHour){
        taskInput.addClass("present")
    } else 



    console.log((timeOfDay[i]));


}