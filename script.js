const reloj = setInterval(()=>{
const fecha = new Date();

const $ = selector => document.querySelector(selector);

$('.reloj').innerHTML = fecha.toLocaleTimeString();
$('.fecha').innerHTML = fecha.toDateString();
},)
