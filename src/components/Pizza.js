import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pizza from "./pizza.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Pizza = ( props ) => {
    const [pizzaList, setPizzaList] = useState([]);

    const getPizzaList = async () => {
        try{
          const res = await axios.get('http://localhost:7000/pizzaSubCategory/getAll')
          setPizzaList(res.data);
          console.log('render')
        }catch(err){
          console.log(err);
        }
      }
      useEffect(()=>{
        getPizzaList();
      },[])


  return (
    <div>
      <nav>
            <div className="nav_box">
                <span className="my_shop">
                    TASTY PIZZA
                </span>
                <Link to="/cart">
                  <div className="cart">
                      <span>
                          <i className="fas fa-cart-plus">
                          <sup> {props.count} </sup>
                          </i>
                      </span>
                  </div>
                </Link>
            </div>
        </nav>
      <div className='pizza-list'>
        {pizzaList.map((item)=>{
            return (
                <Card className='main'
                    sx={{
                        maxWidth: 300,
                         flexWrap: "wrap",
                        float: "left",
                        margin: "10px",
                        height:"430px"
                        }}
                    >
                    <CardMedia
                        component="img"
                        image={item.image}
                        alt="green iguana"
                        sx={{ width: "300px", height: "220px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant='h5' color="text.primary" className='price'>
                         Rs. {item.price}
                      </Typography>
                      <Typography variant='body2' color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <button className='pizza_order_btn' onClick={()=> props.addToCart(item)}>ORDER NOW</button>
                </Card>    
              )
        } ) }
      </div>
    </div>
  )
}

export default Pizza
