let countElt=document.getElementById("count-el")
let count=0
let saveEl=document.getElementById("save-el")
let saveNew=document.getElementById("save-btn")
function increment(){
    count+=1
    countElt.textContent=count}
  

function save(){
    let countStr=count+"-"
    countElt.textContent=0
    count=0
saveEl.textContent+= countStr
console.log(count)}








     

