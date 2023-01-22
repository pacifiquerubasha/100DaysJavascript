

# Asynchronous Javascript

When running javascript, the general behavior is that a line of code is executed after the one written before it has ended executing. This is called synchronous javascript. Synchronous javascript executes code line by line, and as a consequence, if a line of code takes time to execute, the entire execution will stop until the heavy task has ended. To solve this issue, asynchronous javascript was created. I guess you know exactly what is does. Or rather what it does not do. Either way, asynchronous javascript code does not block the execution flow in the sense that it is put on a background where it runs until finished. It is only when the asynchronous code finished executing that it will be put back on the stack. 

Example of Synchronous JS
```Javascript
    const day = "Monday";
    console.log(day);

    alert(`The day provided is ${day}`);

    document.querySelector('.dayContainer').textContent = `Workout on ${day}`;
```
> Note that the line that queries the element with classs `dayContainer` then changes its content to `Workout on Monday` will be executed only after the alert opened on the previous line is closed.

Example of Asynchronous JS
```Javascript
    const day = "Monday";

    setTimeout(function(){
        console.log(day);
    }, 3000)

    document.querySelector('.dayContainer').textContent = `Workout on ${day}`;
```
> The last line of code will be executed before setTimeout because setTimeout is an asynchronous block of code. It runs in the background and after three seconds, it will print the day to the console. Note that `addEventListeners ` and callback functions do not make a piece of action asynchronous.


## AJAX and APIs

Let's start with an example. We want to build a software that allows our users to have access to weather details. It would not make sense for us to collect the data every day and input them manually in a database and then display them on our interface. Why? Well, just because there are tons of online data storages that contain the data and, since we do not want to reinvent the wheel, the storages can do the job for us. We just need to ask for it. As simple as that! 

### But why would anybody give public access to their database? 

Well, no one does. We get access to the data through what is called APIs. An API(Application Programming Interface) is a piece of software that is used by another one to allow applications to communicate. An example of an API is the geolocation API. We do not know anything about the computation behind the data we receive, we just communicate through the API that is made public. APIs can either be inherent to a language, or coming from a third pary, and the good news is, we can build our own using backend technologies like Nodejs. 

### How do we access the APIs?

AJAX is one of the ways. AJAX, which stands for Asynchronous Javascript And XML, allows us to communicate with remote servers in an asynchronous way. It provides us with an easy way to request the data that we need from an interface and receive a response containing what we asked for. Modern AJAX uses JSON format because it is widely used but some time back the response data was retrived in XML format(remember the X in AJAX). JSON(Javascipt Object Notation) is prefered because of its structure that is close to Javascript objects.

Let's put ourselves in the old shoes and make some old-fashioned AJAX call to the weather API! We need to create an account with [WeatherAPI](https://www.weatherapi.com/signup.aspx) which will give us an API key to use in our request

```Javascript

    const API_KEY = "7e2cde49396d4a6794480108221212";
    const place = "London";
    
    const request = new XMLHttpRequest();
    request.open('GET', `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}&aqi=no`);
    request.send();

    request.addEventListener('load', function(){
        const response = JSON.parse(this.responseText)
        console.log(response);
    })

```

As simple as that! After creating the account and receiveing the key, we make a request using XMLHttpRequest. We open the request by providing the HTTP method as first argument, then the API url as second argument. After opening, we send the request. Given that this is an asynchronous call, we will not receive the response right away. We listen to the request in the background and as soon as it finished loading the data, we retreive the response and parse the JSON to get an object that we can use to display the information received.


### HOW THE WEB WORKS
 
#### Steps 

 1. A web user opens their browser and types website name https://google.com/maps. This url is made of three parts:

| Protocol    | Domain name    | Resource
| ----------- | -----------    | -----------
| https://    | google.com     | /maps

 
 2. The client(browser) sends the url to the DNS(Domain Name Server) that does look up and sends back the real address of the website https://234.234.145.206:8090. This real address also contains three parts. 
 
| Protocol    | IP address      | Port Number
| ----------- | -----------     | -----------
| https://    | 234.234.145.206 | :8090

 
 3. After receiving the address back from the DNS, the client establishes a TCP/IP socket connection with the server. The TCP/IP allows communication by defining how data travels accross the web. But what do the TCP and IP practically do?

  * TCP(Transmission Control Protocol) breaks the requests and responses into small chunks before they are sent, then when at destination will reassemble them(to reduce traffic)
  * IP(Internet Protocol) makes sure that the requests and responses are sent to the right destination.
 
 4. Connection successful, Next step is to send an HTTP request to the website server. HTTP requests are made of
 
| START LINE             | HTTP REQUEST HEADERS                     |  REQUEST BODY
| -----------            | -----------                              | -----------
| GET  /maps  HTTP/1.1   | Host, User-Agent, Accept-Language ...    | Only when sending data to the server (ex POST)

> Note that the start line also has three parts, the HTTP method(`GET`), the request target(`/maps`) and the HTTP version(`HTTP/1.1`) 
 
 
 5. As soon as the resource is resolved, the client receives a HTTP response similar to the request but with different content
 
| START LINE             | HTTP RESPONSE HEADERS                                             |  RESPONSE BODY
| -----------            | -----------                                                       | -----------
| HTTP/1.1   200    OK   | Specified by the developer ('Content-type', date, enconding)      | Response


> The start line contains, again three components, which are the HTTP version(`HTTP/1.1`), the Status code(`200`) and the Status message(`OK`).

 