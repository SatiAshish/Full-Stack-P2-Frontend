import React, { useState,  useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import axios from 'axios';
import home from "./home.css";
import { Link } from 'react-router-dom';
import { getThemeProps } from '@mui/system';

const Home = (props) => {
    const [pizza, setPizza] = useState([]);
    const [bueger, setBurger] = useState([]);

    //Get Pizza
    const getPizza = async () => {
        try{
          const res = await axios.get('http://localhost:7000/pizzaCategory/getAll')
          setPizza(res.data);
          console.log('render')
        }catch(err){
          console.log(err);
        }
      }
      useEffect(()=>{
        getPizza();
      },[])


      //Get Burger
      const getBurger = async () => {
        try{
          const res = await axios.get('http://localhost:7000/burgerCategory/getAll')
          setBurger(res.data);
          console.log('render')
        }catch(err){
          console.log(err);
        }
      }
      useEffect(()=>{
        getBurger();
      },[])

  return (
    <div>
        <nav>
            <div className="nav_box">
                <span className="my_shop">
                    FOOD ORDERING PORTEL
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
            <div className='home'>
                <Link to="/pizza">
                    <div className='pizza'>
                        {pizza.map((item)=>{
                            return (
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        flexWrap: "wrap",
                                        float: "left",
                                        margin: "10px",
                                        height:"280px"
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt="green iguana"
                                        sx={{ width: "300px", height: "220px" }}
                                    />
                                    <CardContent className='info'>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Card>    
                            )
                        })}
                    </div>
                </Link>
                <Link to="/burger">
                    <div>
                        {bueger.map((item)=>{
                                return (
                                    <Card
                                        sx={{
                                            maxWidth: 345,
                                            flexWrap: "wrap",
                                            float: "left",
                                            margin: "10px",
                                            height:"280px"
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt="green iguana"
                                            sx={{ width: "300px", height: "220px" }}
                                        />
                                        <CardContent className='info'>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>    
                                )
                        })  }
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;
