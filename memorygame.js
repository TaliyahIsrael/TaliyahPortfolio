//query selector used to select section where cards are located in html doc 
const allCards = document.querySelector("section");
//randomize the order of my cards using this for loop 
var i;
for (i = allCards.children.length; i >= 0; i--) {
    allCards.appendChild(allCards.children[Math.random() * i | 0]);
}

//declared clicked card to be used for weather card colors are matching or not 
let clickedCard = null; //Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.

//declared prevent click to be used to stop user from clicking 
let preventClick = false; 

//User turns/flips
let flips = 0 ;

//Matches found
let matches = 0 ; 

//refresh button 
var reset = document.createElement("button");
reset.textContent = "Reset";
reset.setAttribute("id", "reset");

//timer
var timeleft = 75;
var downloadTimer = setInterval(function(){ 
	if (timeleft <= 0){
		clearInterval(downloadTimer);
    	document.getElementById("time-left").innerHTML = "Finished !";
//time runs out and not all matches found
    	document.getElementById("winner").style.visibility = "visible" ;
    	document.getElementById("winner").textContent = "You Lose! TRY AGAIN!";
//Reset Button    	
    	document.body.appendChild(reset);
		//add event listener of click to button and run the refresh page 
    	document.getElementById("reset").onclick = function() {resetPage()};
    	function resetPage() {
    		document.querySelector("section").textContent = "...."; //this is the alternative to use to allow the colors not to be displayed when refreshing 
    		window.location.reload();
    	}

    } else {
    	document.getElementById("time-left").innerHTML = timeleft + " seconds remaining";
    } 
    timeleft -= 1;}, 1000); //1 sec is 1000millisec - this will take 1 second everytime when subtracting the time
//after clock finishes value of timeleft will go to -1

//When card is clicked run this function - displays color and remove number
function flipCard(e) { //"e" is the object handler (object is made accessible).Must be called onclick(event) in html. p.s 'e' can be whatever name you decide - must you that name throughout
//targeting the card clicked 
	const targetCard = e.currentTarget;
  //console.log(targetCard.className); //test - this prints in the console all the classes assigned to this element when clicked
  //targetCard.className = targetCard.className.replace("cardback", " "); //replaces the class of cardback with nothing - removes it 

//if statement to do nothing if any of these conditions are met - || means or
	if (
		preventClick ||
		targetCard == clickedCard ||
		targetCard.className.includes("done") || 
		timeleft == -1 //this is why I equal to -1 as this is when timer is finished
		) {
		return ;
		} 
//on EACH targetCard replace the class cardback with empty and add done class also and empty the innerHTML which are currently numbers 
	targetCard.className = targetCard.className.replace("cardback", "").trim();
	targetCard.className += " done";
	targetCard.innerHTML = "";


	if (!clickedCard) {  
	//if we havent clicked on a card, keep track of the card and display its color
		clickedCard = targetCard;

	} else if (clickedCard) {
	//if we have clicked card, check if new card does not matches old card via data-color attribute
		if (
			clickedCard.getAttribute("data-color") !== targetCard.getAttribute("data-color")
			) {
			//console.log(clickedCard.getAttribute("data-color")); - check
			//console.log(targetCard.getAttribute("data-color")); -check 
			preventClick = true; // so card can be flipped back and so stay same
			//console.log(preventClick); -check 
			//flips card back around - No MATCH
			setTimeout(function() {
				clickedCard.className = clickedCard.className.replace("done", "").trim() + " cardback"; 
				targetCard.className = targetCard.className.replace("done", "").trim() + " cardback";

			//reset
				clickedCard = null;
				preventClick = false;
				//targetCard.sort(() => 0.5 - Math.random())

			//add 1 to flips each time pair selected
				flips++;
				document.getElementById("flips").innerHTML = flips;

			}, 1000) //1 sec is 1000millisec	
//if we have clicked card, and match is found s
		} else if (clickedCard.getAttribute("data-color") == targetCard.getAttribute("data-color") ) {
			clickedCard = null; // so does not use previous card selected that was found as a match
			matches++
			document.getElementById("match").innerHTML = matches;

			if (matches == 8) {
				document.getElementById("winner").style.visibility = "visible" ;
				timeleft = "Finished"; //so when it goes to 0 it does not run function to chnage text to you lose
				document.getElementById("time-left").style.display = "none"; //gets ride of timer also removes space it takes up
//Reset button
				document.body.appendChild(reset);
		//add event listener of click to button and run the refresh page 
    			document.getElementById("reset").onclick = function() {resetPage()};
    			function resetPage() {
    			document.querySelector("section").textContent = "...."; //this is the alternative to use to allow the colors not to be displayed when refreshing 
    			window.location.reload();}
    		}

		} else {
			clickedCard = null; //reset
		}
}
}





//           STEPS 
//randomizes color to cards - at start game

//allow only 2 cards to be selected 
//flipped card 1 around - reveals color 
//fipped card to around - reveals color

//ask is the two colors the same 
//if yes keep 
//if no flipped back around 

//when all cards match - game done! 



//toggle means based on the attribute assigned in this case class either add this class to it or either remove it if it is already there