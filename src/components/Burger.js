import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import burger from "./burger.css"
import { Link } from 'react-router-dom';

const Burger = ( props ) => {
    const [burgerList, setBurgerList] = useState([]);

    const getBurgerList = async () => {
        try{
          const res = await axios.get('http://localhost:7000/burgerSubCategory/getAll')
          setBurgerList(res.data);
          console.log('render')
        }catch(err){
          console.log(err);
        }
      }
      useEffect(()=>{
        getBurgerList();
      },[])


  return (
    <div>
      <nav>
            <div className="nav_box">
                <span className="my_shop">
                    TASTY BURGER
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
      <div className='burger-list'>
        {burgerList.map((item)=>{
            return (
                <Card
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
                    <button className='burger_order_btn' onClick={()=> props.addToCart(item)}>ORDER NOW</button>
                </Card>    
                )
            })}
        </div>
    </div>
  )
}

export default Burger;
