/**
 * Primitive and Reference types
 * 
 * All primitive data types are referred to as primitive types
 * Everything else is referred to as reference types
 * This is because of how they are stored in memory
 * 
 * When a primitive data type is declared, it is stored on a stack.
 * It is then identified by the variable name used when it was declared.
 * 
 * Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.
 * Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.
 * 
 * When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable.
 * The object itself is stored on a heap, and its pointer is stored on a stack. The pointer is identified by the object's variable name, and points to that object.
 * 
 * For visuals and further explaination: https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/#:~:text=When%20you%20declare%20a%20primitive,for%20declaration%20in%20your%20program.
 */