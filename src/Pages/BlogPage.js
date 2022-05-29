import React from 'react';

const BlogPage = () => {
    return (
        <>
            <div className='container mx-auto px-14 my-24'>
                <div class="collapse max-w-3xl mx-auto">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-light-primary text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        How will you improve the performance of react Application?
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import(). Windowing or list virtualization in React. Lazy loading images in React</p>
                    </div>
                </div>
                <div class="collapse max-w-3xl mx-auto mt-8">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-light-primary text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What are different ways to manage a state in a react application?
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>There are 4 types of state in a react application. <br />
                            1. Local state.
                            2. Global state.
                            3. Server state.
                            4. URL state.</p>
                    </div>
                </div>
                <div class="collapse max-w-3xl mx-auto mt-8">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-light-primary text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                    </div>
                </div>
                <div class="collapse max-w-3xl mx-auto mt-8">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-light-primary text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Why you dont state directly in React ?For example, If You have const [products,setProducts]=useState. Why do you not set products =[...] instead , you use the setProducts.?
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.When you directly update the state, it does not change this..</p>
                    </div>
                </div>
                <div class="collapse max-w-3xl mx-auto mt-8">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-light-primary text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <ol>
                            <li>If you need the index of the found element in the array, use findIndex() .</li>
                            <li>If you need to find the index of a value, use Array.prototype.indexOf()</li>
                            <li>If you need to find if a value exists in an array, use Array.prototype.includes().</li>
                        </ol>
                    </div>
                </div>
                <div class="collapse max-w-3xl mx-auto mt-8">
                    <input type="checkbox" class="peer" />
                    <div class="collapse-title bg-light-primary text-primary peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What is a unit test?Why should write unit tests?
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.In procedural programming, a unit could be an entire module , but it is more commonly an individual function or procedure.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;