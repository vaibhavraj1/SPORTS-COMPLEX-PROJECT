// $("#button1").click(function(){
//     $("#email").text("");
//     $("#email").val("");
// });

// $("#button2").click(function(){
//     $("#otp").text("");
//     $("#otp").val("");
// });

$("#button3").click(function(){
    window.location.href="datetime.html";
});

$("#button4").click(function(){
    window.location.href="cancel.html";
});

// $("#slot").click(function(){
//     window.location.href="slotbooking.html";
// });

$("#confirm").click(function(){
    alert("Your booking has been confirmed!!");
    window.location.href="home.html";
});

$("#tt").click(function(){
    $(this).addClass("selected");
    $("#badminton").removeClass("selected");
    $("#shuttles").addClass("disp");
    $("#ball").removeClass("disp");
});

$("#badminton").click(function(){
    $(this).addClass("selected");
    $("#tt").removeClass("selected");
    $("#shuttles").removeClass("disp");
    $("#ball").addClass("disp");
});

$("#sport").click(function(){
    $("#equipment").removeClass("disp");
});

$("#yesforequipment").click(function(){
    $("#racquet").removeClass("disp");
    $("#shuttleball").removeClass("disp");
    $("#companion").addClass("disp");
    $("#note").addClass("disp");
});

$("#noforequipment").click(function(){
    $("#companion").removeClass("disp");
    $("#racquet").addClass("disp");
    $("#shuttleball").addClass("disp");
    $("#note").removeClass("disp");
});

$("#shuttleball").click(function(){
    $("#companion").removeClass("disp");
    $("#note").removeClass("disp");
});

$("#companion").click(function(){
    $("#confirm").removeClass("disp");
});

$("#time input").click(function(){
    $("#sports").removeClass("disp");
    // $("#lunchtime").addClass("disp");
});

// $("#calender td").click(function(){
//     $("#times").removeClass("disp");
// });

$("#resend").click(function(){
    alert("OTP is sent again!!   Enter New OTP Now.");
    $("#resend").addClass("clicked");
});

// $(".lunch").click(function(){
//     $("#lunchtime").removeClass("disp");
//     $("#equipment").addClass("disp");
//     $("#racquet").addClass("disp");
//     $("#shuttleball").addClass("disp");
//     $("#companion").removeClass("disp");
//     $("#note").removeClass("disp");
// });

$(".lunch").click(function(){
    $("#sports").addClass("disp");
    alert("This time slot is not available!!");
});

// $("#yes").click(function(){
//     alert("Your Booking has been confirmed !!");
//     $("#details").removeClass("disp");
//     $("#finalDate").text("Date : " + )
// })







$("ul").on("click",".can",function(event){
    alert("Are You Sure You want to Cancel this booked slot?");
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();  
    });
    $("#home").removeClass("disp");
    // alert("Selected slot has been cancelled successfully!!");
});

$("#home").click(function(){
    window.location.href="home.html";
});






