/**
 * 37. Burglary Series (15): Number of Occurrences
 */

const countOccurences = (obj)=>{
    const occurencesObj={};

    Object.values(obj).forEach((value)=>{

        if(occurencesObj[`${value}`]){
            occurencesObj[`${value}`] +=1
        }

        else occurencesObj[`${value}`] = 1
    })

    console.log(occurencesObj)
}

countOccurences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
  })


  /**
   * 38. Dance for Cash
   */

  const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

  const danceConvert = (pin)=>{
    let moves = [...MOVES];

    const convertedMoves = [];

    pin.split('').forEach((char, i)=>{
        const index = Number(char) + i;

        let currentMove = moves[ index < moves.length ? index : index-moves.length]

        convertedMoves.push(currentMove);

    })
    return convertedMoves;

  }

  console.log(danceConvert("9999"))

  /**
   * 39. Reversing a Binary String
   */

  const convertToBinary = (number)=>{

    // let res;

    // do{

    // }while(res > 2)


  }


  //FROM DAY 67

  const reverseString = (string)=>{
    const splitString = string.split('');
    
    for(let [index, element] of splitString.entries()){

        if(index < splitString.length/2){
            const temp = splitString[splitString.length-1-index]
            splitString[splitString.length-1-index] = element
            splitString[index] = temp;

        }
    }

    return splitString.join('')

}

  const reversedBinaryInteger = (integer)=>{
    const initialBinary = Number(integer).toString(2);
    const reversedBinary = reverseString(initialBinary)

    const reveredInteger = reversedBinary.split('').reduce((acc, el, i)=> {
        return acc + el * (2 ** (reversedBinary.length - 1 - i))
    }, 0)

    console.log(reveredInteger)
  }

  reversedBinaryInteger(25)

  /**
   * 40. Hours Passed
   */


  const hoursPassed = (start, finish)=>{
    const startTime = start.split(/[:\s]+/)
    const endTime = finish.split(/[:\s]+/)

    let hours;

    if(startTime[2] === endTime[2]){
        hours = endTime[0] - startTime[0]
    }

    else hours = Number(12 - startTime[0]) + Number(endTime[0])


    return hours === 0 ? `No time has passed` : `${hours} passed`


  }

  console.log(hoursPassed("3:00 AM", "9:00 PM"))

  /**
   * 41. Finding Common Elements
   */

  const commonElements = (arr1, arr2)=>{

    let common = [];

    arr1.forEach((el)=>{
        if(arr2.includes(el) && !common.includes(el)) common.push(el)
    })

    return common;
  }

  console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))

  /**
   *  GCD and LCM (Part 2) DONE SOMEWHERE IN PAST CHALLENGES
   */

  /**
   * 42. GCD and LCM (Part 2)
   */

  const signAll = (obj, signature)=>{

    Object.entries(obj).forEach((subObj)=>{
        if(obj[`${subObj[0]}`].signature === "")
            obj[`${subObj[0]}`].signature = signature

        else obj[`${subObj[0]}`] = signature
    })


    return obj;

  }

  const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

  console.log(signAll(obj, "Rocky"))