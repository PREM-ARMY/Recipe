import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="wallpaper-section">
          <img
            src="https://i.ebayimg.com/images/g/98wAAOSwyeRkh-gn/s-l1600.webp"
            alt="Wallpaper"
            className="img-fluid w-100"
          />
        </div>

        <div className="container mt-4">
          <div className="row">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p>
                      <strong>Calories:</strong> {recipe.caloriesPerServing}
                    </p>
                    <p>
                      <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min
                    </p>
                    <p>
                      <strong>Cuisine:</strong> {recipe.cuisine}
                    </p>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="offcanvas"
                      data-bs-target={`#offcanvas${recipe.id}`}
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="offcanvas offcanvas-end"
          id={`offcanvas${recipe.id}`}
        >
          <div className="offcanvas-header">
            <h5>{recipe.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">
            <img
              src={recipe.image}
              className="img-fluid mb-3"
              alt={recipe.name}
            />
            <p>
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
            <p>
              <strong>Rating:</strong> {recipe.rating} ⭐ (
              {recipe.reviewCount} reviews)
            </p>
            <p>
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p>
              <strong>Ingredients:</strong>
            </p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>
              <strong>Instructions:</strong>
            </p>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
