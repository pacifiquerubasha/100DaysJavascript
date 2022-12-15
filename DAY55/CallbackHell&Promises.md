# Callback Hell

- You can already tell from the name that there is nothing good about this. I'll explain why.

```Javascript
const tellLies = (nextLie) => {
	curateLie(function (sit) {
		analyseSit(sit, function (analysedSit) {
			thinkaBit(function (thought) {
				putLiesTogether(thought, sit, function (lie) {
					nextLie(lie);
				});
			});
		});
	});
};

```

- Do you notice that pyramid up there in tellLies? That's the hell I am talking about. Basically, all the nested callbacks that wait for the previous callback to finish executing. This hell affects readability and maintainability of the code.

- Unless you are a devil, you should avoid hell at all costs.
- P.S. I don't know how telling lies works and I have no business in hell. Soo, I don't know if that callback hell works.

- But as long as you are alive, it's never to late to escape hell, right? I will now talk about how you can redeem yourself.

# Promises

- A promise is an object that will return a value in future. Because of this “in future” thing, Promises are well suited for asynchronous JavaScript operations.

- Let's dig deep into that. Let's say I asked you to do my programming coursework and you promised that you will do it on thursday.

```Javascript

// const promise = rubashaDoesCW ('programming cw on thursday');
const rubashaDoesCW = (message)=>{
	return message === "programming cw on thursday";
}

const promiseToDoCourseworkOnThursday = new Promise((resolve, reject)=>{
	const done = rubashaDoesCW ('programming cw on thursday');
	resolve();
})

```

On wednesday, you haven't acted on that promise yet. We'll say that the promise is `pending`. This is the status of the promise.

There comes thursady and you actually do my coursework. We'll then say that the promise is `resolved`. When a promise gets resolved, we do the next thing in a `.then()` call. This `then()` method gets access to the data that was returned from the promise and we can check it then reward you with a bottle of water. A kind quality reward!

```Javascript
// rubashaDoesCW('programming cw on thursday')
// .then('give him a bottle of water')

const promiseToDoCourseworkOnThursday = new Promise((resolve, reject)=>{
	const done = rubashaDoesCW ('programming cw on thursday');
	if(done) resolve();
})

```

But if you do not honor your promise, we'll say that the promise is `rejected`. we can then implement the contigency plan in the `.catch()` call.

```Javascript
// rubashaDoesCW('programming cw on thursday')
// .then('give him a bottle of water')
// .catch(doCwMyself)

const promiseToDoCourseworkOnThursday = new Promise((resolve, reject)=>{
	const done = rubashaDoesCW ('programming cw on thursday');
	if(done) resolve();
	else reject();
	
})
.catch(() => console.log("Dumb as a rock !"))

```

In JavaScript, we usually use promises to get or modify a piece of information. When the promise resolves, we do something with the data that comes back. When the promise rejects, we handle the error:

```Javascript
// getDataWithPromise(){
// 	.then(data =>{/* do something with data */})
// 	.catch(err =>{/* handle the error */})
// }

const promiseToDoCourseworkOnThursday = new Promise((resolve, reject)=>{
	const done = rubashaDoesCW ('programming cw on thursday');
	if(done) resolve();
	else{
		reject();
		throw new Erro("A very useless human being... I will do the coursework myself")
	}
})
.then(res => console.log(`Give him a bottle of water because of this: ${res}`))
.catch(err => console.log(err))


```

# Fetch API

The Fetch API has a method, `fetch()`, that provides an easy, logical way to fetch resources asynchronously across the network. Remember that we were fetching data previously using `XMLHttpRequest` which proved to have readability issues.

```Javascript
fetch('http://someurl.com/music.json')
.then((response)=> response.json())
.then((data=> console.log(data)));

```

Here we are fetching JSON data across the network and printing it to the console. The simplest use of fetch() takes one argument — the url of the resource you want to fetch. When a response if provided, we consume it in the `then()` method chained on the `fetch()` method. The response received is not JSON data but instead a promise that resolves with a pesponse object. 

The response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the `json()` method, which returns a second promise that resolves with the result of parsing the response body text as JSON. We can finally chain another `then()` method to access the json data.
