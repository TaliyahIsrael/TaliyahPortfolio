//run function on click of submit button 
function check() {
//getting the input from user by the value attribute 
var str = document.getElementById("text").value;
//declaring the count 
var count = 0;
//declaring for vowels found so we can display later 
var total_vowels = "";

//create for loop to find vowels 
for (var i = 0; i < str.length; i++) {
	if (str.charAt(i).match(/[a-zA-Z]/) != null) { //str.charAt(i) returns the string characters at/from position i - a-zA-z runs through all characters and is not equal to anything 
		//find Vowels
		if (str.charAt(i).match(/[aeiouAEIOU]/)){ //str.charAt(i) returns the string characters at/from position i - if mataches any of these letter (vowels) then...
			total_vowels = total_vowels + str.charAt(i); //to pick out the vowels found 
			count++; //to add the 1 to count when vowel is found
		}
	}
}
//Need to use .innerHTML or .textContent to display on page. if you use .value will not display
document.getElementById("vowels").innerHTML = "Vowels found: " + total_vowels;
document.getElementById("number").innerHTML = "Number of vowels: " +  count;
}
	









//https://www.aspdotnet-suresh.com/2013/02/find-number-of-vowels-in-string.html


//alternative method using prompt() method
/*function check(str) {//will return the inputed text and required it as a string (str) when the funciton is called
	//declare the counter number will be displayed 
	let counter = str.match(/[^aeiou]/gi).length;

	return counter;
} 

let input = prompt();
let ans = check(input);

console.log(ans);*/
