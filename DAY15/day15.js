//CHALLENGE1

/**
 * @function printEvenNumbers
 * @description Prints even numbers between 0 and 10
 * @returns array of even numbers
 */
function printEvenNumbers(){
    const evenNumbers = [];
    for(let i = 0; i<=10; i++){
        if(i % 2 === 0) evenNumbers.push(i);
    }

    return evenNumbers
}

// console.log(printEvenNumbers());

//CHALLENGE2

/**
 * @function multiplicationTable
 * @description Prints the multiplication table from 0 to 10
 */
function multiplicationTable(){
    for(let table = 0; table <= 10; table ++){
        console.log("Table ",  table)
        for(let row = 0; row <= 10; row++){
            console.table(`${table} * ${row} = ${table * row}`)            
        }
    }
}

// multiplicationTable();


//CHALLENGE3

/**
 * @function unitConverter
 * @description Receives a length in km then converts to miles
 * @param {*} length 
 * @returns the length in miles
 */
function unitConverter(length){
    return length * 0.621371;
}


//CHALLENGE4

/**
 * @function sumArrayElements
 * @description Calculates sum of array elements
 * @param {*} arr 
 * @returns sum of array elements
 */
function sumArrayElements(arr){
    let sum = 0;
    for(let item = 0; item <= arr.length-1; item++){
        sum+=arr[item]
    }
    return sum;
}

console.log(sumArrayElements([1, 2, 3]));


//CHALLENGE5

/**
 * @function reverseArray
 * @description Takes an array then returns its reverse
 * @param {*} arr 
 * @returns the reversed array
 */
function reverseArray(arr){
    let reversedArray = [];
    for(let item = arr.length-1; item >= 0; item--){
        reversedArray.push(arr[item]);
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

// const array = [1, 100, 5, 6, 3, 50]
// console.log(array.sort());

function sortArray(arr){

    const sortedArray = arr.sort((a, b) => a - b);

    // for(let i=0; i < arr.length; i++){
    //     console.log("==========")
    //     console.log("EL", arr[i])

    //     let tempArray = [arr[i]]

    //     for(let j = i+1; j<arr.length; j++){
    //        if(arr[j] < tempArray[0]) tempArray.unshift(arr[j])
    //        else tempArray.push(arr[j])
    //     }

    //     console.log("TEMPARR", tempArray)


    //     sortedArray.push(tempArray[0]);

    // }

    console.log(sortedArray)
}

sortArray([3, 5, 2, 100, 7, 1, 6])