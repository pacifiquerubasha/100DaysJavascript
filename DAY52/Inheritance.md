
# INHERITANCE

In Object Oriented Programming, the availability of parent properties among children is the called inheritance. This means that fields and methods specified in the parent can be used by the child.


## Case study
More often when designing a system, we have different users, that are grouped into categories or classes. For instance, a simple school system will have students(`class Student`), teachers(`class Teacher`) and authorities(`class Authority`). 

```Javascript

class Student{
    constructor(firstName, lastName, dateOfBirth, address, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
    }

}

class Teacher{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume, course){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
        this.employmentDate = employmentDate;
        this.salary = salary;
        this.resume = resume;
        this.course = course
    }
    
}

class Authority{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume, position){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
        this.employmentDate = employmentDate;
        this.salary = salary;
        this.resume = resume;
        this.position = position;
    }
    
}


```

:dizzy: Trying hard to not faint after writing all these repeating lines! For your information, I did not use Copy/Paste when I first wrote these classes. Let us explore some alternatives to help us use inheritance to DRY our code.

> DRY stands for Don't Repeat Yourself. It is a best practice in programming that encourages the reduction of repetitive code through, for example, use of helper and utility functions or inheritance in our case.

### Observation 1

They all share properties like first name, last name, date of birth, address, email... To avoid repeating all these properties, we can create a parent class(_User_ dor example) that will contain all these properties and each individual category will extend this parent class to help "DRYing" the code.

Outcome

```Javascript

class User{
    constructor(firstName, lastName, dateOfBirth, address, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
    }

}

class Student extends User{
    constructor(firstName, lastName, dateOfBirth, address, email, class){
        super(firstName, lastName, dateOfBirth, address, email)
        this.class = class;
    }

    
}

class Teacher extends User{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume, course){
        super(firstName, lastName, dateOfBirth, address, email)        
        this.employmentDate = employmentDate;
        this.salary = salary;
        this.resume = resume;
        this.course = course
    }
    
}

class Authority extends User{
    constructor(firstName, lastName, dateOfBirth, address, email, employmentDate, salary, resume, position){
        super(firstName, lastName, dateOfBirth, address, email)
        this.employmentDate = employmentDate;
        this.salary = salary;
        this.resume = resume;
        this.position = position;
    }
    
}

```

A little better, right? We have created a new super or parent class `User` that contains all the shared properties of our categories and we make the categories extend the `User` class through the use of the superclass constructor `super(...args)`.  `...args` represents the shared arguments that are needed in the User constructor. A simple thing to notice is that teachers and authorities also have properties that are common. We can take advantage of inheritance to create a super class for Teachers and Authorities, which we will call Staff. But we have already extended User in Teacher and Javascript does not allow multiple inheritance? We will explore how to do this in the next version of this piece but for now we will make Staff inherit User for its children. 


```Javascript
class User{
    constructor(firstName, lastName, dateOfBirth, address, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
    }

    printName(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
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

```

Let's try to print the name of the authority.

```Javascript
    const authority = new Authority('Cyrrus', 'DEL');
    authority.printName();
```

The output prints `My name is Cyrrus DEL`. Beautiful! We are able to access a method on a second degree of inheritance.



>One thing worth mentionning here is that parents can have methods that use variables that are not declared in them but only in their children. This can be used when we do not need to create instances of parents, because if we do, we will get undefined. Sounds confusing but let us try it out.

```Javascript
   
   /* SOME CODE HERE*/

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

   const args = ['Cyrrus', 'DEL', '20/10/1900', 'ALC', 'cdel@gmail.com', '30/00/2007', '3000', 'resume.pdf']
   const staff = new Staff(...args); 
   const authority = new Authority(...args, 'Campus Director'); 
   staff.printPosition();
   authority.printPosition();


```

Our console prints

`My position is undefined`\
 `My position is Campus Director`


Awesome!

## Reminders

> 1. Always remember to select your `HTML` elements and store them in global variables to DRY your code.
> 2. To check if a value is a number, use `isFinite(value)`;
> 3. To round a number to the closest, use `number.toFixed();`
> 4. Use prettier-ignore to instruct prettier to not format a piece of code.



