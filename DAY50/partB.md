
# Planning for a Project

### Step 1 : User stories

Describe the application's functionalities from the perspective of the user. We can use story cards for that.

Format
> As a _[type of user]_, I want to _[an action]_ to that _[a benefit]_




### Step 2 : Features

The different features that will be needed in the application based on the needs identified from the user stories. This is the developer's perspective.

### Step 3 : Flowchart

Flowchart help visualize the development process in steps that will be used to build each of the features.

![Flowchart](https://ibb.co/0hVpzB6)

### Step 4 : Architecture

This just represents the how the app will be built. It includes deciding on how the different parts of the app need to be built, and interconnected.

### Step 5 : Development step

Happy coding :unamused:


# Geolocation

To get the user's location, we use the geolocation API provided by the navigator: `navigator.geolocation`. It has a method `getCurrentPosition` that accepts, as arguments, two callback functions, the first to be executed if the position of the user is found and the second to handle user position not found(or not provided).

```Javascript

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
        function(position){
            console.log(position)
        }, 
        
        function(){
            console.log('User position not found')
        })
    }

```

If the position is found, we log into the console the coordinates of the user. But two interesting variables are important for us, latitude and logitude. We can get them from the `position.coords` object. The first callback can be rewritten into:

```Javascript

    function(position){
        const {latitude, longitude} = position.coords;
    }

```

Now we have our coordinates. The next step is finding a way to display the user location on a map. An open-source javascript libray called _Leaflet_ helps us do just that. And for free!

Let's go ahead and download Leaflet. There are 5 ways to use leaflet that you can read about from [Leaflet Download](https://leafletjs.com/download.html). But we are going to use the CDN version. Let's put our hosted versions of Leaflet css and js files in our header, right before our main js file. Make sure you add defer to the script file to avoid delays in hydration.

```html

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />

<script defer src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

```

Time to use Leaflet. Let's copy the started code from the [Leaflet Overview](https://leafletjs.com/index.html) page.

```Javascript

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

```

A few things to note here

1. _L_ represents the Leaflet API(just like the _Intl_ API for Internationalization)
2. The argument 'map' of the map method is the id of the `html` container of the map
3. The first argument of the setView() method is the array of coordinates: latitude then longitude and the second is the zoom level.
4. The _.org_ in the tileLayer method helps to choose the type of map provided by Leaflet. Check more about tile layers [here](https://leafletjs.com/reference.html#tilelayer)
5. Finally the `.marker()` will add a marker for the location, then `.bindPopup` will take care of the popup to show on the specified location.




