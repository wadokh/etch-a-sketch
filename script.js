let i=10;
let size=480/i;
const container=document.querySelector('.container');
const grids=document.querySelectorAll('.grid');

function makegrid(numberOfBoxInOneSide,length){
    container.style.gridTemplateColumns=`repeat(${numberOfBoxInOneSide}, 1fr)`;
for (let numb=0;numb<numberOfBoxInOneSide*numberOfBoxInOneSide;numb++){
    const div=document.createElement('div');
    div.classList.add('grid');
    div.style.height=`${length}px`;
    div.style.width=`${length}px`
    container.appendChild(div);
    div.addEventListener('mouseover', function classhover(e){
        e.target.classList.add('bgchange');
    })
}}
makegrid(i,size);
function removegrid(){
    let delChild=container.lastChild;
    while (delChild){
        container.removeChild(delChild);
        delChild=container.lastChild;
    }
}
let btn=document.getElementById('btn');
btn.addEventListener('click',function getsize(){
    let newsize= prompt("enter size of a side. values more than 100 not allow!")
    if (newsize>100){
        alert ("more than 100 not allowed!")
    }
    else{
        removegrid();
        i=newsize;
        size=480/i;
        makegrid(i,size);
    }
})



