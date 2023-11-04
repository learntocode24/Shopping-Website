import React from 'react'

export default function Cart(props) {


    const calculateSum = () => {

        let sum = 0;


        props.cartArr.forEach((val)=>{


            sum += val.price;

        })

        return <h3>Total: {sum}</h3>


    }


  return (


    <div>

        <h1 className='cart'>Cart:</h1>


        {props.cartArr.map((val)=>{

            return <h3>{val.name} - {val.price}</h3>

        })}




        {calculateSum()}


        <button className='Cart' style={{backgroundColor: "#ff9f00"}} onClick={()=>{props.setCartArr([])}}>buy</button>



    </div>

  )


}
