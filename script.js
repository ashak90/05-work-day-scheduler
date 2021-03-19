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

var timeOfDay = [
  { time: "9 AM", event: " " },
  { time: "10 AM", event: " " },
  { time: "11 AM", event: " " },
  { time: "12 PM", event: " " },
  { time: "1 PM", event: " " },
  { time: "2 PM", event: " " },
  { time: "3 PM", event: " " },
  { time: "4 PM", event: " " },
  { time: "5 PM", event: " " },
  { time: "6 PM", event: " " },
];

// for (let i=0; i<timeOfDay.length; i++) {
//     // var newRow = $("row");
//     // var hourDisplay = $(".hour").text(timeOfDay[i] + ".00");
//     var newRow = $("<div class = 'row'>");
//     var hourDisplay = $("<div class='col-med-1 hour'>").text(
//         timeOfDay[i] + "   "
//       );
//     var taskInput = $("<textarea class = 'description col-sm-10 time-block'>");
//     taskInput.attr("data-hour", timeOfDay[i]);
//     console.log("data")
//     var saveBtn = $("<button class= 'col-sm-1 save-btn'>")
//     var saveIcon = $("<i class='far fa-save'>")
//     saveBtn.append(saveIcon)
//     // saveBtn.attr("data-hour", timeOfDay[i]);

//     newRow.append(hourDisplay, taskInput,saveBtn);
//     $(".container").append(newRow);

//     // if (taskInput.attr("data-hour")<currentTime){
//     //     taskInput.addClass("past")
//     // } else if (taskInput.attr("data-hour")==currentTime){
//     //     taskInput.addClass("present")
//     // } else {
//     //   taskInput.addClass("future")
//     // }
//     console.log((timeOfDay[i]));
// }

timeOfDay.forEach(function (hourBlock, index) {
  var timeLabel = hourBlock.time;
  var blockColor = colorRow(timeLabel);
  var row =
    '<div class= "hour-block" id ">' +
    // index +
    '<div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
    timeLabel + 
    '</div><textarea class="form-control ' +
		blockColor +
		'">' +
		hourBlock.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save fa-3x"></i></button></div></div></div>';

    $(".container").append(row);
})

function colorRow (time) {
  var scheduleNow = moment(currentHour, "H A");
  var scheduleEntry = moment(time,"H A");
  console.log(currentHour)
  console.log (time)
  if (scheduleNow. isBefore(scheduleEntry) === true) {
    return "future";
    console.log(scheduleNow, scheduleEntry)
  } else if (scheduleNow.isAfter(scheduleEntry)===true) {
    return "past";
  } else {
    return "present";
  }
}