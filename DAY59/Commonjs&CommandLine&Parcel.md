# Commonjs modules

Commonjs modules are the original way of packaging Javascript for Node.js

Most modules in npm repo we might need to use in our applications use this module system.

Let's have a look at what this module system because we will most likely encounter it and we are fighting ignorance.

To export elements of a module use `export.nameOfElement`

Notice: This does not work in the browser but works in node.js

```Javascript
/* moduke.js */

export.greetings = function(){
    console.log('Hello there!')
}

```

Importing an element of the module is almost similar to how we do it in ES Modules the only difference is that we need to call the require function and pass in the name of the module we are importing from.

```Javascript

const { greetings } = require('./module.js')

```

# Intro to Command line

We are having this intro because all tools that are available in npm only work in the command line.
We'll look at a few commands and what they do

`dir` \ `ls`  --   list directories and files within the current directory

`cd` --  move between directories

`mkdir` -- create new directory

`touch` \ `eidt` --  create file on the current directory

Note: use arrow key to see past commands


# Intro to Node Package Manager 

Start by downloading npm if you do not have it already

Then initialize it with `npm init` command. You'll end up having a `package.json` file which will store all the configurations of our project.

Let's try to install a library using npm. We'll take an example on Leaflet package.

To install int, use `npm install leaflet` or `npm install leaflet` command. It will create a folder that contains the leaflet folder which has everything about the leaflet package.

Yo might think that now we are set to use this package in our code but we are not because this package uses the commonjs module system. What we need to do is to use a module bundler to import this package.

Let's then dive into that

# Bundling: Parcel

We have touched base on why we need to build and bundle our modules. We are now going to look at one of the many bundlers called Parcel.

You'll start by downoloading this bundler using `npm i parcel --save-dev` command. If it fails to install, use `npm i parcel@'version'`

Parcel is a command line interface. But we can nut just issue parcel commands like this `parcel index.html` because it does not work with locally installed packages. To solve this use `npx` whic is an application built into npm. You can now issue the same command like this `npx parcel index.html`. Note that `index.html` is the entry point which is where we would have included our script file.




