import React from 'react'

export default function Product(props) {
  return (


    <div>

        <h3>{props.name}</h3>

        <h3>{props.price}</h3>

        <h3>{props.category}</h3>


        <button style={{backgroundColor: "#ff9f00"}} onClick={()=>{props.addToCart(props.index)}}>+</button>





    </div>


  )


}
