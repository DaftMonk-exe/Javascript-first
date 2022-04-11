let countEl=document.getElementById("count-el")
let head=document.getElementById("Sent")


 let count = 0



function increment(){
    count+= 1
    countEl.innerText = count
    
}
function save(){
    let total = count+" - ";
     head.textContent+=total
    countEl.innerText=0;
    count=0;
}
