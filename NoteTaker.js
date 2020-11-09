// This is the code to create the x button and its attributes  
var close = document.getElementsByClassName("close"); // create class element  

var i; // i is undefined 
for (i = 0; i < close.length; i++) { //for loop used here
	var div = document.createElement("div"); //creates div element
	var xText = document.createTextNode("(x)"); // create text 
	div.appendChild(xText); //set the text to the span element created
	div.className = "close";  //puts the text node to the span element
	close[i].appendChild(div);
}


//hide dummy note already in html 	
function closeButton() {
	document.getElementById("single-note").style.display = "none";
}

//code to take place on click of add button
function addButton() {
	document.getElementById("info").style.display = "none"; //gets rid of info at top of page 

//This is for the dummy note already in html for aid 
	var allNotes = document.getElementById("all-notes"); //get all notes in wrapper by ID 

//create container for one note
	var singleNote = document.createElement("div"); //creates div element 
	singleNote.setAttribute("id", "single-note"); //set attribute ID to created div element 
//title for note
	var title = document.createElement("div"); //create div element 
	title.setAttribute("id", "title"); // sets attribute of ID for created div element 
	title.setAttribute("contenteditable", "true"); //sets attribute of contenteditable for created div element
	var titleText = document.createTextNode("Title"); //create text 
	title.appendChild(titleText);
//text for note
	var mainText = document.createElement("div"); //create div element
	mainText.setAttribute("id", "main-text"); //sets attribute of ID for created div element 
	mainText.setAttribute("contenteditable", "true"); //sets attribute of contenteditable for created div element
	var mainTextNote = document.createTextNode("Click here to add note text"); //create text
	mainText.appendChild(mainTextNote);


//New notes that will be added
	var closeBut = document.createElement("div"); // create span element 
	closeBut.className = "close"; // sets an class attribute to span element created  
	var xText = document.createTextNode("(x)"); // create text 
	closeBut.appendChild(xText); //set the text to the span element created 
	closeBut.appendChild(title); //add title to these new added notes
	closeBut.appendChild(mainText);
	
	
	singleNote.appendChild(closeBut); //puts all elements into one note
	singleNote.appendChild(title); //puts all elements into one note
	singleNote.appendChild(mainText); //puts all elements into one note

	allNotes.appendChild(singleNote); //group for all notes created

	//This is code to get rid of create note 
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}

}