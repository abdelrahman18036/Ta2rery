let qrcode = document.getElementById("image");
let qrtext =document.getElementById("text");
let qrbtn = document.getElementById("btn");
qrbtn.addEventListener("click", generateQR)

function generateQR() {
   let size = "1000x1000";
   let data = qrtext.value;
   let baseURL ="https://api.qrserver.com/v1/create-qr-code/";
   let url = `${baseURL}?data=${data}&size=${size}`;
   qrcode.src=url;
}
