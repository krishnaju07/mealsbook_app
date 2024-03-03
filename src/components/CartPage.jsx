import React from 'react';
import { Typography, Grid, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CartPage() {
  const cartItems = [
    { id: 1, name: 'Item 1', price: 10, quantity: 2, image: '/images/item1.jpg' },
    { id: 2, name: 'Item 2', price: 15, quantity: 1, image: '/images/item2.jpg' },
    { id: 3, name: 'Item 3', price: 20, quantity: 3, image: '/images/item3.jpg' },
  ];

  const handleRemoveFromCart = (id) => {
    // Implement logic to remove item from cart
  };

  const handleAddToCart = (id) => {
    // Implement logic to add item to cart
  };

  const calculateTotal = () => {
    // Implement logic to calculate total price
  };

  return (
    <div className="cart-page">
      <Grid container spacing={3}>
        {/* Left column */}
        <Grid item lg={12}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
            Cart Items
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8} columns={'row'}>
          {cartItems.map((item) => (
            <Paper key={item.id} elevation={3} className="cart-item" columns={'row'}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Price:₹  </Typography>
                <Typography>Quantity: {item.quantity}</Typography>
              </div>
              <IconButton onClick={() => handleRemoveFromCart(item.id)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Paper>
          ))}
        </Grid>
        {/* Right column */}
        <Grid item xs={12} lg={4}>
          <Paper elevation={3} className="cart-summary">
            <Typography variant="h6" gutterBottom>
              Summary
            </Typography>
            <Typography gutterBottom>Total Items: {cartItems.length}</Typography>
            <Typography gutterBottom>Total Price: ₹{calculateTotal()}</Typography>
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartPage;
