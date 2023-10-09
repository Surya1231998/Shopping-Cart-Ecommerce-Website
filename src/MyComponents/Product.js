import React, { useEffect } from 'react'
import CartItem from './CartItem';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

import { useDispatch } from 'react-redux';
import { decNumber, incNumber } from '../actions';

const Product = (props) => {

    const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = props.arrOfObject;

    const [test, setTest] = useState(false);


    function addToCart() {
        setTest(true);
    }

    function x() {
        
    }

    //const mystate = useSelector((state)=>state.changeTheNumber);

    
    
     const mystate = useSelector((state)=>state.changeTheNumber);
  
     



    // useEffect(() => { setMyState(useSelector((x)=>x.changeTheNumber(state = myState))) }) 
    const dispatch = useDispatch();
    return (

        <div className="card" key={id}>
            <h2>{title}</h2>


            <Carousel>

                {images.map((temp) => {
                    return (<div>
                        <img className="image" src={temp}></img>
                        <p className="legend">Swipe</p>
                    </div>)
                })}



            </Carousel>


            <div className="cart">

                <button onClick={addToCart}>Add to Cart </button>

                <div className="quantity">
                    <button className = 'dec' onClick={()=>dispatch(decNumber(id))}><span>-</span></button>
                    <span className = 'noOfItem'>{mystate[id]}</span>
                    <button className = 'inc' onClick={()=>dispatch(incNumber(id))}><span>+</span></button>
                    
                 
                </div>

                {/* {  (()=>{if(test==true) return (<><CartItem></CartItem></>)})()}
   { (()=>{if(test==false) return (<><p>test message</p></>);})} */}

                {test && <><CartItem price ={price} countOfItem = {mystate[id]}></CartItem></>}

               

            </div>
        </div>


    );

    

}

export default Product
