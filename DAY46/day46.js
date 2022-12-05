/**
 * MORE EVENTS 
 * 
 *  1. DOMCOntentLoaded event :     Fires as soon as the page DOM has been loaded, without waiting for resources to finish loading
 *  2. load event :                 Fires when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images
 *  3. beforeunload event :         Fires when the window, the document and its resources are about to be unloaded
 */

/**
 * OBJECT ORIENTED PROGRAMMING
 * 
 * A programming paradigm that uses blueprints to create instances that represent real-life objects
 * 
 * PRINCIPLES
 * 
 *  1. Abstraction      Hiding low-level details of an implementation of a feature
 *  2. Encapsulation    Keeping some properties inaccessible to avoid accidental changes
 *  3. Inheritance      Making parent properties available in children
 *  4. Polymorphism     A child can overwrite inherited methods
 */


/**
 * OOP IN JS
 * 
 *  1. Javascript uses Prototypes, and not classes as per the usual standards of OOP
 *  2. Prototypal inheritance or delegation : It is a method by which an object can inherit the properties and methods of another object
 *  
 *  We can inplement prototypal inheritance in three ways
 * 
 *  a) Constructor function
 *  b) ES6 classes
 *  c) Object.create()
 */


/**
 * CONSTRUCTOR FUNCTION
 */

const Person = function(name = "Default Name", nationality = "Default nationality"){
    this.name = name;
    this.nationality = nationality;
}

Person.prototype.changeName = function(){
    this.name = "Changed name";
}


const somebody = new Person("Name", "African"); //creates a Person object with name "Name" and nationality "African"
console.log(somebody)

console.log(somebody.__proto__);   //prints the prototype of object somebody which contains the function changeName specified above
console.log(somebody.__proto__ === Person.prototype);   //prints true Note : Person.prototype is not the prototype of person, it is the prototype of objects created using the constructor

const somebodyElse = new Person();
console.log("SOMEBODY ELSE", somebodyElse);