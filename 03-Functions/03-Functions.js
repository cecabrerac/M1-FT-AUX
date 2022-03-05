function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

if (time.length !== 10) return false;
let hour = Number(time.slice(0,2));
if (hour >= 13) return false;
let min = time.slice(3,5);
if (Number(min) >= 60 ) return false;
let sec = time.slice(6,8);
if (Number(sec) >= 60 ) return false;

let ampm = time.slice(8,10);

if (ampm === "AM") {
    hour = hour.toString();
    if (hour.length <= 1) hour = '0' + hour;
    if (hour === "12") hour = '00';
    return (hour + ":" + min + ":" + sec);
} else {
    
    hour = hour + 12;
    hour = hour.toString();
    if (hour === '24') hour = '12';
    return (hour + ":" + min + ":" + sec);
    }
}

module.exports = {
    timeConversion
}