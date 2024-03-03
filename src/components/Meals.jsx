import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Meals.css';

function MealDetails({ meal }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="meal-details-container">
      <div className="meal-image">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="meal-info">
        <Typography variant="h5" sx={{textAlign:'left'}}>{meal.strMeal}</Typography>
        <Typography variant="body1" gutterBottom> {meal.strInstructions}</Typography>
        <Typography variant="body1" gutterBottom sx={{textAlign:'left'}}>Price: ${quantity * 1 /* Placeholder price */}</Typography>
        <div className="quantity-controls">
          <IconButton onClick={handleDecrement}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1">{quantity}</Typography>
          <IconButton onClick={handleIncrement}>
            <AddIcon />
          </IconButton>
        </div>  
      </div>
    </div>
  );
}

export default MealDetails;
