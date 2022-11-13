//global variables
var dayTimeEl = $("#currentDay");
// var currentHourEl = $("#currentHour")
var textAreaEl = $("#appointment");
var hours = [$("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];

//time
var today = moment().format("llll");
var time = moment().format("LT");
console.log(time);
var rn = time.startOf('hour');
dayTimeEl.text(today);
// currentHourEl.text(rn);

// WHEN I refresh the page THEN the saved events persist
//Each timeblock is color coded to indicate whether it is in the past, present, or future
// currentTime = moment().hour();
currentTime = rn; 

function timeBlockColor() {
    for (i = 0; i < hours.length; i++) {
        var hoursEl = hours[i].attr("id");
        hours[i].children("textarea").val(JSON.parse(localStorage.getItem(hoursEl)));
        if (hoursEl < currentTime) {
            hours[i].children("textarea").addClass("past");
            console.log("the past");
        }
        else if (hoursEl > currentTime) {
            hours[i].children("textarea").addClass("future");
            console.log("future");
        } else {
            hours[i].children("textarea").addClass("present");
        }
    }
}

timeBlockColor();

// Save button sets information in local storage
$(".saveBtn").on("click", function() {
    var userInput = $(this).siblings("textarea");
    localStorage.setItem(userInput.parent().attr("id"), JSON.stringify(userInput.val()));
    console.log("save button working?");
})


//A clear button next to the save button removes info from local storage
$(".deleteBtn").on("click", function() {
    var textArea = $(this).siblings("textarea");
    textArea.val("");
    localStorage.removeItem(textArea.parent().attr("id"));
    console.log("delete button working?");
})


