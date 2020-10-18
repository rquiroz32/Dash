//load the document then do things
$(document).ready(function () {

    ///////////////// ASSIGNMENT CODE /////////////////////////////////////
    var currentDay = moment().format("[Today is] dddd, MMMM Do YYYY")
    var currentHour = moment().format('HH')


    // Update current day element with the current day
    $("#currentDay").text(currentDay);

    //for each loop to assign styling to time blocks   
    $(".description").each(function () {

        // Grab the value of the time attribute on the prev element to THIS description
        var timeblockHour = $(this).prev().attr("time")
        var locallyStored = JSON.parse(localStorage.getItem(timeblockHour))
        console.log(timeblockHour)

        //set timeblockHour to past
        if (timeblockHour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        //set timeblockHour to past
        else if (timeblockHour > currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future")
        }

        //set timeblockHour to past
        else if (currentHour === timeblockHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }


        if (locallyStored === null) {
            return
        }
        
        else {
            $(this).empty();
            $(this).text(locallyStored)
        }
    });// closes each function



    // Click event to save the content of the textarea to local storage
    $(".saveBtn").on("click", function () {
        var locallyStoredEvent = localStorage.getItem($(this).prev().prev().attr('time'))
        var timeBlockText = $(this).prev().val().trim();
        
        console.log(locallyStoredEvent)
        
        locallyStoredEvent = JSON.stringify(timeBlockText)
        localStorage.setItem($(this).prev().prev().attr('time'), locallyStoredEvent)
        

    }) // closes save on click









    // added a clear calendar button for fun
    $("#clearCal").on("click", function () {

        localStorage.clear();
        location.reload();

    })// closes clear on click




});// CLOSES THE DOC READY FUNCTION