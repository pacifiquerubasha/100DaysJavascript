/**
 * DATE
 */


/**
 * 
 * Creating a new date
 * 
 *  new Date()
 *  new Date(value)
 *  new Date(dateString)
 *  new Date(dateObject)
 *  new Date(year, monthIndex)
 *  new Date(year, monthIndex, day)
 *  new Date(year, monthIndex, day, hours)
 *  new Date(year, monthIndex, day, hours, minutes)
 *  new Date(year, monthIndex, day, hours, minutes, seconds)
 *  new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 */

const today = new Date();
console.log(today); //prints 2022-11-27T05:39:48.299Z


/**
 *DATE METHODS
 * 
 */

 /**
  * GETTERS
  */
console.log("1. ", today.toDateString())            //prints Sun Nov 27 2022
console.log("2. ", today.toISOString())             //prints 2022-11-27T05:44:42.022Z
console.log("3. ", today.toLocaleDateString())      //prints 11/27/2022
console.log("4. ", today.toUTCString())             //prints Sun, 27 Nov 2022 05:44:42 GMT
console.log("5. ", today.getDate())                 //prints 27
console.log("6. ", today.getDay())                  //prints 0 (returns day of the week)
console.log("7. ", today.getFullYear())             //prints 2022
console.log("8. ", today.getHours())                //prints 9
console.log("9. ", today.getMonth())                //prints 10 instead of 11 because month count in js is zero based
console.log("10. ", today.getMinutes())             //prints 44
console.log("11. ", today.getSeconds())             //prints 42

 /**
  * SETTERS
  * 
  * There are setters for all the getters used up here
  */

 today.setDate(30);
 console.log(today.getDate());      //prints  30
 today.setDate(34);
 console.log(today.getDate());      //prints 4 because November has 30 days, it jumps to december till 4th


 /**
  * OPERATIONS
  */

const date1 = new Date('2022-11-25');
const date2 = new Date('November 27, 2022')

console.log(date1.toDateString(), " AND ", date2.toDateString());

console.log(date2 - date1) // prints 158400000 which is the amount of milliseconds between the two days. Js uses timestamps to compare dates;

/**
 * To get the number of days, we need to convert the milliseconds to days
 */

const timestamps = Math.abs(date2 - date1);                 //use Math.abs to convert the result to positive, in case date1 comes before date1
const daysElapsed = Math.round((timestamps/1000)/3600/24);
console.log(daysElapsed)                                    //prints 2



/**
 * FORMATTING DATES
 * 
 * Intl is an API that helps us format the date based on the date format used in- the region specified.
 * 
 */

const formatedDateUS = new Intl.DateTimeFormat('en-us').format(today);
const formatedDateGB = new Intl.DateTimeFormat('en-gb').format(today);

console.log('Formatted date US ', formatedDateUS)       //prints Formatted date US  12/4/2022
console.log('Formatted date GB ', formatedDateGB)       //prints Formatted date GB  04/12/2022