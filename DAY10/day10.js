

const jonas = {
    name: 'Jonas',
    friends: ['Michel', 'Gerard', 'Mark']
}

console.log(`${jonas.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

const jonasDetails = {
    name:'Jonas',
    birthyear:'2002',
    job:'teacher',
    hasDriverLicense:true,

    calcAge : function(){
        this.age = 2037 - 2002;
        return this.age
    }
}


console.log(`${jonasDetails.name} is a ${jonasDetails.calcAge()}-year old ${jonasDetails.job}, and ${jonasDetails.hasDriverLicense ? "he has a driver's license" : "he has no driver's license"}`)

