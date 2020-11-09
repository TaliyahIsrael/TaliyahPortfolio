//Allows the x button and element to be created  
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
	span.appendChild(txt);
	close[i].appendChild(span);
  }


// Create a new list item when clicking on the "Add" button
function runit() {
  var textdata = document.createElement("li");
  var inputValue = document.getElementById("new item").value;
  var inputValue2 = document.getElementById("new item 2").value;
  var inputValue3 = document.getElementById("new item 3").value;
  var t = document.createTextNode(inputValue);
  var u = document.createTextNode(inputValue2);
  var v = document.createTextNode("(£)" + inputValue3);

  var a = document.createElement("p");
  var b = document.createElement("p");
  var c = document.createElement("p");
  c.setAttribute("class", "summing");


  textdata.appendChild(a).appendChild(t); 
  textdata.appendChild(b).appendChild(u);
  textdata.appendChild(c).appendChild(v);

  if (inputValue === '') {
    alert("Error has occured! - Fill in the expense field");
  } else if (inputValue2 === '') {
  	alert("Error has occured! - Fill in the date field");
  } else if (inputValue3 ==='') {
  	alert("Error has occured!- Fill in the amount field");
  } else {
  	document.getElementById("tableinfo").appendChild(textdata);
  }
  
  // this is the x button to remove information just submitted
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7" ); // Unicode Character 'MU LTIPLICATION SIGN'
  span.className = "close";
  span.appendChild(txt);
  textdata.appendChild(span);

  for (i = 0; i < close.length; i++) {
  	close[i].onclick = function() {
  		var div = this.parentElement;
  		div.style.display = "none";
  	}
  }

//put inputs into a array 
  //var p = document.getElementsByClassName("summing").value;
  
  var fisrtValue = Number(document.getElementById('lastNumber').value); 
  var inputs = Number(document.getElementById('new item 3').value);
  var f = Number(document.getElementById('total').innerHTML);


  if (fisrtValue === 0) {
    document.getElementById('total').innerHTML = inputs;
    document.getElementById('total').innerHTML = f + inputs;
    //clears all of the input fields when submitted  - #resets input fields 
    document.getElementById("new item").value = "";
    document.getElementById("new item 2").value = "";
    document.getElementById("new item 3").value = "";

  } else if (fisrtValue > 0) {
    document.getElementById('total').innerHTML = inputs;
    document.getElementById('total').innerHTML = f + inputs;
    //clears all of the input fields when submitted  - #resets input fields 
    document.getElementById("new item").value = "";
    document.getElementById("new item 2").value = "";
    document.getElementById("new item 3").value = "";
  } else  {
    alert("Error has occured!- Refresh the page");
  } 

}


//document.getElementById("total").innerHTML = "Expense Total (£):" +;
