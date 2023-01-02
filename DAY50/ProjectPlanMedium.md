
# Planning for a software project

Software has been, in the past two decades been one of the majorly growing fields in the world. The numeber of software developers has increased dramatically because of the insatiable demand of digitalization of systems. More and more companies and organisations are willing to shift their businesses online, or supplement their physical activities with an online presence. However, the main reason why developers are needed is the rapid change that happens in the tech sector. Updates and upgrades happen every single day and systems need to respond to technological changes since the life span of the code that they build is getting shorter and shorter. To ensure that the projects that we, developers, build, are scalable and easy to maintain, we need to build them in a more organised way. The advantages are not only to help us remember the steps we took to build it, but also to make sure it can be used by anyone who might be given the task of maintaining or upgrading our system. 

When we work on our applications, generally we think about each piece separately. We just take a piece of paper, draw the logic for, say, the authentication, explain our pseudocode to ourselves or to a friend, then Visual Studio Code until we get terrifying red lines. This might seem pretty good and smart when we are able to build a project from the top of our head with no documentation whatsoever, but is it?  Small pieces of paper and a working code! We have all, at some point, done that, and we do that a lot. If we are working alone on the project or with another paper-to-code guru, it looks fun, but in big projects where more people with different ways of working come together, there will surely be implementation issues that might lead to storming between devs. 


## Why not establishing rules?

Many companies out there have established rules that drive the way developers build software, the way they collaborate with their seniors, juniors and even clients. An example of processes can be using the steps in the Software development Life Cycle(SDLC). This includes seven steps that cover the software project from its initiation to its maintainance. 

We start by gathering all the requirements in a Requirements Analysis and Specifications Document. The purpose of this document is to collect all the information about the software that is going to be used to test the final product. Besides containing information that developers do write just for the sake of writing(I completely agree with this), this document contains the marking scheme for all the functionalities needed in the software. Then we need to plan the project by determining the milestones that we have in order to deliver on time, as well as allocating tasks to people working on different parts of the project and, if need be, software. 

Next the software is designed based on the specifications in the RASD. The team working on UI/UX will need to provide prototypes and their evaluation of the system features and how they should work through prototypes and evaluation.  Then come in line software development(coding), testing and maintenace.

With these seven steps, we are able to build a software that is organised and less prone to changes because everybody participates, in a way or another in each step which need to be judged ready to push before moving to the next. Ideally! But again these are long boring processes that focus more on paperwork and are hardly followed when working on tight deadlines. These processes can be narrowed down to focus more on the development, with as shorter bureauctratic procedures as possible. 

The seven steps can be narrowed into five small steps. Since we cannot get away from understanding the requirements, four of the five steps focus on better undertanding and designing what the software is expected to do. 

### Step 1 : User stories

Given that software are built for people, it is essential that we understand exactly what our users need. Essentially because a feature that is not needed will just be an unnecessary waste of time. We can use story cards to briefly describe that the user wants, the reason why they want it as well as its definition of done.

Format
> As a _[type of user]_, I want to _[an action]_ to that _[a benefit]_
>
> Eg. As an administrator, I want to generate employee reports so that I can present them in our monthly meetings
> The definition of success for this example will be, for example, a filter functionality with button that dowloads the filtered data.
>


### Step 2 : Features

The different features that will be needed in the application based on the needs identified from the user stories. This is the developer's perspective.

### Step 3 : Flowchart

Flowchart help visualize the development process in steps that will be used to build each of the features.

![Flowchart](https://github.com/Scholaa/100DaysJavascript/blob/main/DAY50/Screenshot%20from%202022-12-08%2011-28-39.png)

### Step 4 : Architecture

This just represents the how the app will be built. It includes deciding on how the different parts of the app need to be built, and interconnected.

### Step 5 : Development step

Happy coding :unamused:

