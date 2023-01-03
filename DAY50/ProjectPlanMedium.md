
# Planning for a software project

Software has been, in the past two decades one of the majorly growing fields in the world. The numeber of software developers has increased dramatically because of the insatiable demand of digitalization of systems. More and more companies and organisations are willing to shift their businesses online, or supplement their physical activities with an online presence. However, the main reason why developers are needed is the rapid change that happens in the tech sector. Updates and upgrades happen every single day and systems need to respond to technological changes since the life span of the code that they build is getting shorter and shorter. To ensure that the projects that we, developers, build, are scalable and easy to maintain, we need to build them in a more organised way. The advantages are not only to help us remember the steps we took to build it, but also to make sure it can be used by anyone who might be given the task of maintaining or upgrading our system. 

When we work on our applications, generally we think about each piece separately. We just take a piece of paper, draw the logic for, say, the authentication, explain our pseudocode to ourselves or to a friend, then Visual Studio Code until we get terrifying red lines. This might seem pretty good and smart when we are able to build a project from the top of our head with no documentation whatsoever, but is it?  Small pieces of paper and a working code! We have all, at some point, done that, and we do that a lot. If we are working alone on the project or with another paper-to-code guru, it looks fun, but in big projects where more people with different ways of working come together, there will surely be implementation issues that might lead to storming between devs. 


## Why not establishing rules?

Many companies out there have established rules that drive the way developers build software, the way they collaborate with their seniors, juniors and even clients. An example of processes can be using the steps in the Software development Life Cycle(SDLC). This includes seven steps that cover the software project from its initiation to its maintainance. 

We start by gathering all the requirements in a Requirements Analysis and Specifications Document. The purpose of this document is to collect all the information about the software that is going to be used to test the final product. Besides containing information that developers do write just for the sake of writing(I completely agree with this), this document contains the marking scheme for all the functionalities needed in the software. Then we need to plan the project by determining the milestones that we have in order to deliver on time, as well as allocating tasks to people working on different parts of the project and, if need be, software. 

Next the software is designed based on the specifications in the RASD. The team working on UI/UX will need to provide prototypes and their evaluation of the system features and how they should work through prototypes and evaluation.  Then come in line software development(coding), testing and maintenace.

With these seven steps, we are able to build a software that is organised and less prone to changes because everybody participates, in a way or another in each step which need to be judged ready to push before moving to the next. Ideally! But again these are long boring processes that focus more on paperwork and are hardly followed when working on tight deadlines. These processes can be narrowed down to focus more on the development, with as shorter bureauctratic procedures as possible. 

The seven steps can be narrowed into five small steps. Since we cannot jump to development before understanding the requirements(very costly mistake), four of the five steps focus on better undertanding and designing what the software is expected to do. Let's explore these steps with an example of a simple software project : a lesson booking app.

### Step 1 : User stories

Given that software are built for people, it is essential that we understand exactly what our users need. Essentially because a feature that is not needed will just be an unnecessary waste of time. We can use story cards to briefly describe that the user wants, the reason why they want it as well as its definition of done.

Format
> As a _[type of user]_, I want to _[an action]_ to that _[a benefit]_
>
> Eg. As a student, I would like to get the lessons available so that I can be able to book according to my preferences\
> The definition of success for this example will be, for example, a page that shows available lessons, each with a book button.
>

### Step 2 : Features

The second step is identifying, based on the user stories, the features or functionalities that the app will have. This is the step where the developer puts of user shoes and starts thinking about ways to solve the problems raised in the user stories gathering stage. The main job at this stage is listing the functionalities without caring a lot about how everything fits together to solve the problem as a whole. Each feature will be a unit that will be tested separately before fitting it into the rest of the application. This step is one of the most crucial parts of this process given that it allows better communication between people working on the project. The document containing the features will be the bible to be followed by everyone. The way to implement and the steps needed to do so for each feature might depend from one developer to another but the features will remain the same. 

> For example, we might say that the features needed will be 
> 1. Log in
> 2. Authentication
> 3. Show lessons
> 4. Book lesson
> 5. Send confirmation email

### Step 3 : Flowchart

To visualise the steps needed to implement each feature, we need flowcharts or similar flow tools. The main thing about flowchart is the amount of reflection time it reduces from the development. If we jump from the list of features to the development, we will need to compensate this jump in the development, which will probably drag us behind. The elements that we put on our flowcharts are high level visualized pseudocodes for our feature building process. 

An example of a flowchart for our user who wants to book a lesson is shown below.

![Flowchart](https://github.com/Scholaa/100DaysJavascript/blob/main/DAY50/flowchart.png)

### Step 4 : Architecture

We now understand the functionalities of our app and ready to code. What needs to be kept in mind is that the main objective of working in a well-defined process is to end up with a software that is well organised and well documented. We have been documenting our process so far and it is time to focus on the code. There is need to define how the different parts of our application will be organised. It is at this step that we choose the architerctural pattern to use for our application in order for every member of the team working on the project to know exactly how to organise the part they are assigned to  work on. 

For instance, if we decide to go with a 3-tier architecture, we do not want our views to be mixed with controllers or models. Every piece needs to be exactly where we want it to be, for better interconnection and reference. Our booking system will have, in its architecture the following:

1. A database to store information about the students, courses and bookings
2. Models to define the variables and their structures needed to save data in the database
3. Controllers to handle the requests coming from the views. This is the bridge between the views and the models, which are expected not know anything about each other. Controllers are made to abstract all the complicated logic implemented in the models for the views.
4. Views are there to make requests to the controllers to get information then render the data to the user using blocks of HTML code.

Not only this reduces clashes but it also encourages clean code and easy documentation.

### Step 5 : Development step

Finally here! We have now reached the step where we write our long-waited code. This step is where we build the software, based on the requirements that we gathered during the previous four steps above. 


It is crucial to organise the code that we are working on for several reasons that we discussed earlier: reusability, maintainability, scalability, readability and communication. There is no one-size-fits-all technique or procedure on how to achieve this but we need to make sure that we write code that we can proudly stand in front of senior developers and showcase our achievement.

Happy coding!

