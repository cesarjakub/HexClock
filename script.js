let mainClock = document.querySelector("#Mian_Clock");
const date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let time = "#"+hours+""+min+""+sec;

console.log(time);