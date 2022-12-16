# Async Function

- The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

- The await keyword is only valid inside async functions within regular JavaScript code.

- The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs.

- Async functions always return a promise.

- Top-level code, up to and including the first await expression (if there is one), is run synchronously. In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, however, the async function will always complete asynchronously.

```Javascript
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1"))
    console.log('hello there')
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2"))
    console.log('hello there number two')
  );
}

foo(); // this will first load in the background without blocking the executing of the following lines.
console.log('too bad for you my friend!') // Will be logged first
```

# Error Handling

We'll use our old friend `try...catch` statements of your intended code

The `try` block contains multiple statements
The `catch` block specifies what will be done if an exception is thrown in the `try` block

```Javascript
try{
    const x = 6;
    const x= 1;
} catch(err){
    console.log(err.message);
}
```

# Handling multiple promises

Yeah you heard it right. Let's work with a simple example.

```Javascript

  let firstPromise = new Promise((resolve, reject)=>{
    resolve("FIRST");
  })

  let secondPromise = new Promise((resolve, reject)=>{
    resolve("SECOND");
  })

  let thirdPromise = new Promise((resolve, reject)=>{
    resolve("THIRD");
  })

```

When we run this piece of code, the runtime is going to, as usual, execute the promise one after another. We can see the time it takes to respond to each of them in the network tab if we are using a web browser. But what if these promises are not related, pushing us to execute them at the same time? Well ES6 has got us covered. The `Promise` class provides us with a number of methods that allow requests concurrency and we can play with them depending on our needs.

## Promise.all()

`Promise.all([promises])` allows us to run our promises concurrently without worrying about each other. After they are resolved, we can chain a `.then()` method to consume the data received. 

```Javascript
  Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((values)=> console.log(values))

```

The drawback here is that `Promise.all()` will reject immediately if any of the promises specified in the argument array fails. Since our objective is to run these promises at the same time because they are not related, we need to find another way. It is not a happy scenario to get 0 to a quiz because your friend did not submit theirs, is it? That's exactly where `Promise.allSettled()` comes in.

## Promise.allSettled()

`Promise.allSettled()` does exactly what `Promise.all()` does with the slight difference that it executes all the promises regardless of whether one of them failed or not. This method was introduced in ES2020 to fix the issue of `.all()`. 

## More methods...

1. `Promise.race()` : Just like the name suggests, promises race. Instead of returning results of all promises passed as arguments, the returned response will be that of the first promise to settle. As soon as the first promise resolves, that's the end. The problem with this is that if the promise that settles fails, it will win the race hence the entire operation will be considered as rejected. But if the first promise is resolved, then we can some data to work with

```Javascript
  Promise.all([firstPromise, secondPromise, thirdPromise])
  .then(value => console.log(value))
  .catch(err => throw new Error("The first promise was apparently hungry, very weak one..."))

```

2. `Promise.any()` : Well, for a method that has shortcomings in javascript are associated their alternative solutions. `Promise.any()`  comes to somehow solve the issue raised in `Promise.race()`. Instead of shortcircuiting the execution as soon as one of the promises settles, ES2021 came with this method that only resolves the combined promises when there is a promise that settles and resolves. Not rejects. It ignores all failed promises and only returns the successful ones, meaning that the only way for the entire `Promise.any()` to fail is if all the promises in the arguments array fail.

Enough!

