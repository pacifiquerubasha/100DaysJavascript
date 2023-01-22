# Asynchronous Javascript and the event loop

The fact that Javascript code is executed by the javascript engine in conjunction with a runtime environment—either a web browser or Nodejs—allows it to run on virtually any device. The engine was used to execute the code line by line before Javascript made the decision to include asynchronous operations. This is because Javascript typically does not support multithreading. Heavy operations will impede the completion of subsequent tasks, causing, for example, a browser to freeze while waiting for the heavy operation to finish, which is the drawback of preventing more than one operation from being carried out simultaneously. The development of asynchronous Javascript was an answer to developers' issues and a response to shifting circumstances.

Because it is run in the background until it is ready to be used, resource-intensive code in asynchronous JavaScript does not impede the execution flow. The asynchronous code will not be put back on the stack until it has finished running.

## What actually occurs beneath the surface in all of this?

A brief analogy may be helpful!

Mary is a Javascript developer. She has been invited to a conference for developers. There are three rooms in our fictional conference, and once inside, the door behind you disappears. She enters the first room, which has two front doors and is where the registration takes place. One door leads out, and the other to a lounge area. She will be told where to go from this registration room based on her profile. She is prepared for the conference if sent out. Mary, however, more stress would result if she were sent to the waiting room. The next person enters the room after the decision is made. Regarding Mary, who is deemed unprepared for the conference, enters the waiting room. She must complete the assigned tasks in the waiting room, and when she is done, there is a single front door that leads to the queue room. Mary completes her tasks and exits the waiting areas. There is no work for her; she can simply relax in the line until she is called. By who? The conference attendant. Where to go? Back to the registration desk! When? As soon as the registration room is empty and she is at the start of the waiting queue!: unamused:

Let's look at an example of simple code and how the Javascript engine executes it to get down to the core of how Javascript handles both asynchronous and synchronous code in a program. This will help us relate the process to the one we used in our analogy.

```Javascript

console.log('I am the first log')

setTimeout(()=>console.log('I am the timout log'), 10000)

console.log('I am the log after the timeout');

```


### Steps 

Let's run the code !

Step 1

When the program runs, the first code to be executed will be the first line(`console.log('I am the first log');`). It will be forwarded to the call stack. Because its profile is just a synchronous piece of code, it will be executed and we will see `I am the first log` in the console. The code will be marked as "executed," and the call stack will be cleared.

>_Console_\
> I am the first log

Step 2

The second piece of code (`setTimeout(()=>console.log('I am the timout log'), 10000);`) will be put in the call stack for execution. However, this time it is an asynchronous operation with a callback. Callback can be defined as _"do continue serving other operations coming after me and call me back when I am ready"_. The timeout is removed from the call stack and sent to the Web API (our waiting room), where it waits for the designated 10 seconds.

>_Console_\
> I am the first log

Step 3

The third line of code (`console.log('I am the log after the timeout');`) will be added to the call stack and executed in the same manner as the first. Why? It is, after all, synchronous. As a result, we see a second log in our console. Our console now appears to be as follows:

>_Console_\
> I am the first log\
> I am the log after the timeout

Step 4

The callback function in the Web API will be ready in 10 seconds. When done, it is routed to the callback queue. This is where ready-to-execute asynchronous operations (except promises) are sent in the order they arrived on the queue. Because no one else is on the line, the event loop searches the call stack. If no code is running, the event loop retrieves a callback from the callback queue and places it in the call stack. In our case, the event loop will accept our callback and place it in the call stack for execution.

>_Console_\
> I am the first log\
> I am the log after the timeout

Step 5

Once in the call stack, the code inside the callback will be executed line by line, and the callback will be removed from the stack (just in our case because there is no asynchronous code in our callback). The console is now emitting three logs.

>_Console_\
> I am the first log\
> I am the log after the timeout\
> I am the timout log


Let's link the concepts in our short story with Javascript.

| Out           | Registration room      | Waiting room     | Queue room      | Conference Attendant
| -----------   | -----------            | -----------      | -----------     | -----------
| Console       | Call Stack             | Web API          | Callback Queue  | Event loop


This is how the event loop in Javascript works in 5 easy steps. Of course, if the code we're running contains multiple callbacks or async blocks of code, we'll have to use our best judgment to determine who gets out of the Web API first. Aside from callbacks like `setTimeout` or a less obvious async operation like changing an image's src, most asynchronous activities are data fetching algorithms. And promises are used to accomplish this in modern Javascript. Promises are unique in Javascript because they are referred to as _microtasks_, as opposed to all other operations, such as 'setTimeout,' which are considered normal tasks. Difference? They have a special room known as the Microtask queue instead of going to the callback queue. The microtask queue is interesting in that code inside it is given priority when the call stack is empty. When the stack is empty, the runtime looks inside the microtask queue for any promises, and if there are any, they are immediately called to the call stack.

By letting users know what's going on when they click a "Submit" button, for example, asynchronous Javascript has revolutionized the way applications are built to provide an enjoyable user experience. To be able to choose which activities should take precedence over others, it is helpful to comprehend the process's workings, which are quite interesting. What about Javascript's newly implemented multithreading with Microtasks? Next time, we'll look into them.