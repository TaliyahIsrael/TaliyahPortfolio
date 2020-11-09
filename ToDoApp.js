// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('UL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName == 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("theUL").appendChild(li);
  }
  document.getElementById("userInput").value = ""; // clears the input field 

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); // Unicode Character 'MULTIPLICATION SIGN'
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}





/*function addButton() {
	let ulTag = document.getElementById("theUL");
	let input = document.getElementById("userInput");
	let newLi = document.createElement("li");

	newLi.setAttribute("id", input.value);
	let inputText = document.createTextNode(input.value);
	newLi.appendChild(inputText);
	ulTag.appendChild(newLi);
}

function deleteButton(){
	let ulTag = document.getElementById("theUL");
	let input = document.getElementById("userInput");
	let item = document.getElementById(input.value);
	ulTag.removeChild(item);
}*/
