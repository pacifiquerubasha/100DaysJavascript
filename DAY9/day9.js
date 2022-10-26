
/**
 * ARRAYS
 * Arrays are a collection of items, generally of same data type that share a common qualification
 * 
 * STRUCTURE
 * 
 * const arrayName = [item1, item2, item3...];
 * OR
 * const arrayName = new Array(item1, item2, item3...)
 * 
 * To access an item, we access the value at the item position
 * eg. To access item1, we write arrayName[0] because position of item1 is 0(positions start from 0 and not 1). arrayName[1] is item2...
 * 
 * Arrays are not immutable meaning that even if an array is declared with const, we can still change its elements but not the entire array
 * 
 * We can say
 * arrayName[3] = item4
 * 
 * But never
 * arrayName = [item5, item6]
 * 
 */

const randomArray = ['Me', 'You', 'Her'];
console.log(randomArray[0]);

randomArray[3] = "Them";
randomArray[5] = 'Yes'; //THis will add 'Yes' at position 5 then leave an empty item at position 4
console.log(randomArray)

randomArray = ['Mine']; //TypeError


/**
 * Challenge
 * Tip Calculator
 * 15% if bill is between 50 and 300
 * 20% otherwise
 * 1. Function calcTip that takes bill value and returns corresponding tip
 * bill value: 100
 * 2. An array called bills containing test data
 * 3. An array called tips containing tip values
 * 4. An array called total containing total values, so bill + value
 * Test Data: 125, 555, 44
 */



/**
 * @function calcTip
 * @description 
 * @param {Number} bill
 * @returns corresponding tip
 */

function calcTip(bill){
    let tip;
    if (bill >= 50 && bill <= 300){
        tip = bill * 0.15;
    }
    else tip = bill * 0.2;
    return tip;
}

const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);


/**
 * OPERATIONS
 * 
 * To get the length of the array, 
 * we call the array.length command which returns the number, starting from 1, of elements in the array
 * 
 * 1. array.push(element) : adds an element to the end of the array (position array.length - 1) then returns the new array length
 * 2. array.unshift(element) : adds an element at the start of the array (position 0) then returns the new array length
 * 3. array.pop() : removes and returns last element of the array
 * 4. array.shift() : removes and returns first element of the array 
 * 5. array.indexOf(element) returns the index(position) of the element passed as argument
 * 6. array.includes(element) returns true or false depending on whether or not the element is an item of the array
 */

randomArray.push('Bartolome') //Add Bartolome at the end
randomArray.pop() // Removes Bartolome
randomArray.unshift('S') // Adds S at the start
randomArray.shift() // Removes S 

randomArray.indexOf('Them'); // Returns 5, the index of element 'Them'
randomArray.includes('Me') //Returns true because we have 'Me' in the array