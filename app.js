let on =document.querySelector(".on");

let image =document.querySelector(".container img");

let off = document.querySelector(".off");

function onnow() {
    image. src="./image/bulbon.png" 
}
on.addEventListener("click",onnow);


function lightoff() {
    image .src="./image/bulboff.png"
}

off.addEventListener("click",lightoff);





