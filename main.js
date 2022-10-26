`use strict`

const display = document.querySelector('.display');

var count=0;
function inc(){
    count += 1;
    display.innerText=count;
}

function clr(){
    count=0;
    display.innerText=count;
}

function dec(){
    count -= 1;
    display.textContent= count;
}
