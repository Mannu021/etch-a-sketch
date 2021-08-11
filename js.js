let container=document.getElementById("gride");
let block=function(mclass){
    return `<div id=${mclass}></div>`;
}
let gridSize=window.prompt("size of grid",10);
for(let i=0;i<gridSize*gridSize;i++){
    container.innerHTML=block("grid");
}
