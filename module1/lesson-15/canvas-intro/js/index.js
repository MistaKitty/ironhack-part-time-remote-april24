const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(30, 10, 150, 100);
ctx.clearRect(0,0, 300, 300)

ctx.fillStyle = "rgb(255 10 20 / 50%)";
ctx.fillRect(60, 40, 100, 100);
ctx.clearRect(0,0, 300, 300)

ctx.fillStyle = "rgb(0 10 20 / 50%)";
ctx.fillText("Canvas is fun sometimes :)", 150, 150)
ctx.clearRect(0,0, 300, 300)

const img = new Image(); 

img.addEventListener("load", () => {
  // drawImage
  ctx.drawImage(img, 100, 100, 100, 100);
});

img.src = "./images/shiba.jpg";