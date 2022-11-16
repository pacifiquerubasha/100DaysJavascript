/**
 * IIFE (Immediately Invoked Function Expression)
 *
 * Function that runs as soon as it is defined
 *
 * Synthax:
 * 1.
 *
 * (function(){
 * //.....
 * })();
 *
 * 2.
 *
 * (()=>{
 * //....
 * })();
 */

(function () {
	console.log("Why do you complain too much?");
})();
(() => console.log("Also, the movie night is over by now."))();

/**
 * Closures
 *
 * A closure gives a function access to all the variables of its parent function, even after that parent function has returned.
 * The function keeps reference to its outer scope, which preserves the scope chain throughout time.
 *
 * Example from the small challenge below
 */

/**
 * Challenge
 * Attach an event listener that changes the color of the selected h1 element to blue whenever the body element is clicked
 *
 */

(function () {
	const header = document.querySelector("h1");
	header.style.color = "red";

	document.body.addEventListener("click", function () {
		header.style.color = "blue";
	});
})();
