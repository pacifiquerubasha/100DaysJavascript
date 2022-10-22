/* Conversion and coercion
   Conversion is the explicit typecasting which is done by manually converting one data type to another. 
   This is done by using in-built methods like String(), Number().
   Number() method in case of empty strings and null values return 0. 
   If a string is an invalid number like having an alphabet in a string, the result will be NaN.
   The following are the rules of the numeric value:
   Value             Return
   Undefined         NaN
   Null              0
   True & False      1 & 2
   String            Whitespaces from the start and end are removed.
                     If the remaining string is empty, the result is 0.
                     Otherwise, the number is read from the string. If the
                     string contains an alphabet, it will give a NaN error.
     */
//Example
let num = "5";

let six = Number(num); //conversion to number

let seven = String(six); //conversion to string

// Coercion on the other hand is the implicit typecasting which is happens when javascript convert one data type automatically

let mun = "3" + 4; //Coercion to String

let rubasha = mun - seven; //Coercion to Number

/* Truthy and Falsy Values
                    
Truthy values are values that are considered true when encountered in a boolean context. Falsy on the other hand, are the opposite of truthy.
                     
All values are truthy except: false, 0, -0, 0n(BigInt Zero, "", null, undefined, NaN)*/

/**Example
 * In the following example, I am using  nested if statements to demonstrate the use of truthy and falsy values
 */
let firstNumber = prompt(`Enter a number`);
if (number === 6) console.log(`Six is a very cool number`);
else if (number === 0) console.log(`Ooops, you can do better than that`);
else if (number === "") console.log(`Jezos`);
else console.log("Answer the prompt");
