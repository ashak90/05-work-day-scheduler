// Variable for the date and time
var currentDate = moment().format("dddd, D MMMM");
var currentHour = moment().format("H A")

$("#currentDay").text(currentDate);

//Display current time every second
setInterval(function () {
  var d = new Date();

  var n = d.toLocaleTimeString();
  $("#currentTime").text(n);
}, 1000);

//Time of Day Defined
var workdaySchedule = [
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
  { time: "6 PM", event: "" },
  { time: "7 PM", event: "" },
  { time: "8 PM", event: "" },
  { time: "9 PM", event: "" },
];

//Function to create the structure of the schedule

workdaySchedule.forEach(function (hourBlock,index) {
  var timeLabel = hourBlock.time;
  var blockColor = colorRow(timeLabel);
  var row =
    '<div class= "hour-block" id="' +
    index +
    '"><div class="row no-gutters input-group entry-time"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
    timeLabel +
    '</div><textarea class="form-control ' +
    blockColor +
    '">' +
    hourBlock.event +
    '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save fa-3x"></i></button></div></div></div>';

  $(".container").append(row);
  console.log("Index is: ")
})

//Function that defines the color of each row 

function colorRow(time) {
  var scheduleNow = moment(currentHour, "H A");
  var scheduleEntry = moment(time, "H A");
  console.log(currentHour)
  console.log(time)
  if (scheduleNow.isBefore(scheduleEntry) === true) {
    return "future";
    console.log(scheduleNow, scheduleEntry)
  } else if (scheduleNow.isAfter(scheduleEntry) === true) {
    return "past";
  } else {
    return "present";
  }
}

//Local Storage

$(".saveBtn").on("click", function () {
  var blockID = parseInt(
    $(this)
      .closest(".hour-block")
      .attr("id")
  );

  var userEntry = $.trim(
    $(this)
      .parent()
      .siblings("textarea")
      .val()
  );
  
  console.log("The current time is: " + blockID)
  console.log(userEntry)

  workdaySchedule[blockID].event = userEntry;
  localStorage.setItem(blockID, userEntry);

  // localStorage.setItem("workDay", JSON.stringify(workdaySchedule));


})