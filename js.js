function creategrid(size){
let container = document.createDocumentFragment();
reset();
for(i=0;i<size*size;i++){
    let el=document.createElement("div");
    el.setAttribute("id","gride");
    container.appendChild(el);
}
let reset_flag=false;
document.getElementById("container").appendChild(container);
document.getElementById("container").style.gridTemplateColumns=`repeat(${size},${(500/(size))}px)`;
document.getElementById("container").style.gridTemplaterows=`repeat(${size},${(500/(size))}px)`;
}
function reset(){
    document.getElementById("container").innerHTML='';
    let el=document.createElement("p");
    if(!color() && !size()){ 
    let el=document.createElement("p");
    el.appendtext("please choose grid size and color")
    }

}

function play(){
creategrid(size());
color();
document.getElementById("container").addEventListener("mouseover", function(e) {
    if(e.target && e.target.id=="gride"){
        e.target.style.backgroundColor =`${color()}`;
    }
});
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function color(){
    radiobtn1= document.getElementById("black");
    radiobtn2 = document.getElementById("white");
    radiobtn3 = document.getElementById("rainbow");
    if(radiobtn1.checked)return "black";
    else if(radiobtn2.checked)return "white";
    else if(radiobtn3.checked)return getRandomColor();
    else return swal.fire("please select grid color");
}
function size(){
    radiobtn1= document.getElementById("small");
    radiobtn2 = document.getElementById("medium");
    radiobtn3 = document.getElementById("large");
    if(radiobtn3||radiobtn2||radiobtn1)reset_flag=true;
    if(radiobtn1.checked)return 30;
    else if(radiobtn2.checked)return 20;
    else if(radiobtn3.checked)return 15;
    else return swal.fire("please select grid size");
}




