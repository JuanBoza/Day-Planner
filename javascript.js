
// current date 
function startTime() {
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
}
// current date 

// local storage for 5am thru 12pm works

var saveBtn = document.querySelectorAll("button");

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

// local storage for 5am thru 12pm works 