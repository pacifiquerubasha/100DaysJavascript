/**
 * Numbers Intl
 *
 * Enables language-sensitive number formatting
 * Intl.NumberFormat()
 */

const num = 54893845.621;
console.log(
	new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(
		num
	)
); // expected output:$54,893,845.62

console.log(
	new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
		num
	)
); // expected output: 54.893.845,62 €

/**
 * setTimeout()
 *
 * sets a timer which executes a function or specified piece of code once the timer expires.
 *
 * Synthax:
 *
 * setTimeout(functionRef)
 * setTimeout(functionRef, delay)
 * setTimeout(functionRef, delay, param1, param2, … , paramN)
 *
 * delay, param are optional parameters
 *
 * Timeouts are cancelled using clearTimeout()
 */

setTimeout(() => {
	console.log("Delayed for 1 second.");
}, 1000);

/**
 * SetInterval()
 *
 * repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
 *
 * Can be cancelled by calling clearInterval()
 *
 * Synthax:
 *
 * setInterval(func)
 * setInterval(func, delay)
 * setInterval(func, delay, arg0, arg1, … , argN)
 */

const intervalID = setInterval(() => console.log("Beautiful day"), 1000);
const stopTimer = clearInterval(intervalID);
