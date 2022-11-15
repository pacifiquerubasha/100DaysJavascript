/**
 * Challenge
 *
 * Poll app
 *
 * A poll has a question, an array of options, and an array with the number of replies for each question
 * 1. Create a method 'registerNewAnswer' on the 'poll' object
 * 1.1. Display a prompt for the user to input the number of the selected option
 * 1.2. Based on the input number, update the answers array. If the option is 3, increase the value at position 3 by 1
 *
 */

/**
 *
 * 1.1
 */


/**
 *
 * 2. Call the method whenever the user clicks the answer poll button
 */
// document.addEventListener("click", poll.registerNewAnswer.bind(poll));

/**
 *
 * 3. Create a method 'displayResult' which displays the poll results
 * Takes a string as an input or an array
 * If the input is 'array' , display the array. This is the default option
 * If the input is 'string', display something like: Poll results are 13,2,4,1
 */

/**
 *
 * 4. Run the 'displayResult' method at the end of each 'registerNewAnswer' method call
 */

const poll = {
	options: [0, 1, 2, 3],
	answers: [0, 0, 0, 0],
	registerNewAnswer: function (num) {
		for (i = 0; i < this.answers.length; i++) {
			if (num == this.options[i]) {
				this.answers[i]++;
			}
		}

		
		poll.displayResults("string");
        poll.displayResults();
	},
	displayResults(input = "array") {
		if (input == "arr") {
			console.log(this.answers);
		} else if (input == "string") {
			console.log(`Poll results are ${this.answers.join(", ")}`);
		}
	},
};
poll.registerNewAnswer(0);
poll.registerNewAnswer(2);
poll.registerNewAnswer(1);
poll.registerNewAnswer(1);
poll.registerNewAnswer(4);
