import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useNavigate, useEffect, useState, createContext } from 'react';
import './cart';

function Madrid() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('https://dummyjson.com/products?select=title,price,description,images').then(res => {
        setProducts(res.data.products)
      })
    }, []);
    
    
    return (
      <div style={{ margin:"50px", display: "flex", flexWrap: "wrap"}}>
        {products.map((item,index) => {
            return (
              <div key={index}>
                <div className='budi'>
                
  
        
      <Card sx={{ maxWidth: 300, margin:"12px"}}>
        <div className='judul'>
        <CardMedia
          sx={{ height: 300 }}
          image={item.images[0]} alt={item.title}
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.description}
          </Typography>
          <p>{item.price}</p>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => 'cart.js'}> Add To Cart  </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
      </div>
      
      )})}
      </div>
    );
  }

  export default (Madrid)