// const timeE = document.querySelector(".time");
// const dateE = document.querySelector(".date");


// function forTime(date){
//     let hour = date.getHours() % 12 || 12;
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     let isAM = date.getHours() < 12;

//     return `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
// }

// function forDate(date){
//     let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     return`${Day[date.getDay()]}, ${Month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
// }

// setInterval(() => {
//     let now = new Date();

//     timeE.textContent = forTime(now);
//     dateE.textContent = forDate(now);

// }, 200);