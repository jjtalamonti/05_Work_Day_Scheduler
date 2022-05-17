//today's date
var currentDate = moment().format('dddd, MMM Do YYYY')
$("#currentDay").html(currentDate)
var hourNow = moment().format("HH")


$(document).ready(function () {

//hour color indicator
    $(".time-block").each(function () {
        var timeBlock = $(this).attr("id").split("-")[1]
        
        if(hourNow === timeBlock){
            $(this).addClass("present")
            $(this).removeClass("past")
            $(this).removeClass("future")
        }
        else if (hourNow > timeBlock){
            $(this).removeClass("present")
            $(this).addClass("past")
            $(this).removeClass("future")
        }
        else if (hourNow < timeBlock) {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }
    
    })

//save button for user text
    $(".saveBtn").on("click", function () {
        var notes = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, notes)
    })

//grabs from local storage 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
})