
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
let nam = document.querySelector(".name");

function clock(){

    let date = new Date();

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    let hrValue = "rotateZ("+hh+(mm/12)+"deg)";
    let mnValue = "rotateZ("+mm+"deg)";
    let scValue = "rotateZ("+ss+"deg)";

    hr.style.transform = hrValue;
    mn.style.transform = mnValue;
    sc.style.transform = scValue;
}
setInterval(clock,100);
