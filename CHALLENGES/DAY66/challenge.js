/**
 * 19. Calculate the Total Price of Groceries
 */

const getTotalPrice = (array)=>{
    return array.reduce((acc, el) => acc+(el.quantity * el.price), 0)
}


console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]))


  /**
   * 20. Word to Bitstring to Boolean Array
   */

  const getBoolean = (string)=>{

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetObjects = alphabet.reduce((acc, el, key)=>{
        return {...acc, [`${el}`]: key++}
    }, {})

    const booleanArray = string.toLowerCase().split('').map((char) => alphabetObjects[char] % 2 === 0 ? 1 : 0)
    return booleanArray;
  }


  console.log(getBoolean('deep'))

  /**
   * 21. Converting One Binary String to Another
   */

  const numberOfSwaps = (stringOne, stringTwo)=>{
        
    const arrayOne = stringOne.split('');
    const arrayTwo = stringTwo.split('')
 
    const sum =  arrayOne.reduce((acc, _, key)=>{
        if(arrayOne[key] != arrayTwo[key]) acc++
        return acc;
    }, 0)

    return sum/2

}

console.log(numberOfSwaps("01100100100111", "10110010100110"))

/**
 * 22. Histogram Function
 */

const histogram = (arr, char)=>{

    const newArr = arr.map(el=> {
        let string = '';
        for(i=0; i<el; i++) string+=char
        return string;
    }).join('\n')

    return newArr

}

console.log(histogram([6, 2, 15, 3], "="))

/**
 * 23. Switching Between Pencils
 */

const colorPatternTimes = (colors)=>{
    let numberOfSwitches = 0;

    for(let [index, color] of colors.entries()){
        if(color !== colors[index+1]) numberOfSwitches++
    }

    return (colors.length * 2 + numberOfSwitches - 1)
}

console.log(colorPatternTimes(["Blue"]))

/**
 * 24. One Plus One
 */



const wordedMath = (string)=>{

    const stringArr = string.toLowerCase().replaceAll('one', 1).replaceAll('two', 2).replaceAll('zero', 0).split(' ');
   
    const result = String(stringArr.includes('plus') ? Number(stringArr[0]) + Number(stringArr[2]) : Number(stringArr[0]) - Number(stringArr[2]))
    
    const finalRes = result.replace('1', 'One').replace('2', 'Two').replace('0', 'Zero');
    
    console.log(finalRes)
}

wordedMath("One plus zero")