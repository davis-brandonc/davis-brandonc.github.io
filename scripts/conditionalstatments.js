function conditionalFunction() {
var hours = new Date().getHours();
if(hours<12)
document.write("Good morning from Idaho Falls, Idaho<br />AND");
else
document.write("Good Afternoon from Idaho Falls, Idaho<br />AND");
var day = new Date().getDay();
if(day<3)
document.write("<br />The week is still young!<br />");
else
document.write("<br />This week is coming to an end!<br />");
}