var time = $("#currentDay");
var textAreaEl = $("#appointment");
var hours = [$("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];

//time
var today = moment().format("llll");
var rn = moment().hour();
time.text(today);

// WHEN I refresh the page THEN the saved events persist
//timeblock color 
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

// saveBtn
$(".saveBtn").on("click", function() {
    var input = $(this).siblings("textarea");
    localStorage.setItem(input.parent().attr("id"), JSON.stringify(input.val()));
    console.log("save button working?");
})


//deleteBtn
$(".deleteBtn").on("click", function() {
    var textArea = $(this).siblings("textarea");
    textArea.val("");
    localStorage.removeItem(textArea.parent().attr("id"));
    console.log("delete button working?");
})


