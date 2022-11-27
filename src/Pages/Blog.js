import React from 'react';

const Blog = () => {
    return (
        <div className='text-start mx-auto w-5/6 my-10'>
             <p className='text-orange-600 text-3xl font-bold text-start my-10'>Blogs</p>
            <div className='my-8'>
                <p className='text-orange-600 text-xl'>What are the different ways to manage a state in a React application?</p>
                <p>There are four main types of state you need to properly manage in your React apps:

                    1. Local state
                    2. Global state
                    3. Server state
                    4. URL state </p>
                <p>Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.
                </p>
                <p>Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p>Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                <p>URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state.
                    Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL.</p>
            </div>

            <div className='my-8'>
                <p className='text-orange-600 text-xl'>How does prototypical inheritance work?</p>

                <p>Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.

                    Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.  </p>
                <p>So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
            </div>
            <div className='my-8'>
                <p className='text-orange-600 text-xl'>What is a unit test? Why should we write unit tests?</p>

                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. </p>
                <p>Unit testing enables a developer to catch bugs early in the development process. </p>
            </div>
            <div className='my-8'>
                <p className='text-orange-600 text-xl'>What is the difference between React vs. Angular vs. Vue?</p>

                <p>Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications. Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.</p>
                <br />
                <p>React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                    React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                    Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                    React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.</p>
                <br />
                <p>The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.</p>
            </div>
        </div>
    );
};

export default Blog;