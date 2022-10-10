function ChangeStyleSheet(sheet) {
document.getElementById('stylesheet').setAttribute('href', sheet);
let bodystyle = document.getElementById("style");
let bouton = document.getElementById("btn");
bouton.addEventListener("click", function(){
p.style.backgroundColor="red";
},false);

} 
let pStyle= document.getElementById("style");
let bouton = document.getElementById("btn");
bouton.addEventListener("click", function(){
pStyle.style.backgroundColor="red";
pStyle.style.color = "white";
pStyle.style.border = "dashed 2px black"; 
pStyle.style.padding = "5px"
},false);