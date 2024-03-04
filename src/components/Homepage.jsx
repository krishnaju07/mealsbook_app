import React, { useEffect, useState } from "react";
import { Typography, LinearProgress, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Meals from "./Meals";
import "./Homepage.css";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.categories) {
          setCategories(data.categories);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setMeals(data.meals);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching meals:", error);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    const fetchMealDetails = async () => {
      if (selectedMeal) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal.idMeal}`
          );
          const data = await response.json();
          if (data.meals && data.meals.length > 0) {
            setSelectedMeal(data.meals[0]);
          }
        } catch (error) {
          console.error("Error fetching meal details:", error);
        }
      }
    };

    fetchMealDetails();
  }, [selectedMeal]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.strCategory);
    setSelectedMeal(null);
    setOpenDetails(false);
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setOpenDetails(true);
  };

  return (
    <div className="homepage-container">
      {!selectedCategory && (
        <>
          <Typography variant="h6" align="left" gutterBottom>
            Categories
          </Typography>
          <div className="category-grid">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-card"
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
                <Typography variant="subtitle1" align="center">
                  {category.strCategory}
                </Typography>
              </div>
            ))}
          </div>
        </>
      )}
      {selectedCategory && !openDetails && (
        <>
          <Typography variant="h6" align="left" gutterBottom>
            Meals in {selectedCategory}
          </Typography>
          {loading && <LinearProgress />}
          <div className="meal-list">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="meal-card"
                onClick={() => handleMealClick(meal)}
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="meal-details">
                  <Typography variant="subtitle1" gutterBottom>
                    {meal.strMeal}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Price: ₹{index + 1}
                  </Typography>
                </div>
                <IconButton color="primary" aria-label="add to cart">
                  <ShoppingCartIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </>
      )}
      {openDetails && selectedMeal && <Meals meal={selectedMeal} />}
    </div>
  );
}

export default Homepage;
