import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState} from "react";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import CartList from './components/CartList';

function App() {

  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart =(data) =>{
    setCart([...cart, {...data, quantity: 1}])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home count={cart.length} />} />
        <Route path='pizza' element={<Pizza addToCart={addToCart} count={cart.length}/>} />
        <Route path='burger' element={<Burger addToCart={addToCart} count={cart.length} />} />
        <Route path='cart' element={<CartList cart={cart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
