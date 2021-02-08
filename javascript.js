
/* Optional Date formats 

const m = moment(); 
console.log(m.toString()); 
console.log(m.format("[The current date and time is] dddd MMM Mo YYYY")); 
console.log(m.format("L")); 
console.log(eventMoment); 

*/ 

var todayDate = moment().format('dddd, MMM Do YYYY'); 
$("#currentDay").html(todayDate); 

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime); 

$(".time-row").each(function () {
    var blockTime = parseInt($(this).attr("id"));
    var currentHour = moment().hours();
    
    if ( blockTime < currentHour) {
      $(this).addClass("past");
    } 
    else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });


localStorageFunction();

function localStorageFunction() {
    $("textarea")[0].value = localStorage.getItem("textarea1");
    $("textarea")[1].value = localStorage.getItem("textarea2");
    $("textarea")[2].value = localStorage.getItem("textarea3");
    $("textarea")[3].value = localStorage.getItem("textarea4");
    $("textarea")[4].value = localStorage.getItem("textarea5");
    $("textarea")[5].value = localStorage.getItem("textarea6");
    $("textarea")[6].value = localStorage.getItem("textarea7");
    $("textarea")[7].value = localStorage.getItem("textarea8");
} 

$("button").on("click", function(event) { 
    event.preventDefault(); 
    var textArea1 = $("textarea")[0].value;
    var textArea2 = $("textarea")[1].value; 
    var textArea3 = $("textarea")[2].value; 
    var textArea4 = $("textarea")[3].value; 
    var textArea5 = $("textarea")[4].value; 
    var textArea6 = $("textarea")[5].value; 
    var textArea7 = $("textarea")[6].value; 
    var textArea8 = $("textarea")[7].value; 
    
    localStorage.setItem("textarea1", textArea1);
    localStorage.setItem("textarea2", textArea2);
    localStorage.setItem("textarea3", textArea3);
    localStorage.setItem("textarea4", textArea4);
    localStorage.setItem("textarea5", textArea5);
    localStorage.setItem("textarea6", textArea6);
    localStorage.setItem("textarea7", textArea7);
    localStorage.setItem("textarea8", textArea8);
    
}); 









