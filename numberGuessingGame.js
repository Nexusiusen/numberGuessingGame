let aNumber = Math.floor(Math.random() * 10)+1;
document.getElementById("guessInput").value="";


let guesses = 1;
 
document.getElementById("submitButton").addEventListener("click", isRight);

document.getElementById("yes").addEventListener("click", yes);

document.getElementById("no").addEventListener("click", no);

var modal = document.getElementById("myModal");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}




function isRight () 
{
	let guess = document.getElementById("guessInput").value;
	let tOutput = document.getElementById("tOutput");
	let gOutput = document.getElementById("gOutput");
	let txtDisplay = document.getElementById("txtDisplay");


	if (guess == aNumber)
	{
		
		tOutput.innerHTML = "Correct! It took you "+ guesses+" tries"
		gOutput.innerHTML = "Congratulations!";
  	modal.style.display = "block";

	}

	else if (guess < aNumber)
	{
		tOutput.innerHTML = "WRONG! but "+ guess +" is too small."
		gOutput.innerHTML = "You have guesses "+ guesses +" times, try again!"
		txtDisplay.innerHTML = "&uarr;";
		guesses++;

		
	}
	else
	{
		tOutput.innerHTML = "WRONG! but "+ guess+" is too large."
		gOutput.innerHTML = "You have guesses "+ guesses +" times, try again!"
		txtDisplay.innerHTML = "&darr;";
		guesses++;
		
	}
	
}

function yes() 
{
	guesses =1;
	modal.style.display = "none";
	aNumber = Math.floor(Math.random() * 10)+1;
	tOutput.innerHTML = "";
	gOutput.innerHTML = "";
	document.getElementById("guessInput").value="";

}
function no() {
	modal.style.display = "none";
}

