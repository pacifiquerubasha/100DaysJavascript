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

- Do you notice that pyramid up there in tellLies. that's the hell i'm talking about. basically all the nested callbacks that waits for the previous callback to finish executing. This hell affects readability and maintainability of the code.

- Unless you are a devil, you should avoid hell at all costs.
- P.S. I don't know how telling lies works and I have no business in hell. soo, i don't know if that callback hell works.

- But as long as you are alive, it's never to late to escape hell, right? I will now talk about how you can redeem yourself.

# Promises

- A promise is an object that will return a value in future. Because of this “in future” thing, Promises are well suited for asynchronous JavaScript operations.

- Let's dig deep into that. Let's say I asked you to do my programming coursework and you promised that you will do it on thursday.

```Javascript

const promise = rubashaDoesCW ('programming cw on thursday');

```

On wednesday, you haven't acted on that promise yet. And we'll say that the promise is `pending`. This is the status of the promise.

There comes thursady and you actual do my coursework. We'll then say that the promise is `resolved`. When a promise gets resolved, we do then next thing in a `.then` call

```Javascript
rubashaDoesCW('programming cw on thursday')
.then('give him a bottle of water')

```

But if you do not honor your promise, we'll say that the promise is `rejected`. we can then implement the contigency plan in the `.catch` call.

```Javascript
rubashaDoesCW('programming cw on thursday')
.then('give him a bottle of water')
.catch(doCwMyself)

```

In JavaScript, we usually use promises to get or modify a piece of information. When the promise resolves, we do something with the data that comes back. When the promise rejects, we handle the error:

```Javascript
getDataWithPromise(){
	.then(data =>{/* do something with data */})
	.catch(err =>{/* handle the error */})
}
```

# Fetch API

- provides a method `fetch()` that provides an easy, logical way to fetch resources asynchronously across the network.
  It was previously done using `XMLHttpRequest`.

```Javascript
fetch('http://someurl.com/music.json')
.then((response)=> response.json())
.then((data=> console.log(data)));

```

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
