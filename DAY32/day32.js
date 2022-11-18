

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia, dogsKate)=>{

    const shallowJuliaData = [dogsJulia[0], ...dogsJulia.slice(-2)]
    const fullArray = shallowJuliaData.concat(dogsKate);

    fullArray.forEach((dogAge, i)=>{
        const isAdult = dogAge >= 3 ? 'an adult' : 'a puppy';

        console.log(`Dog number ${i+1} is ${isAdult}, and is ${dogAge} old `)
    })
}

checkDogs(juliaData, kateData);