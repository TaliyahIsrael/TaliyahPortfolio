//DIGITAL CLOCK SETTINGS 
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  } 
}

currentTime();  /* calling currentTime() function to initiate the process */

function clockchange() {
  document.getElementById("hide").remove();
  document.getElementById("clock").remove();
  document.getElementById("change").remove();

  var para = document.createElement("p");
  var node = document.createTextNode("This is a 12 hour analogue clock");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);

  document.getElementById("clock-canvas").style.display = "initial";
}


//ANALOGUE CLOCK SETTING
var element = document.getElementById("clock-canvas");
var graphic = element.getContext("2d");
  var radius = element.height / 2;
  graphic.translate(radius, radius);
  radius = radius * 0.90
  setInterval(startClock, 1000);
  //we are calling startClock every second which makes the clock look like its moving. 
   
  function startClock() {
    drawFace(graphic, radius);
    drawNumbers(graphic, radius);
    drawTime(graphic, radius);
  }
   
  function drawFace(graphic, radius) {
    var grad;
    graphic.beginPath();
    graphic.arc(0, 0, radius, 0, 2*Math.PI);
    graphic.fillStyle = 'purple';  //background color of the clock
    graphic.fill();
   
    graphic.stroke();
    graphic.beginPath();
    graphic.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    graphic.fillStyle = '#ffc107b5'; //number colors 
    graphic.fill();
  }
   
  function drawNumbers(graphic, radius) {
    var angle;
    var number;
    graphic.font = radius*0.15 + "px arial";
    graphic.textBaseline="middle";
    graphic.textAlign="center";
    for(number = 1; number < 13; number++){
      angle = number * Math.PI / 6;
      graphic.rotate(angle);
      graphic.translate(0, -radius*0.85);
      graphic.rotate(-angle);
      graphic.fillText(number.toString(), 0, 0);
      graphic.rotate(angle);
      graphic.translate(0, radius*0.85);
      graphic.rotate(-angle);
    }
  }
   
  function drawTime(graphic, radius){
      var currentTime = new Date();
      var hour = currentTime.getHours();
      var minute = currentTime.getMinutes();
      var second = currentTime.getSeconds();
   
      hour=hour%12;
      hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
      drawHand(graphic, hour, radius*0.5, radius*0.07);
   
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      drawHand(graphic, minute, radius*0.8, radius*0.07);
   
      second=(second*Math.PI/30);
      drawHand(graphic, second, radius*0.9, radius*0.02);
  }
  function drawHand(graphic, position, length, width) {
      graphic.beginPath();
      graphic.lineWidth = width;
      graphic.lineCap = "round";
      graphic.moveTo(0,0);
      graphic.rotate(position);
      graphic.lineTo(0, -length);
      graphic.stroke();
      graphic.rotate(-position);
  }

  