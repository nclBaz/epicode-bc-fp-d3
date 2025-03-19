import { BrowserRouter } from "react-router-dom"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Product from "./components/Product"

const products = [
  { id: 0, name: "Prodotto 1", price: 19.99, image: "https://prd.place/300/200?id=1" },
  { id: 1, name: "Prodotto 2", price: 9.99, image: "https://prd.place/300/200?id=2" },
  { id: 2, name: "Prodotto 3", price: 1.99, image: "https://prd.place/300/200?id=3" },
  { id: 3, name: "Prodotto 4", price: 29.99, image: "https://prd.place/300/200?id=4" },
  { id: 4, name: "Prodotto 5", price: 59.99, image: "https://prd.place/300/200?id=5" },
  { id: 5, name: "Prodotto 6", price: 5.99, image: "https://prd.place/300/200?id=6" },
  { id: 6, name: "Prodotto 7", price: 5.99, image: "https://prd.place/300/200?id=7" },
  { id: 7, name: "Prodotto 8", price: 5.99, image: "https://prd.place/300/200?id=8" },
  { id: 8, name: "Prodotto 9", price: 5.99, image: "https://prd.place/300/200?id=9" },
  { id: 9, name: "Prodotto 10", price: 5.99, image: "https://prd.place/300/200?id=10" },
]

function App() {
  return (
    <>
      <Navbar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
      <Footer />
    </>
  )
}

export default App
