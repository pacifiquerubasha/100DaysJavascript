/**
 * CONSTANTS
 * Constants hold final unchangeable values

 * 
 */

const SCHOLASTIQUE = "Young";
SCHOLASTIQUE = 2002;
console.log(SCHOLASTIQUE) //Runtime SyntaxError


/**
 * 1. OPERATIONS PRECEDENCE
 * 
 * Assignment operators, Exponentiation, Ternary are RIGHT-LEFT associative
 * Other operations are LEFT-RIGHT associative
 * 
 * RIGHT-ASSOCIATIVE : Start operation from RIGHT
 * Eg. scho = number = 6 will start by running (number = 6) then scho = (number=6) and result in scho=6
 * 
 * LEFT ASSOCIATIVE :Start operation from LEFT
 * Eg. scho = 6 + 5 - 4 will run (6+5) which is 11 then (11)-4 and result in 7 
 * 
 * ####################################################################################################
 * 
 * Basic operation precedence (The numbers assigned are the degree of precedence)
 * 
 * TERNARY, ARROW(=>), SPREAD(...), ASSIGNMENT = 3
 * OR = 4
 * AND = 5
 * EQUALITIES AND INEQUALITIES(==, ===, !==, !=) = 8
 * GREAT / LESS / instanceof  (<, <=, >, >=) = 9
 * ADDITION, SUBSTRACTION = 11
 * DIVISION, MULTIPLICATION, REMAINDER = 12
 * EXPONENTIATION = 13
 * LOGICAL NOT(!) / UNARY(+, -) / PREFIX INCREMENT OR DECREMENT(++.., --...) typeof / await = 14
 * POSTFIX INCREMENT OR DECREMENT(..++, ..--) = 15
 * OPTIONAL CHAINING / FUNCTION CALL= 17
 * GROUPING = 18
 * 
 * 
 * 
 */



/**
 * CHALLENGE
 * 
 * Calculate the BMI of Mark and John
 * 
 * BMI = (mass)/(height**2)
 * 
 */

//Mark's details
let MASS_MARK = 78;
let HEIGHT_MARK = 1.69;
const BMI_MARK = MASS_MARK/(HEIGHT_MARK**2);

//John's details
let MASS_JOHN = 92;
let HEIGHT_JOHN = 1.95;
const BMI_JOHN = MASS_JOHN/(HEIGHT_JOHN**2);

const mark_higher_bmi = BMI_MARK > BMI_JOHN;

if(mark_higher_bmi){
    console.log(`Mark's BMI (${BMI_MARK}) is higher than John's (${BMI_JOHN})`)
}else{
    console.log(`John's BMI (${BMI_JOHN}) is greater than Mark's (${BMI_MARK})`)
}


/**
 * STRING LITERALS
 * 
 * Introduced to reduce the stress of using the concatenation operator + and multiline strings
 * 1. Uses backticks or backquotes (`` ``) instead of normal quotes ("" '') to store strings
 * 2. Allows to just type the text on as many lines ad we need inside backticks
 *  
 * 
 */

//======CONCATENATION=======
const firstName = "Scholastique";
//Instead of
const studentName = "My name is " + firstName;

//We do
const studentNameUsingTemplateString = `My name is ${firstName}`

//======MULTILINE STRINGS=======

const multiLineStringOldSchool = "This is a multiline\n\
string from 20 years ago";
                
const multiLineStringES6 = `This is a multiline
string from 2015`;

console.log("OLD", multiLineStringOldSchool)
console.log("\nNEW", multiLineStringES6)


/**
 * CONDITIONS
 * 
 * IF/ELSE
 * 
 * Used to make decisions
 * 
 * SYNTAX
 * 
 * Basic: 
 * if(condition){ 
 *    DO SOMETHING 
 * }
 * 
 * Two options : 
 * if(condition) {
 *    DO SOMETHING
 * }
 * else{
 *    DO SOMETHING
 * }
 * 
 * 
 */

const commitmentDuration = 100;
if(commitmentDuration > 100){
    console.log("THE DURATION IS GREATER THAN EXPECTED")
}
else{
    console.log("THE DURATION IS LESS THAN THE ONE SET")

}
