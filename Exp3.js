import React, { useState, useEffect } from "react";

// a. Counter Button using useState Hook
function CounterUseState() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>a) Counter with useState</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// b. Fetch Data using useEffect Hook
function FetchData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Example API call
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>b) Fetch Data with useEffect</h2>
            <ul>
                {users.slice(0, 5).map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

// c. Sharing Data using Props
function ChildComponent({ message }) {
    return <p>Message from Parent: {message}</p>;
}

function ParentComponent() {
    const parentMessage = "Hello from Parent Component!";
    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>c) Props Example</h2>
            <ChildComponent message={parentMessage} />
        </div>
    );
}

// d. Forms in React
function FormExample() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted: ${formData.name}, ${formData.email}`);
    };

    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>d) Form Example</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// e. Iterative Rendering using map()
function IterativeRendering() {
    const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

    return (
        <div className="p-4 border rounded-xl m-2">
            <h2>e) Iterative Rendering Example</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

// Main App
export default function App() {
    return (
        <div style={{ fontFamily: "Arial", padding: "20px" }}>
            <h1>Important Concepts of React.js</h1>
            <CounterUseState />
            <FetchData />
            <ParentComponent />
            <FormExample />
            <IterativeRendering />
        </div>
    );
}