/**
 * Create function calcAverageHumanAge(dogsAgeArray)
 * 
 * 
 * 1. Calculate the dog age in human years using the formula 
 * 2. Exclude all dogs less than 18 human years
 * 3. Calculate the average human age for all adult dogs
 * 
 * 
 */


const calcAverageHumanAge = (dogsAgeArray)=>{
    const dogsAgeInHuman = dogsAgeArray.map((dogAge, i)=> dogAge <=2 ? 2* dogAge : 16 + (dogAge*4));
    console.log("DOGS AGES HUMAN", dogsAgeInHuman);

    const matureDogs = dogsAgeInHuman.filter((matureDogAge)=> matureDogAge > 18);
    console.log("MATURE DOGS", matureDogs);

    const sumAdultDogsAge = matureDogs.reduce((acc, adultDogAge)=> {
        return acc+adultDogAge}, 0)

    const averageMatureDogsAge = sumAdultDogsAge/matureDogs.length;

    console.log("AVERAGE", averageMatureDogsAge)
}



calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])