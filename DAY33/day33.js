/**
 * MORE ARRAY METHODS
 * 
 * Map --> loops through an array then returns a new array with the results of operation on items
 * Array.map((element, index)=>{})
 * 
 * 
 * Filter --> loops through array then returns a new array containing elements that satisfy the specified condition
 * 
 * Array.filter((item, index)=> item > 10);
 * 
 * 
 * Reduce --> reduces all elemts to one single value that is a result of a computation;
 * 
 * Array.reduce((accumulator, item)=> return computation)
 */


const objects = ['ruler', 'box', 'pencil', 'laptop'];

const mappedObjects = objects.map((object, i)=> object + ` mapped`)

console.log(mappedObjects) //prints [ 'ruler mapped', 'box mapped', 'pencil mapped', 'laptop mapped' ]

const filteredObjects = objects.filter((object, i)=>object.includes('p'));

console.log(filteredObjects); //prints [ 'pencil', 'laptop' ]


const reducedObject = objects.reduce((accumulator, item)=> `${accumulator} ${item}`)

console.log(reducedObject) //prints  ruler box pencil laptop