# Modern Javascript(Continuation)

## Bundling

During our previous discussion about modular javascript, we talked about how modern javascript uses modules instead of normal js files to organise code. Modules contribute to the entire project but we need to consider two modular programming principles that guide the relationships between and within modules: cohesion and coupling.

### Coupling

Coupling is the degree of interdependance between modules of a software system. It measures how tightly related modules are by determinging the number of relations existing and data shared between the modules. There are many types of coupling, including data coupling, stamp coupling, control coupling... A good software need to have low coupling because it reduces the interdependance, hence the impact propagation if a module fails.

### Cohesion

On the other hand, cohesion is the measure of functional relationship between elements within a module. We should aim to have a high relationship between functionalities in a module by making sure a piece of function does only what it is supposed to do, does it efficiently and is linked to other functionalities to form the unity of the module. 

When building a software that has modules, obviously that is the case for us modern js devs, we should keep these two principles in mind to develop readable and scalable codebases. Low coupling but hight cohesion is the law! But even if we aim to have a low coupling, we will need some modules to cooperate to achieve a specific behavior. The question is, how will we make sure that the version of js used in one module(say, ES2021) is compatible with other older versions ?

Example
```Js
    /* module1.js */
    const name = "cyrrusDEL";
    const printName = () => console.log(`Your name is ${name}`)

    const names = ["Cyrrus", "Del"]
    const cyrrus = names.find(el => el.toLowerCase() === "cyrrus");

    /* module2.js */

    var surname = "Labs";
    function printSurname(){
        console.log("Your surname is "+ surname)
    }


```

Well, the answer is simple, throught the use of a transpiler! A transpiler is a tool that is used to convert the syntax of modern javascript(ES6+) into the standard javascript (ES5) to allow older browsers to behave as planned. We do not have to write code that tells js to do this job, fortunately. There are toold readily available to to the job for us. Such tool is [Babel](https://babeljs.io/). As shown in the two modules above, the code in `module1.js` will be converted to ES5 format, meaning that the `const` keyword will be replaced by `var` and the arrow function back to normal functions with the `function` keyword. 

But the drawback of using a transpiler is that some features that involve logic and not just syntax change, it is unable to find a direct equivalent in ES5 hence it just reads it the way it is. Fortunately for us, there are tools that take care of that, and they are called polyfillers. The job of a polyfiller is to build a feature that is equivalent to the modern feature using old syntax. For example, the `array.find(callback)` method used will be changed into its ES5 equivalent. Let's take some simple example for our find method.

```Js

    const names = ["Cyrrus", "Del"]

    function find(array, callback){

        for(var i=0; i<array.length; i++){
            if(callback(array[i])) return array[i]; 
        }

        return null;
    }

    var cyrrusName = find(names, function(element){
        return element.toLowerCase() === "cyrrus";
    })

    console.log("FFX", cyrrusName)

```

The same is applicable for features like Promises. Again we do not need to write the code for polyfilling ourselves, because we do not have to reinvent the wheel. Tools like [core-js](https://www.npmjs.com/package/core-js) are available in npm to provide this functionality and we can thank them for the hard work. 

>Note that for async functions, we need to use packages like `regenerator-runtime` to transpile them. Available on npm [here](https://www.npmjs.com/package/regenerator-runtime).

These two concepts, transpilling and polyfilling are core concept for modern javascript as new features and frameworks emerge every single day and a way to make them accessible is to tranform them into standard js. Code bundlers have been created to allow us to focus on developping the code and let them do the module bundling(compressing all modules into one) then transpilling/polyfilling the one js bundle ready for deployment.

## Writing clean code

As a modern javascript developers, we always tend to use new language features and simplify our code as much as possible to look pro. But the main rule to follow when programming is leaving a legacy for the feature, by writing code that is both readable and maintainable. We need to allow ourselves to follow certain conventions that do not limit our creativity but provide us a certain means of communication. Mr Jonas has some good advice for us.

![FirstAdvice](https://github.com/Scholaa/100DaysJavascript/blob/main/DAY60/firstImage.png)

![SecondAdvice](https://github.com/Scholaa/100DaysJavascript/blob/main/DAY60/secondImage.png)



## Imperative and declarative code

Additionally, we need to keep in kind that there are two types of code depending on whether the instructions we write are detailed or not. Imperative code, as the name suggests, is code that provides step-by-step process about how to accomplish a certain task. This is low-level coding, using primitive code to do something. This type of code is generally used in utility code where we need to provide a functionality that can be reused, so we need to abstract all the logic in this imperative code. 

Declarative code, on the other hand, is the use of the abstracted code, where we do not give step-by-step actions to the computer, we just tell it what to do and it takes care of the underlying logic to accomplish the task. While imperative code deals with how to do something, declarative just tells the computer what to do.

Let's take the examples used above to illustrate these principles.

```Js
    /* Imperative code*/

    const names = ["Cyrrus", "Del"]

    function find(array, callback){

        for(var i=0; i<array.length; i++){
            if(callback(array[i])) return array[i]; 
        }

        return null;
    }

    var cyrrusName = find(names, function(element){
        return element.toLowerCase() === "cyrrus";
    })

    console.log("FFX", cyrrusName)


    /* Declarative code */

    const cyrrusNameDeclarative = names.find(el => element.toLowerCase() === "cyrrus")

```

Notice the simplicity in declarative code. This is not a call to always write declarative code, because it is not evidently easy to read, but we should try as much as possible to take advantage of them. Instead of using for loops on arrays, we have alternative methods readily available fo that.

Happy Declaring!