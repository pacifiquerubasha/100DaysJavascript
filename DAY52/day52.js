
/**
 * INHERITENCE BY USE OF PROPERTIES OF CHILDREN IN PARENT 
 */
class Parent{
    constructor(name, last){
        this.name = name;
        this.last = last;
    }
    getChildAge(){
        console.log(`Child age is ${this.age}`)
    }
}

class Child extends Parent{
    constructor(name, age, last){
        super(name, last);
        this.age = age;

    }

}

const lady = new Child('Lady', 50);
lady.getChildAge();



class User{
    constructor(firstName, lastName, dateOfBirth, address, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
    }

    printName(){
        console.log(`My name is ${this.level} ${this.lastName}`)
    }

}



class Student extends User{
    constructor(firstName, lastName, dateOfBirth, address, email, level){
        super(firstName, lastName, dateOfBirth, address, email)
        this.level = level;
    }

    
}

class Staff extends User{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume){
        super(firstName, lastName, dateOfBirth, address, email)        
        this.employmentDate = employmentDate;
        this.salary = salary;
        this.resume = resume;
    }

    printPosition(){
        console.log(`My position is ${this.position}`)
    }


}

class Teacher extends Staff{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume, course){
        super(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume)        
        this.course = course
    }
    
}

class Authority extends Staff{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume, position){
        super(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume)        
        this.position = position;
    }
    
}

const args = ['Cyrrus', 'DEL', '20/10/1900', 'ALC', 'cdel@gmail.com', '30/00/2007', '3000', 'resume.pdf']
const staff = new Staff(...args, 'Campus Director'); 
const authority = new Authority(...args, 'Campus Director'); 
staff.printPosition();
authority.printPosition();

const auth = new Authority('Cyrrus', 'DEL');
auth.printName()

const x = 5.4
console.log(x.toFixed());
console.log(Number('5.444'));

/**
 * > 1. Always remember to select your `HTML` elements and store them in global variables to DRY your code.
2. To check if a value is a number, use `isFinite(value)`;
3. To round a number to the closest, use `number.toFixed();`
4. Use prettier-ignore to instruct prettier to not format a piece of code.
 */