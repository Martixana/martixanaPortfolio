 var today = new Date ();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18){
        greeting ='Good Evening, ';
    }else if (hourNow > 12){
        greeting ='Good Afternoon, ';
    }else if (hourNow > 0){
        greeting ='Good Morning, ';
    }else{
        greeting ='Hello! ';
    }
document.getElementById('timeOfDay').innerText = greeting + "welcome to the Election Day Countdown homepage!";



$(document).ready(function(){

	$('.my-countdown').countdown({
		until: $.countdown.UTCDate(
			-8, 2016, 10, 7, 0, 0, 0)
	});
});


