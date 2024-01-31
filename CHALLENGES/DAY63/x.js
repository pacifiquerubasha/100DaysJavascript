const arr = new Array(100).fill(20);

const withForEach = ()=>{
    const y = [];
    arr.forEach((el)=>console.log(el))
}

const withFor = ()=>{
    const y = [];
    for(i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

const checkFibonacci = (instances) => {
	if (instances === undefined) return undefined;

	let tempArray = [];

	for (let i = 0; i < instances; i++) {
		i > 1
			? tempArray.push(tempArray[i - 1] + tempArray[i - 2])
			: tempArray.push(i);
	}

	return tempArray;
};


const initial = Date.now()
console.log(initial);

console.log(checkFibonacci(20000000))

const end = Date.now();
console.log(end)

console.log("DIFFERENCE", (end - initial)/1000)