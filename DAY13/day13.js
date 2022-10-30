/**
 * CHALLENGE
 * 
 * Optimize day9 code
 * 
 * Data: bills [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
 * 
 * 1. Populate tips and totals arrays for corresponding bills
 * 2. Create a function that takes an array as argument and returns the average of its items
 * 
 */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = [];
const totals = [];



function calcTip(){   

    for(let i=0; i<bills.length; i++){
        let tip;        
        if (bills[i] >= 50 && bills[i] <= 300){

           tip = bills[i] * 0.15;
        }

        else tip = bills[i] * 0.2;

        tips.push(tip)
        totals.push(tip+bills[i])

    }

    console.log(bills, tips, totals)


}

/**
 * @function calcAverage
 * @description Calculates the average of array items
 * @param {Array} arr 
 * @returns average
 * 
 */

const calcAverage = (arr)=>{
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum+=Number(arr[i])
    }

    let average = sum/arr.length;
    return average
}

calcTip();

calcAverage(["2", 4]);
