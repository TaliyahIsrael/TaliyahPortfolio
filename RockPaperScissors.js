	//reset the game - need to load this before as 
	//You need to take your function out of the onLoad/onReady otherwise it is placed inside of another scope and your button cannot access the function
	function reset() {
		window.location.reload(true);
	}



// A $( document ).ready() block. will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function() {
//functions for the beginnning of the game:
	function paper() {
		//Paper
		$("#title").text("Paper!").show();
		$("#paper-one").show();
		$(".rpc").slideUp(1000);
	}

	function scissors() {
		//Scissors 
		$("#title").text("Scissors!").show();
		$("#scissors-one").show();
		$(".rpc").slideUp(1000);
	}

	function rock() {
		$("#rpc-two").hide(); //hide intial game options  from user for intro to go 
		//Rock 
		$("#title").text("Rock!").show();
		$("#rock-one").show();
		$(".rpc").slideUp(1000);
		setTimeout(() => {paper();}, 1500); //1.5 second delay 
		setTimeout(() => {scissors();}, 2800); //2.8 second delay 
		setTimeout(() => {startGame();}, 3500); // 3.5 second delay 
	}
	rock(); //call intro for game to start

//start game - this is the beginning for it 
	function startGame() {
		document.getElementById("rpc-container").style.display = "none"; //hide the intro just displayed from user
		$("#rpc-two").slideDown(1500).show(); //show game options

		//create instruction text for user and diplay it in the choosen div tag 
		var playerOneOptions = document.createElement("span");
		playerOneOptions.setAttribute("id", "instructions");
		playerOneOptions.appendChild(document.createTextNode("Please pick your choice of rock, paper or scissors :")) ;
		document.getElementsByTagName("div")[2].appendChild(playerOneOptions);

		checkWin(); // call this function to run

	}

	

//check of player or computer wins 
	function checkWin () {
		//computer options 
		var computerOptions = [$("#rock"), $("#paper"), $("#scissors")] ;
		var randomComputerChoice = Math.floor(Math.random() * computerOptions.length + 1); //random number between 1 and computerOptions.length which is (3)
		console.log(randomComputerChoice); //shows the number choosen by computer in the console 

	
		//Player one option
		var choiceMade ; //rock =1, paper=2 or scissors=3 
		//players choice to be defined after click


		//User click their choice then.....

		//check if both were rock 
		$("#rock").click(function() {
			choiceMade = 1;
			computerChoiceText();
			playerChoiceText();
			$(".rpc-next").off('click'); // remove click function to stop the player changing choice 
			$(".rpc-next").removeClass('hover'); // remove hover for rest of options
			$(".rpc-next").css("cursor", "not-allowed");//remove cursor as pointer and set bak to default 
			$("button").css("visibility", "visible");//show reset button

			if (choiceMade == randomComputerChoice) {
				$("h1").text("Draw");
			} else if (randomComputerChoice == 2) {
				$("h1").text("Loser - Computer Wins");
			} else {
				$("h1").text("Winner");
			}
		}); 

		//check if both were paper
		$("#paper").click(function() {
			choiceMade = 2;
			computerChoiceText();
			playerChoiceText();
			$('.rpc-next').off('click'); // remove click function to stop the player changing choice 
			$('.rpc-next').removeClass('hover'); // remove hover for rest of options
			$(".rpc-next").css("cursor", "not-allowed");//remove cursor as pointer and set bak to default 
			$("button").css("visibility", "visible");//show reset button

			if (choiceMade == randomComputerChoice) {
				$("h1").text("Draw");
			} else if (randomComputerChoice == 3) {
				$("h1").text("Loser - Computer Wins");
			} else {
				$("h1").text("Winner");
			}
		}); 

		//check if both were scissors
		$("#scissors").click(function() {
			choiceMade = 3;
			computerChoiceText();
			playerChoiceText();
			$('.rpc-next').off('click'); // remove click function to stop the player changing choice 
			$('.rpc-next').removeClass('hover'); // remove hover for rest of options
			$(".rpc-next").css("cursor", "not-allowed");//remove cursor as pointer and set bak to default 
			$("button").css("visibility", "visible");//show reset button

			if (choiceMade == randomComputerChoice) {
				$("h1").text("Draw");
			} else if (randomComputerChoice == 1) {
				$("h1").text("Loser - Computer Wins");
			} else {
				$("h1").text("Winner");
			}
		});

		//displays the computer choice to the user 
		function computerChoiceText() {
		if (randomComputerChoice == 1) {
				$("#cpu").text(" ROCK")
			} else if (randomComputerChoice == 2) {
				$("#cpu").text(" PAPER") 
			} else {
				$("#cpu").text(" SCISSORS") 
			}

		$("#cpu").css("color", "red"); //change the computer choice text color 
		$("#cpu").css("font-size", "20px"); //change the computer choice font size
		}

		//displays the players choice to the user 
		function playerChoiceText() {
		if (choiceMade == 1) {
				$("#player").text(" ROCK")
			} else if (choiceMade == 2) {
				$("#player").text(" PAPER") 
			} else {
				$("#player").text(" SCISSORS") 
			}

		$("#player").css("color", "red"); //change the computer choice text color 
		$("#player").css("font-size", "20px"); //change the computer choice font size
		}

	}//end of checkWin function

}); // end of docment ready 
