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
