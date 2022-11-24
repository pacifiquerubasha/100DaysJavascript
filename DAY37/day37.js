/**
 *
 * Challenge
 */
/**
 * 1.Loop over the array, and for each dog calculate the recommended food portion and add it to the object as a new property
 * formula: recommendedFood = weight**0.75 *28
 */
const dogs = [
	{
		weight: 22,
		curFood: 250,
		owners: ["Alice", "Bob"],
	},
	{
		weight: 8,
		curFood: 200,
		owners: ["Matilda"],
	},
	{
		weight: 13,
		curFood: 275,
		owners: ["Sarah", "John"],
	},
	{
		weight: 32,
		curFood: 340,
		owners: ["Micheal"],
	},
];
dogs.forEach(
	(dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log("********Numero 1*******");
console.log(dogs);

/**
 * 2. Find Sarah's dog and log whether it's eating too much or too little
 */
console.log("********Numero 2**********");
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
	`This dog is eating ${
		sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "less food"
	}`
);

/**
 * 3.Create an array containing all owners of dogs who eat too much
 * and an array with all owners of dogs who eat too little
 */

const ownersEatsMuch = dogs
	.filter((dog) => dog.curFood > dog.recommendedFood)
	.flatMap((dog) => dog.owners);
console.log("********Numero 3**********");
console.log(ownersEatsMuch);
console.log(`Owners of obese dogs: ${ownersEatsMuch}`);

const ownersEatsLittle = dogs
	.filter((dog) => dog.curFood < dog.recommendedFood)
	.flatMap((dog) => dog.owners);
console.log(ownersEatsLittle);
console.log(`Owners of starved dogs: ${ownersEatsLittle}`);

/**4.Log a string for each array created in 3: "Matilda and Alice and Bob's dogs eat too much!"
 *
 */
console.log("********Numero 4**********");
console.log(`${ownersEatsMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatsLittle.join(" and ")}'s dogs eat too little`);

/**
 * 5. Log whether there is any dog eating exactly the amount of food that is recommended. true/false
 */

console.log("********Numero 5**********");
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

/**
 * 6. Log whether there is any dog eating an okay amount of food. true/false
 */
const dogsEatingOkay = (dog) =>
	dog.curFood > dog.recommendedFood * 0.9 &&
	dog.curFood < dog.recommendedFood * 1.1;
console.log("********Numero 6**********");
console.log(dogs.some(dogsEatingOkay));

/**
 * 7.create an array containg dogs that are eating an okay amount
 */

console.log("********Numero 7**********");
console.log(dogs.filter(dogsEatingOkay));
/**
 * 8. Create a shallow copy of the dogs array and sort it by recommended food portion in ascending order.
 */

const copyOfDogs = dogs
	.slice()
	.sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
console.log("********Numero 8**********");
console.log(copyOfDogs);
