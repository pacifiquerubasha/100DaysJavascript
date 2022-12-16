# Modern Javascript development

## Modules

### Introduction
In modern javascript, code is organised into modules. Modules are just javascript files containing code that does a specific thing. A modern js app is made of different modules that we create ourselves and the ones we install from the Node Package Manager. Modules from the npm are just code written by other developers that we might need in our application. 

Modules are such an improvement in Javascript because it helps making abstraction a rule. For example if we have a complex function like Dijkstra's algorithm that find the shortest path between a number of nodes, we do not want the people who will use the algorithm to care about all the looping that happen in the function. The way we do it is we put it in a module then export it. Done! Anyone who wants to use it will just need to know what arguments to provide, and all boom, your shortest path!

### Comparison Module/Old Script tags

1. Top-level code : They are scoped to the current file in ES6 modules while they are global for scripts. This means that global variables in a modules cannot be used in other modules if not exported, which is not needed in old script tags. 

2. Default mode: Module's default mode is Strict while for scripts, we need to specify that is is strict mode if necessary. Default mode for scripts is sloppy mode.

3. Top-level this: The top-level "this" keyword in modules is undefined while it is bound to the window object in scripts

4. Import/export : These are only available in Modules and they are hoisted

5. HTML linking : If we want to use a module in our html, we need to add `type="module"` to our `script` tag, while the type is not needed for normal scripts.

```HTML

<!-- module -->
<script type="module" src="/module.js"></script>

<!-- script -->
<script src="/script.js"></script>

```

6. File downloading : File downloading is async in modules but sync in scripts

### Build

When we want to deploy our app made of modules, we always need to make sure the code can be read by all browsers or environments. Given that our modules are a fruit of ES2015, our code needs to pass through a number of steps before being ready. All our modules are bundles into one single js file that will be sent to the server. In-between the bundling and sending to server happens two operations called transpiling and polyfilling. These operations basically help in converting modern js code into ES5 code that can be understood by older browsers. There are tools, software available to do this job for us. Eg. Webpack, Parcel or newly created Vite or Turbopack.

### Modules in action

#### Export

To export code means to make it available for use anywhere in our app. We use the `export` keyword to export a piece of code. There are two types of imports: _named exports_ and _default exports_. The difference between the two is that we can only have one default export but many named exports. And we can have both in one module

```Javascript
/* module.js*/

/* Named exports */

export const variable = 5;

export const addVariables = (varOne, varTwo)=>{
    return varOne + varTwo;
}


/* Default export*/

export default printVariable = ()=>{
    console.log(`The value of the variable 'variable is' ${variable}`)
}

```

In case we do not want to fill our file with exports, we can opt to export needed variables or classes, or functions at the bottom of our file as follows.

```Javascript
/* module.js*/


const variable = 5;

const addVariables = (varOne, varTwo)=>{
    return varOne + varTwo;
}


export default printVariable = ()=>{
    console.log(`The value of the variable 'variable is' ${variable}`)
}

/* exported as object*/
module.exports = {variable, addVariables}

```

#### Import

To import the pieces of code we exported, we just need to use the `import` keyword followed by the element to export and the path to the module containing the element. 


```Javascript
/* anotherModule.js*/

import printVariable, {variable, addVariables} from "./module.js"


```
> Notice the difference between how we import named exports and default ones. All named imports will need to be destructured from the exports container. On the other hand, you just put the name of the default import. Simple! It is advised not to mix default and named imports because of the complexity that comes with it but there is no real issue with that. 

You can alias import and exports by using the `as` keyword next to the import/export element. When we need to access these variables outside of their modules, we will need to use the aliases and not the original names.

```Javascript

    import printVariable, {variable as importedVariable, addVariables as sum } from "./module.js"

    console.log(importedVariable); //prints 5
    console.log(variable);          //not recognised

```

>Note that imports in js are live connections, meaning that the change of, say, value of `variable` in `module.js` will be reflected in `anotherModule.js`. 
>We can import all elements from a module using `*` like this : `import * as MODULE_EXPORTS from "./module.js"` then we can log the value of `MODULES_EXPORTS` to see its format then access our exports.



