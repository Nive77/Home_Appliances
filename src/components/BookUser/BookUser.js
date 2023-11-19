import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import React from 'react'
import Cookies from 'js-cookie';
import "./BookUser.css"


const BookUser = (props) => {

    const {_id,name,idno, description, price,stock, available, image} = props.book;
    const navigate = useNavigate();

    // Function to add to cart button click event
    const handleButtonClick = () => {
        if(Cookies.get("isLoggedIn") === "true")
        {
            sendRequest();
            window.location.reload();
        }
        else
        {
            navigate('/login')
        }
        
    };

    const sendRequest = async () => {
        await axios
            .put(`https://appliances-be.onrender.com/books/${_id}`, {
                name: String(name),
                idno: Number(idno),
                description: String(description),
                price: Number(price),
                image: String(image),
                cart: true, // setting to true since book added to cart
                stock:Number(stock),
                available: Boolean(false), // book added to cart, so book not available
            })
            .then((res) => res.data);
    };

    return (
        <div className="card">
            <img src={image} alt={name}/>
            
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>Rs {price}</h2>
            <h3 >Available : {String(available)}</h3>
            <Button disabled={!available} variant='contained' 
            color='secondary'
            onClick={handleButtonClick}
            
             >Add to cart</Button>
        </div>

    )
}

export default BookUser;