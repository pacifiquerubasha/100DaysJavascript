/**
 * 19. Calculate the Total Price of Groceries
 */
function getTotalPrice(groceries) {
	let total = 0;
	groceries.forEach((grocery) => {
		total += grocery.quantity * grocery * price;
	});
	return Math.round(total * 10) / 10;
}
/**
 * 20. Word to Bitstring to Boolean Array
 */
const toBooleanArray = function (word) {
	let array = [];
	const alph = "abcdefghijklmnopqrstuvwxyz";
	let splitWord = word.split("");
	splitWord.forEach((char) => {
		alph.indexOf(char) % 2 === 0 ? array.push(true) : array.push(false);
	});
	return array;
};
/**
 * 21. Converting One Binary String to Another
 */
function minSwap()
/**
 * 22. Histogram Function
 */
function histogram(arr, char){
  return arr.map(num =>
  char.repeat(num)
   ).join('\n');
}
/**
 * 23. Switching Between Pencils
 */
const switchPencil = function(cols){

}
/**
 * 24. One Plus One
 */

const wordedMath = function(){

}
