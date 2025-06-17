import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./src/pablo-pacheco-D3Mag4BKqns-unsplash.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./src/qui Pizza.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./src/chad-montano-MqT0asuoIcU-unsplash.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./src/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./src/pepperoni.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./src/Pizza.jpg",
    soldOut: false,
  },
];




function App() {
     return  (
       <div className="container">
        <h1>My First React</h1>
        <Header />
       <Menu />
        <Footer />
        </div>
);
}

function Header() {
  const style = {};
    return (
        <header className="header">
            <h1 style={style}>HEED PIZZA</h1>
        </header>
)}

function Menu() {
    return (
        <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      
        {/* <Pizza 
        name="Mozarella Cheese Pizza with Veggies"
        ingredients="Cheese and Spicy Red Hot Jerky"
        photoName="./src/qui Pizza.jpg"
        price= "$12.50"/>
        <Pizza 
        name="Chesse Jerky"
        ingredients="Cheese and Spicy Red Hot Jerky"
        photoName="./src/pizza1.jpg"
        price= "$10.50"
        />*/}
        </main>
)}

function Footer() {
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour < closeHour;
console.log(isOpen);


return (
<footer className="footer">
  {new Date().toLocaleTimeString()}, We are currently open</footer>
)}


function Pizza(props) {
  console.log(props);
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
            <h2>{props.pizzaObj.name}</h2>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price }</span>
            </div>
        </li>
    )}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
     );