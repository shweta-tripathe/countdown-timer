var newDate = ("december 8, 2021");

function countDown(){
let fut = new Date(newDate);
let pre = new Date();
let sub = fut - pre;
let days = Math.floor(sub / (1000 * 60 * 60 * 24));
let hours = Math.floor((sub % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((sub % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((sub % (1000 * 60)) / (1000));

document.getElementById("demo1").innerHTML = days + "d " +" "+ hours + "h "
+"  " + minutes + "m " + "  " + seconds + "s ";
}
 
countDown();
setInterval(countDown, 1000);
