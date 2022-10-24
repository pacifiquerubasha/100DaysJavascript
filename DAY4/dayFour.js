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

/**
 * Truthy and Falsy Values
 * Truthy values are values that are considered true when encountered in a boolean context.
 * Falsy on the other hand, are the opposite of truthy.
 * All values are truthy except: false, 0, -0, 0n(BigInt Zero, "", null, undefined, NaN)
 * Examples of falsy values
 */
if (false) {
	// Not reachable
}

if (null) {
	// Not reachable
}

if (undefined) {
	// Not reachable
}

if (0) {
	// Not reachable
}

if (-0) {
	// Not reachable
}

if (0n) {
	// Not reachable
}

if (NaN) {
	// Not reachable
}

if ("") {
	// Not reachable
}

/**
 * Some examples of truthy values which will be coerced to true in boolean contexts, and thus execute the if block
 
*/
if (true)
	if ({})
		if ([])
			if (42)
				if ("0")
					if ("false")
						if (new Date())
							if (-42)
								if (12n)
									if (3.14)
										if (-3.14)
											if (Infinity)
												if (-Infinity)
													/**
 * if-else-if statementes
 * Syntax:
 * if (condition)
    statement;
   else if (condition)
    statement;
   .
   .
   else
    statement; 

 *Example
*/

													var i = 20;

if (i == 10) console.log("i is 10");
else if (i == 15) console.log("i is 15");
else if (i == 20) console.log("i is 20");
else console.log("i is not present");
