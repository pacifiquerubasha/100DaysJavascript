
let bill= 275;

let tipRate = (bill >= 50 && bill <= 300) ? 0.15 : 0.25; 

let tip = bill * tipRate;

console.log(`The bill was (${bill}), the tip was (${tip}), and the total  value is (${bill + tip})`);
