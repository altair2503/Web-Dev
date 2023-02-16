// 1
// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//
//     return days[date.getDay()];
// }
//
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );


//2
// function getLocalDay(date) {
//
//     let day = date.getDay();
//
//     if (day == 0) {
//         day = 7;
//     }
//
//     return day;
// }

//3
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
//
// alert( getLastDayOfMonth(2023, 2) );


//4
function getSecondsToTomorrow() {
    let now = new Date();

    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}

alert(getSecondsToTomorrow())
