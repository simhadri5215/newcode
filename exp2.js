import React, { Component, useState } from "react";
// a. Counter using Class Component
class ClassCounter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <div className="p-4 border rounded-xl m-2">
                <h2>Class Counter</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
// b. Counter using Functional Component
function FunctionalCounter() {
    const [count, setCount] = useState(0);
    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>Functional Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
// c. Handle Button Click Events
function ButtonClickHandler() {
    const handleClick = (msg) => {
        alert("Button clicked: " + msg);
    };
    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>Button Click Handler</h2>
            <button onClick={() => handleClick("Hello from Button!")}>
                Click Me
            </button>
        </div>
    );
}
// d. Conditional Rendering
function ConditionalRender() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>Conditional Rendering</h2>
            {isLoggedIn ? <p>Welcome Back, User!</p> : <p>Please Log In</p>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}
// e. Display Text using String Literals
function StringLiterals() {
    const name = "React Developer";
    const course = "React Basics";
    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>String Literals Example</h2>
            <p>{`Hello, ${name}! You are learning ${course}.`}</p>
        </div>
    );
}
export default function App() {
    return (
        <div style={{ fontFamily: "Arial", padding: "20px" }}>
            <h1>React Programs Collection</h1>
            <ClassCounter />
            <FunctionalCounter />
            <ButtonClickHandler />
            <ConditionalRender />
            <StringLiterals />
        </div>
    );
}