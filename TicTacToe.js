//prevent any jQuery code from running before the document is finished loading (is ready)
			$(document).ready(function(){
//variables 
				var move = 1; //Player 1 or 2 
				var play = true; //Game to continue 
				var total = 0; //all box elements are filled 
				var winnerType1 = "X"; 
				var winnerType2 = "O"; 

//option for 2 player button clicked		
				$("#gameTypeOne").click(function() {
					$(".x").remove(); //remove content out of start box - player options
					$("#start").append("<p id='playerStarts'>Player One : 'X' - STARTS!</p>");
					setTimeout(() => {enterGame();}, 3000);
					
					twoPlayer();
					
				})
/*option for 1 player button clicked	
				$("#gameTypeTwo").click(function() {
					enterGame();
					onePlayer();		
					
				})*/

//restart the game on restart/play button clicked 
				$("#restart").click(function() {
					restartGame();
				}) 


						//...FUNCTIONS....//
// restart the game  
				function restartGame(){
					window.location.reload(true);
				}
//To enter the game
				function enterGame() {
					$("#start").hide();
					document.getElementsByTagName("h1")[0].style.visibility = "visible";
					$("h1").attr('id', "titlefx");
					document.getElementsByTagName("p")[0].style.display = "block";
				
				}	

//vs another person option
				function twoPlayer() {
					$(".box").click(function() {
						if ($(this).text() == "" && move == 1 && play == true && total < 9) {
							$(this).append("X");
							move += 1;
							play = true;
							total++
							checkWin();
							draw();
						} else if ($(this).text() == "" && move == 2 && play == true && total < 9) {
							$(this).append("O");
							move -= 1;
							play = true;
							total++
							checkWin();
							draw (); 
						} /*else {
							$("#start").show();
							$(".x").remove();
							document.getElementById("drawText").style.display = "block"; 
							$(".box").empty() ;

							setTimeout(() => { restartGame(); }, 3000);
						}*/

						})
					} 

//Draw 
				function draw() {
					if (total == 9 && $(".box") != "" && move == 2) {
						$("#start").show(); // shows starting box - player options
						$(".x").remove(); //remove content out of start box - player options 
						document.getElementsByTagName("p")[3].style.display = "none"; //hide which player starts text 
						document.getElementById("drawText").style.display = "block"; //shows Draw!
						$(".box").text("") ; //clears content inside the game 

						setTimeout(() => { restartGame(); }, 3000); // 3 second delay for resetting of game
					}
				}

//Player One Winner 
				function playerOneWins() {
					$("#start").show(); // shows starting box - player options
					document.getElementById("drawText").style.display = "none"; //hides Draw!
					$("#playerStarts").hide(); //hide which player starts text 
					document.getElementById("playerOneWinner").style.display = "block"; //shows player one wins  
					$(".x").remove(); //remove content out of start box - player options 


					setTimeout(() => { restartGame(); }, 3000); // 3 second delay for resetting of game
					}

//Player Two Winner
				function playerTwoWins() {
					$("#start").show(); // shows starting box - player options
					document.getElementById("drawText").style.display = "none"; //hides Draw!
					$("#playerStarts").hide(); //hide which player starts text 
					document.getElementById("playerTwoWinner").style.display = "block"; //shows player two wins!
					$(".x").remove(); //remove content out of start box - player options 

					setTimeout(() => { restartGame(); }, 3000); // 3 second delay for resetting of game
					}



//vs the computer option
				function onePlayer() {
					alert("1 player");

				}	

// decide the winner				
				function checkWin() {
					var rowMatch = {
						rowOne : [$(".col-1 .row-1").text(), $(".col-2 .row-1").text(), $(".col-3 .row-1").text() ],

						rowTwo : [$(".col-1 .row-2").text(), $(".col-2 .row-2").text(), $(".col-3 .row-2").text() ],

						rowThree : [$(".col-1 .row-3").text(), $(".col-2 .row-3").text(), $(".col-3 .row-3").text() ],
					};

					var columnMatch = {
						columnOne : [$(".col-1 .row-1").text(), $(".col-1 .row-2").text(), $(".col-1 .row-3").text()], 

						columnTwo : [$(".col-2 .row-1").text(), $(".col-2 .row-2").text(), $(".col-2 .row-3").text()], 

						columnThree : [$(".col-3 .row-1").text(), $(".col-3 .row-2").text(), $(".col-3 .row-3").text()],
					};

					var diagonalMatch = {
						diagonalOne : [$(".col-1 .row-1").text(), $(".col-2 .row-2").text(), $(".col-3 .row-3").text()], 

						diagonalTwo : [$(".col-1 .row-3").text(), $(".col-2 .row-2").text(), $(".col-3 .row-1").text()]

					};

					//rows rule
					if (rowMatch.rowOne[0] == "X" && rowMatch.rowOne[1] == "X" && rowMatch.rowOne[2] == "X" || 
						rowMatch.rowTwo[0] == "X" && rowMatch.rowTwo[1] == "X" && rowMatch.rowTwo[2] == "X" || 
						rowMatch.rowThree[0] == "X" && rowMatch.rowThree[1] == "X" && rowMatch.rowThree[2] == "X") {
						//alert("Winner is player One = " + winnerType1 );
						$(".box").removeAttr('onclick').off('click');
						playerOneWins();
					} else if (rowMatch.rowOne[0] == "O" && rowMatch.rowOne[1] == "O" && rowMatch.rowOne[2] == "O" || 
						rowMatch.rowTwo[0] == "O" && rowMatch.rowTwo[1] == "O" && rowMatch.rowTwo[2] == "O" || 
						rowMatch.rowThree[0] == "O" && rowMatch.rowThree[1] == "O" && rowMatch.rowThree[2] == "O")  {
						//alert("Winner is player Two = " + winnerType2);
						$(".box").removeAttr('onclick').off('click');
						playerTwoWins();
					} else {

					}
					
		
					//columns rule
					if (columnMatch.columnOne[0] == "X" && columnMatch.columnOne[1] == "X" && columnMatch.columnOne[2] == "X" || 
						columnMatch.columnTwo[0] == "X" && columnMatch.columnTwo[1] == "X" && columnMatch.columnTwo[2] == "X" || 
						columnMatch.columnThree[0] == "X" && columnMatch.columnThree[1] == "X" && columnMatch.columnThree[2] == "X") {
						//alert("Winner is player One = " + winnerType1 );
						$(".box").removeAttr('onclick').off('click');
						playerOneWins(); 
					} else if (columnMatch.columnOne[0] == "O" && columnMatch.columnOne[1] == "O" && columnMatch.columnOne[2] == "O" || 
						columnMatch.columnTwo[0] == "O" && columnMatch.columnTwo[1] == "O" && columnMatch.columnTwo[2] == "O" || 
						columnMatch.columnThree[0] == "O" && columnMatch.columnThree[1] == "O" && columnMatch.columnThree[2] == "O") {
						//alert("Winner is player Two = " + winnerType2 );
						$(".box").removeAttr('onclick').off('click');
						playerTwoWins();
					} else {
	
					}				

					//diagonals rule
					if (diagonalMatch.diagonalOne[0] == "X" && diagonalMatch.diagonalOne[1] == "X" && diagonalMatch.diagonalOne[2] == "X" || 
						diagonalMatch.diagonalTwo[0] == "X" && diagonalMatch.diagonalTwo[1] == "X" && diagonalMatch.diagonalTwo[2] == "X") {
						//alert("Winner is player One = " + winnerType1 );
						$(".box").removeAttr('onclick').off('click');
						playerOneWins(); 
					} else if (diagonalMatch.diagonalOne[0] == "O" && diagonalMatch.diagonalOne[1] == "O" && diagonalMatch.diagonalOne[2] == "O" || 
						diagonalMatch.diagonalTwo[0] == "O" && diagonalMatch.diagonalTwo[1] == "O" && diagonalMatch.diagonalTwo[2] == "O" ) {
						//alert("Winner is player Two = " + winnerType2 );
						$(".box").removeAttr('onclick').off('click');
						playerTwoWins();
					} else {

					}
				} 


			});
			