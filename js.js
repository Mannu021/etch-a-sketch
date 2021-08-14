function creategrid(size){
let container = document.createDocumentFragment();
for(i=0;i<size*size;i++){
    let el=document.createElement("div");
    el.setAttribute("id","gride");
    container.appendChild(el);
}
document.getElementById("contain").appendChild(container);
document.getElementById("contain").style.gridTemplateColumns=`repeat(${size},20px)`;

}
creategrid(30);



document.getElementById("contain").addEventListener("mouseover", function(e) {
    if(e.target && e.target.id=="gride"){
        e.target.style.backgroundColor ="red";
    }
});