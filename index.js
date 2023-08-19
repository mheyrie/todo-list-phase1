const input = document.querySelector(".todo-input");
const list = document.querySelector(".sample-list");

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