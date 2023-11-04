import React from 'react'
import Product from './Product'
import "./ProductList.css"

export default function ProductList(props) {
  return (



    <div>


        <h1 className='products'>All the products:</h1>


         {props.productArr.map((val, idx)=>{

            return <Product addToCart = {props.addToCart} name = {val.name} price = {val.price} index = {idx} category = {val.category}/>

        })}







    </div>


  )


}
