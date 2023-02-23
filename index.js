let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");
let homeSum = 0;
let awaySum = 0;

function homeOne(){
    homeSum += 1;
    homeEl.innerText = homeSum;
}
function homeTwo(){
    homeSum += 2;
    homeEl.innerText = homeSum;
}
function homeThree(){
    homeSum += 3;
    homeEl.innerText = homeSum;
}
function guestOne(){
    awaySum += 1;
    awayEl.innerText = awaySum;
}
function guestTwo(){
    awaySum += 2;
    awayEl.innerText = awaySum;
}
function guestThree(){
    awaySum += 3;
    awayEl.innerText = awaySum;
}
function reset(){
    homeSum = 0;
    awaySum = 0;
    homeEl.innerText = 0;
    awayEl.innerText = 0;
}