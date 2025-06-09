import React from "react";
import ReactDOM from "react-dom/client";

function App() {
     return  (
       <div>
        <h1>My First React</h1>
        <Pizza />
        </div>
);
}

function Pizza() {
    return (
        <div>
            <h2>Pizza Component</h2>;
            <p> Im scared think there is more to this than I thought.</p>
            <p> I am not sure if I can do this.</p>
        </div>
    )}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
     );