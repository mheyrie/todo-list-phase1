const input = document.querySelector(".todo-input");
const list = document.querySelector(".sample-list");
const timeE = document.querySelector(".time");
const dateE = document.querySelector(".date");

function createTask(){
    if (input.value === ""){
        alert("You are required to input a task!");

    } else{
        let li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        //creating a new element SPAN for the X symbol so as to close completed task
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }

    input.value = "";
}

// EventListner to check or uncheck/delete completed task
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


//Adding Date and Time fucntion 
function forTime(date){
    let hour = date.getHours() % 12 || 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let isAM = date.getHours() < 12;

    return `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
}

function forDate(date){
    let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return`${Day[date.getDay()]}, ${Month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
    let now = new Date();

    timeE.textContent = forTime(now);
    dateE.textContent = forDate(now);

}, 200);
