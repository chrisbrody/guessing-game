// create a random number between 1 - 100
var secretNumber = Math.floor((Math.random() * 100) + 1)

// reveals secret number in console
console.log(secretNumber)

// store number of user guesses
var guessCount = 0


// runs on click from button line 26 index.html
function determineGuess() {
	// store elements in variables to use later
	var userGuess = document.getElementById("userGuess")
	var results = document.getElementById("results")

	// stop function if input is not correct or to small or to big
	if (!userGuess.value || userGuess.value > 100 || userGuess.value < 0) {
		// add a class of success to results
		results.className = "failure"
		// update the text content of results
		results.textContent = "incorrect input, please try again"
		// clears input tag out
		userGuess.value = ""
		// stop function to allow user to try again
		return
	}

	// if user guesses the secret number correctly
	if(userGuess.value == secretNumber) {
		// add a class of success to results
		results.className = "success"
		// update the text content of results
		results.textContent = "you got it in " + (guessCount + 1) + " guesses!"
		return
	// otherwise check if the guess is greater than the secret number
	} else if(userGuess.value > secretNumber) {
		// add a class of failure to results
		results.className = "failure"
		// update the content of results
		results.textContent = "guess a lower number"
		// refocus on input for user
		userGuess.focus()
	// otherwise the guess is less than the secret number
	} else {
		// add a class of failure to results
		results.className = "failure"
		// update the content of results
		results.textContent = "guess a higher number"
		// refocus on input for user
		userGuess.focus()
	}

	// clears input tag out
	userGuess.value = ""
	
	// increment guess counter
	guessCount = guessCount + 1

	// stop game if out of guesses
	if(guessCount >= 7){
		// add a class of success to results
		results.className = "failure"
		// update the text content of results
		results.textContent = "sorry you're out of guesses, refresh to play again"

		// remove onclick attribute if user runs out of guesses
		document.getElementById('btn').onclick = null;
	}
}

