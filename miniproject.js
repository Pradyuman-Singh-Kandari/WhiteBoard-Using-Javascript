var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");

var start_background_color = "white";
ctx.fillStyle = start_background_color;
//var restore = [];
//var index = -1;

resize();
function resize() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight - 60 ;
}

var pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; 

  var color = document.getElementById("Drawing").value;

  ctx.beginPath(); 

  ctx.lineWidth = document.getElementById("width").value; 
  ctx.lineCap = "round";
  ctx.strokeStyle = color; 
  ctx.moveTo(pos.x - canvas.offsetLeft, pos.y - canvas.offsetTop); 
  setPosition(e);
  ctx.lineTo(pos.x - canvas.offsetLeft, pos.y - canvas.offsetTop); 

  ctx.stroke();
  
  //if(e.type != "mouseenter")
  //{
  //restore.push(ctx.getImageData(0,0,canvas.width,canvas.height));
  //index += 1;
  //}
  //console.log(restore);
}

function clear_canvas()
{
  ctx.fillStyle = start_background_color;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  //restore = [];
  //index = -1;
}
/*function erase(e)
{
  ctx.beginPath(); 

  ctx.lineWidth = 5;
  ctx.lineCap = "round"; 
  ctx.strokeStyle = "white";

  ctx.moveTo(pos.x, pos.y);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}

function undo()
{
  if(index <= 0)
  {
    clear_canvas();
  }
  else{
    index -= 1;
    restore.pop();
    ctx.putImageData(restore[index],0,0);
  }
}
function saved()
{
  localStorage.setItem(WhiteBoard,canvas.toDataURL());
}
function loaded()
{
  var dataURL = localStorage.getItem(WhiteBoard);
  var img = new Image;
  img.src = dataURL;
  img.onload = function()
  {
    ctx.drawImage(img,0,0);
  }
}
*/
window.addEventListener("resize", resize);


document.addEventListener("mousemove", draw);
//document.addEventListener("mousemove",erase);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
