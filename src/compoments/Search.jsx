import React, { useState } from 'react'
import Product from './Product';
import "./Cart.css"

export default function Search(props) {


    const [chooseCategory, setChooseCategory] = useState("")




    const showSelect = () => {

        let categoryArr = [];

        props.productArr.forEach((val)=>{

            if(!categoryArr.includes(val.category))

            {
                categoryArr.push(val.category)
            }



        })


           return categoryArr.map((val)=>{

                return <option>{val}</option>

            })


    }


    const showProduct = () => {

        let afterFilter = props.productArr.filter((val)=>{

            return val.category == chooseCategory

        })


        return afterFilter.map((val)=>{

            return <Product name = {val.name} price = {val.price} category = {val.category}/>

        })

    }

    


  return (


    <div>

        <select style={{backgroundColor: "#ff9f00", border: "1px solid black"}}  onChange={(e)=>{setChooseCategory(e.target.value)}}>

            <option></option>

          


            {showSelect()}



        </select>


        {showProduct()}


    </div>

  )

}

