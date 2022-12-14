# Local storage API

- localStorage is a place in the browser where we can store data and will stay there even after we close the page.

- localStorage is a key-value store. This means that for storing in local storage we will have to provide a key that will be associated to the value we want to store.

- The keys and the values stored with localStorage are always in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

It is highly advised to only use local storage to store small amounts of data.

- For adding an item to the storage we use the `setItem()` method

```Javascript

localStorage.setItem("myAge", "very old");

```

Notice: myAge is a key and very old is a value

- For reading items of the local storage we use `getItem()` method by passing in the key

```Javascript

const per = localStorage.getItem('myAge');

```

- We can also remove items from the store by using the `removeItem()` method. Use `clear()` to remove all items from the storage

```Javascript
localStorage.removeItem('myAge');
localStorage.clear();

```

- To convert an object into a string use `JSON.stringify(obj)`
  use `JSON.parse()` to convert it back being an object
