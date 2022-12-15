# Local storage API

LocalStorage is a browser API that allows us to store data that will persist even after we close the page. localStorage data is in a key-value format. This means that to store a piece of data in the local storage, we will have to provide a key that will be associated to the value we want to store. We shall see the use of the key soon.

The keys and the values stored with localStorage are always in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

It is highly advised to only use local storage to store small amounts of data because of its limited capacity and any performance issues that may arise when the browser is overloaded.

To add an item to the storage we use the `setItem()` method. This method receives two arguments, first a key then the value associated to the key.

```Javascript

localStorage.setItem("myAge", "very old");

```

>Notice: If we want to change the value assigned to myAge, we need to set another item with the changes to the localstorage with the same key, in this case "myAge". 

In order to read an item present in the localstorage, we use `getItem()` method by passing in, as argument, a string which is the key.

```Javascript

const per = localStorage.getItem('myAge');

```

We can also remove items from the store by using the `removeItem(key)` method. Use `clear()`(with no argument) to remove all items from the storage. 

```Javascript
localStorage.removeItem('myAge');
localStorage.clear();

```

If you want to store an object into the localstorage you have to convert it into a string first. This is done by using `JSON.stringify(obj)` then when we want to retrieve the object, we use `JSON.parse()` which converts it back to an object.

```Javascript
const ladyObject = {
  name:'Lady',
  age:999,
}

//Saving to localstorage
localStorage.setItem('lady', JSON.stringify(ladyObject));

//Retrieving data from localstorage
const localstorageData = localStorage.getItem('lady');
const retrievedLadyObject = JSON.parse(localStorageData);


```

Have fun!