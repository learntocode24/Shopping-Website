import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Title from './compoments/Title';
import ProductList from './compoments/ProductList';
import Menu from './compoments/Menu';
import Cart from './compoments/Cart';
import Product from './compoments/Product';
import { useState } from 'react';
import Search from './compoments/Search';

function App() {


  

  let productArr = [



    { category: "Fruits" , name: "apple", price: 8},

    { category: "Home design" , name: "shelf", price: 58},

    { category: "Fruits" , name: "orange", price: 4},

    { category: "Fruits" , name: "banana", price: 6},

    { category: "Home design" , name: "table", price: 33},

    { category: "Sports equipment" , name: "dumbbells", price: 158},

    { category: "Sports equipment" , name: "yoga mat", price: 15},

    { category: "Sports equipment" , name: "jump rope", price: 10},


  ]


  const [cartArr, setCartArr] = useState([])



  const addToCart = (index) => {


    setCartArr([...cartArr, productArr[index]])


  }






  return (


    <div className="App">


      <Title/>


      <BrowserRouter>

      <Menu/>




      <Routes>


        <Route path='/' element={<ProductList addToCart = {addToCart} productArr = {productArr}/>}/>

        <Route path='/Cart' element={<Cart cartArr = {cartArr} setCartArr = {setCartArr}/>}/>

        <Route path='/Search' element={<Search productArr = {productArr}/>}/>





      </Routes>
      
      
      
      
      
      </BrowserRouter>





   
    </div>


  );


}



export default App;
