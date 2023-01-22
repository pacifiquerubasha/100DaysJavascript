# Asynchronous Javascript and the event loop

Javascript code is run by the javascript engine in collaboration with a runtime environment, which is either a web browser or Nodejs, making it capable to run in almost any kind of device. The engine reads and executes the code line by line, or at least that is what used to be the case before Javascript decided to incorporate asynchronous operations. The reason for this is because Javascript does not normally allow multithreading(will explore multithreading with Web workers in another paper). The problem with the not allowing more than one operation to be run simultanuously is that heavy operations will block the execution of subsequent tasks, resulting in, say, a browser freezing while waiting for the heavy operation to end. Async Javascript was introduced to adapt to the situation and overcome the issues that developers were facing. 

## How does all this work behind the scenes?

A short analogy might help! 

Mary is a Javascript developer. She has been invited to a developers conference. Our fictional conference has three rooms and once in a room, the door behind you disappears. She enters the first room where the registration happens, it has two front doors. One that leads out, and the other that leads to a waiting room. In this registration room, she will be directed where to go based on her profile. If sent out, she is ready for the conference. But if sent to the waiting room, more stress, Mary! After the decision is made, the next person comes in. As for you Mary who is judged not yet ready for the conference, she enters the waiting room and takes a chair. In the waiting room, she needs to do the necessary tasks set for herself and once done, there is one front door that leads to the queue room. Mary finishes her tasks and gets out of the waiting rooms No work to do, just chill on the queue until she is called. By who? The conference attendant. To go where? Back to the registration desk! When? As soon as the registration room is empty and she is at the start of the waiting queue! :unamused:

To dive into the core of how Javascript deals with both asynchronous and synchronous code in a program based on our analogy, let's take an example of a simple javascript code and examine how the Javascript engine executes it.

```Javascript

console.log('I am the first log')

setTimeout(()=>console.log('I am the timout log'), 10000)

console.log('I am the log after the timeout');

```


### Steps 

Let's run the code !

Step 1

When the program runs, the first code to be executed will be the first line(`console.log('I am the first log');`). It will be sent to the call stack. Since its profile is just a synchronous piece of code, it will be executed and we will see in the console `I am the first log`. The code will be marked as "executed" then removed from the call stack.

>_Console_\
> I am the first log

Step 2

The second piece of code (`setTimeout(()=>console.log('I am the timout log'), 10000);`) will be put in the call stack for execution. But this time around, it is an asynchronous operation, having a callback. Callback itself might be explained as _"do serve other operations coming after me and when I am ready, call me back"_. The timeout is removed from the call stack then sent to the Web API(our waiting room) where it waits for 10 seconds as specified in our timer. 

>_Console_\
> I am the first log

Step 3

The third piece of code (`console.log('I am the log after the timeout');`) will be put on the call stack and executed just like the first one. Why? Well, it is synchronous. As a result, we see in our console a second log. Our console now looks like this:

>_Console_\
> I am the first log\
> I am the log after the timeout

Step 4

10 seconds later, the callback working in the Web API will be ready. It is sent to the callback queue. This is where asynchronous operations(except promises) ready to be executed are sent, in the order in which they arrived on the queue. Given that no one else is on the line, the event loop looks in the call stack. If there is no code running in there, the event loop fetches a callback from the callback queue and puts it inside the call stack. For our case, the event loop will take our callback and put it inside the call stack for execution.

>_Console_\
> I am the first log\
> I am the log after the timeout

Step 5

Once in the call stack, the code inside the callback will be executed, line after line, then the callback removed from the stack(just in our case because there is no asynchronous code in our callback). The console now has out three logs.

>_Console_\
> I am the first log\
> I am the log after the timeout\
> I am the timout log


Let's link the concepts in our short story with Javascript.

| Out           | Registration room      | Waiting room     | Queue room      | Conference Attendant
| -----------   | -----------            | -----------      | -----------     | -----------
| Console       | Call Stack             | Web API          | Callback Queue  | Event loop


In 5 simple steps, this is how the event loop works in Javascript. Of course if the code that we are running had multiple callbacks or async blocks of code, further judgement will have to be considered to decide who gets out of the Web API first. Apart from callbacks like setTimeout or a not-so-evident async operation like changing the src of an image, most of the time, asynchronous activities are data fetching algorithms. And in modern Javascript, we use promises to do exactly that. Promises are special in Javascript because they are called _microtasks_, as opposed to all other operations like `setTimeout` which are normal tasks. Difference? They have their special room called the Microtask queue. The interesting thing about the microtask queue is that code inside it is given priority when the callstack is empty. Before running any other task when the stack is empty, the runtime looks inside the microtask queue, and if there is some promise chilling in there, they will be called to the call stack immediately. 

Asynchronous Javascript has been a game-changer in the way applications are built to give an enjoyable experience to the user by, for example letting them know what is happening when they click on, say, a "Submit button". And the way that the process behind it works is quite interesting to understand to be able to decide on activities that need to be given priority over others. What about the newly introduced multithreading with Microtasks in Javascript? We shall explore them next time.
