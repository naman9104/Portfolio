// script.js
function generateQR() {
  const input = document.getElementById("linkInput").value;
  const qrImg = document.getElementById("qrImage");

  if (input.trim() === "") {
    alert("Please enter some text or a link.");
    return;
  }

  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

  qrImg.src = url;
}
function downloadQR() {
  const qrImg = document.getElementById("qrImage");

  if (qrImg.src === "") {
    alert("QR Code not generated yet!");
    return;
  }

  const link = document.createElement('a');
  link.href = qrImg.src;
  link.download = "qrcode.png";  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
