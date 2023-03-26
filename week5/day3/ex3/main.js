const bnt = document.querySelector('#jsstyle')
const bntDiv = document.querySelector('div')
const bdDiv = document.querySelector('body')

bnt.addEventListener("click", bntRespondClick);
bntDiv.addEventListener("click", bntDivRespondClick);
bdDiv.addEventListener("click", bdDivRespond);

function bntRespondClick(e) { 
    alert('BTN is Clicked')
    bnt.style.backgroudColor = 'red'
    // e.stopPropagation()
}    

function bntDivRespondClick(e) { 
    alert("DIV is Clicked")
}    
