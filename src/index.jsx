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
    soldOut: true,
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
       <div className="container" style={{textAlign: "center"}}>
        <h1>Rogue Resturant <br /> Presents </h1>
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
    const numPizzaData = pizzaData.length;
    return (
        <main className="menu" style={{textAlign: "left"}}>
        <h2>Our Menu</h2>
        <p>Authentic Italian cuisine. All pizzas are made with fresh ingredients and love.</p>
        <p>All from our stone oven, all organic, all delicious</p>
        
        {numPizzaData > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
       ) : (
        <p>We're still working on our meun. Please come back later</p>
       )}
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



function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
        <li className={'pizza ${pizzaObj.soldOut ? "sold-out" : ""}'}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
            <h2>{pizzaObj.name}</h2>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price }</span>
            </div>
        </li>
    )}

    function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour < closeHour;
    console.log(isOpen);
    
    
    return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
       <p>We're Open until {closeHour}:00. Come visit us 
        or Order Online, We Open at {openHour}</p>
        <button className="btn">Order</button>
      </div>
      )}
      </footer>
    )}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <App />
    </React.StrictMode>
     );