const inputBox = document.getElementById("input-box");
const elementslist = document.getElementById("elements-list");

function addTask(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    elementslist.appendChild(li);
    inputBox.value = "";
    saveData();
}

elementslist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("tick");
    }
}, false);

function saveData(){
    localStorage.setItem("data", elementslist.innerHTML);
}