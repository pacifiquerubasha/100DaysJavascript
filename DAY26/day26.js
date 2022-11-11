
const convertToCamelCase = (arguments)=>{
    
    for(const [index, word] of arguments.entries()){
        const i = word.indexOf('_')
        const convertedString = word.slice(0, i)+word[i+1].toUpperCase()+word.slice(i+2);


        const emoji = '✅'
        console.log(`${convertedString} ${emoji.repeat(index+1)}`);
    }





}

convertToCamelCase(['underscore_Case', 'first_name', 'some_variable', 'calculate_age', 'delayed_departure'])