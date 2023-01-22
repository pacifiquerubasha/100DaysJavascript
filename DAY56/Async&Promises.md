# Asynchronous Javascript(Continuation)

## Recapitulation

Previously in Async series...

We introduced how Javascript works behind the scenes and the limitations that have found resolution in the use of asynchronicity. Let's remind ourselves a couple of things. Javscript code is run by the javascript engine in collaboration with a runtime environment, which is either a web browser or Nodejs, making it capable to run in almost any kind of device. The engine reads and executes the code line by line, or at least that is what used to be the case before Javascript decided to incorporate asynchronous behaviors. The reason for this is beacause there is only one thread in javascript. The problem with the non-existence of multithreading is that heavy operations will block the execution of subsequent tasks, resulting in, say, a browser freezing while waiting for the operation to end. Async was introduced to adapt to the situation and overcome the issues that developers were facing.

## How does all this work behind the scenes?

Let's take an example of a simple javascript code and examine how Js executes it.

```Javascript

console.log('I am the first log')

setTimeout(()=>console.log('I am the timout log'), 10000)

console.log('I am the log after the timeout');

```

To illustrate the process with an analogy, let's say you have been invited to a conference. The conference has three rooms. Once in the room, the door you entered from disappears behind you. The first is where the registration happens, it has two front doors, one that leads out, and another that leads to a waiting room. In the registration room, you are directed where to go based on your profile. If sent out, you are ready for the conference. But if sent to the waiting room, more stress my friend! The next person comes in. As for you who is not ready for the conference, you enter the waiting room and take a chair. In the waiting room, you need to do the necessary tasks set for yourself and once done, there is one fron door that leads to the queue room. No work to do, just chill on the queue until you are called. By who? The conference attendant. To go where? Back to the registration desk! When? As soon as the registration room is empty and you are at the start of the queue! :unamused:

Let's link the concepts in our short story with Javascript.

| Conference    | Registration room      | Waiting room     | Queue room      | Conference Attendant
| -----------   | -----------            | -----------      | -----------     | -----------
| Console       | Call Stack             | Web API          | Callback Queue  | Event loop


### Steps 

Let's run the code !

Step 1

The first line(`console.log('I am the first log');`) will be sent to the call stack. Since it is just a synchronous piece of code, it will be executed and  we will see in the console `I am the first log`. The code will be marked as executed then removed from the call stack.

>_Console_\
> I am the first log

Step 2

The second piece of code (`setTimeout(()=>console.log('I am the timout log'), 10000);`) will be put in the call stack for execution. But it is an async operation, having a callback. Call back itself might be explained as _"do serve other operations coming after me and when I am ready, call me back"_. The timeout is sent to the Web API(our waiting room) where it waits for 10 seconds as specified. The function is removed from the call stack.

>_Console_\
> I am the first log

Step 3

The third piece of code (`console.log('I am the log after the timeout');`) will be put on the call stack and executed just like the first one. Why? It is synchronous. As a result, we see in out console a second log. Our console now looks like this:

>_Console_\
> I am the first log\
> I am the log after the timeout

Step 4

After 10 seconds, the callback working in the Web API will be ready. It is sent to the Callback queue. Given that no one else is on the line, the event loop looks in the call stack and if nothing is there, fetches a callback from the callback queue and puts it inside the call stack. The event loop will take our callback and put it inside the call stack for execution.

>_Console_\
> I am the first log\
> I am the log after the timeout

Step 5

Once in the call stack, the code inside the callback will be executed, then the callback removed from the stack.

>_Console_\
> I am the first log\
> I am the log after the timeout\
> I am the timout log

This is just, in 5 simple steps how event loop works in Javascript. Of course if the code that we are running had multiple callbacks or async blocks of code, further judgement will have to be considered to decide who gets out of the Web API first. Apart from callbacks like setTimeout or changing the src of an image, most of the time asynchronous activities are data fetching algorithms. And in modern Javascript, we use promises to do exactly that.

## What are promises ?

Promises are a way of handling asynchronous operations in javascript. But we already had a way of doing that with Ajax's  `XMLHttpRequest`? Of course! But the big problem with the previous method is that if we had to do five dependent API calls, we would result in what is called callback hell. Callback hell is simply nested block of code, of triangular shape that chains API calls based on the results of previous calls. 

Example

```Javascript

    const API_KEY = "7e2cde49396d4a6794480108221212";
    
    const request = new XMLHttpRequest();
    request.open('GET', `http://api.randomwebsite.com/current.json?key=${API_KEY}`); //This is not a real API url
    request.send();

    request.addEventListener('load', function(){
        const response = JSON.parse(this.responseText) //This gives us a location
        const request2 = new XMLHttpRequest();
        request2.open('GET', `http://api.randomwebsite.com/current.json?key=${API_KEY}&location=${response.location}`); //This is not a real API url
        request2.send();

        request2.addEventListener('load', function(){
            const response2 = JSON.parse(this.responseText)

            const request3 = new XMLHttpRequest();
            request3.open('GET', `http://api.randomwebsite.com/current.json?key=${API_KEY}&location=${response2.location}&latitude=${response2.lat}&longitude=${response2.long}`); //This is not a real API url
          
            request3.send();

            request3.addEventListener('load', function(){
                const response3 = JSON.parse(this.responseText)
                setTimeout(()=>{

                    console.log("Finally found the place I was looking for, after an eternity!")

                }, 5000)

            });


        });
        
    })


```

You can spot the shape, can't you? This becomes too messy and hard to maintain. Promises provide a way of flatenning code by chaining requests in a more efficient way. .

## Let's build one

```Javascript

    const asyncOperation = new Promise((resolve, reject)=>{
        console.log('Promise starting...')
        resolve();
    })
    .then(()=>{
        console.log('Following callback starting...')
    })
    .then(()=>{
        console.log('Another callback starting...')

    })
    .catch((err)=>{
        throw new Error();
        console.log('An error occurred...')
    })
    .finally(()=>{
        console.log('End of times...')
    })

```

A promise is declared as an object of the Promise class. It receives a callback that takes two callbacks as arguments. The first is `resolve` which handles successfull operations, the second `reject` which will execute if an error occurs. This first part creates the promises, then the remaining will consume it. The `then()` methods of the promise receive a callback as argument, and this callback will be executed if the previous operation was successfull. As soon as an error occurs, the promise will just to the `catch()` block and throw an error. Last but not least, whether the promise succeeded or not, the finally method will be called an its message printed in the console. A lot to take in! _[We will discuss more about this in the next version]_.


## setTimeout or Promise, who is given the front seat behind the scenes?

You guessed it wrong! It's the Promise. Promises are special in Javascript because they are called _microtasks_, as opposed to all other operations like `setTimeout` which are normal tasks. Difference? They have their special room called the Microtask queue. The interesting thing about the microtask queue is that code inside it is given priority when the callstack is empty. Before running any other task when the stack is empty, the runtime looks inside the microtask queue, and if there is some promise chilling in there, they will be called to the stack immediately. 

Enough content for today!



