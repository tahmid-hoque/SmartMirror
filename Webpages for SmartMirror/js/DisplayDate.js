// document.addEventListener('DOMContentLoaded', function() {
//     getDate();
// }, false);

function getDate() {
    var date = new Date();
    var daynumber = date.getDay();
    var dateOfMonth = date.getDate();
    var month = date.getMonth();
    console.log(month);
    var year = date.getFullYear();
    var daysInTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthsInYear = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day;

    day = daysInTheWeek[daynumber];
    month = monthsInYear[month];
    let dateOut = day + " " + dateOfMonth + " " + month + " " + year;
    $("#date").html(dateOut);
    //document.getElementById('date').innerHTML = day + ":" + daynumber + ":" + month+ ":" + year ;

}
