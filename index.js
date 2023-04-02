

let div = document.querySelector("div");
let pera = document.querySelector("p");


pera.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("text",e.target.id);
})

div.addEventListener("dragover",function(e){
    e.preventDefault();
})

div.addEventListener("drop",function(e){
    let id = e.dataTransfer.getData("text");
    div.appendChild(document.getElementById(id));
    e.preventDefault();
})
