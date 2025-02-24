import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        {/* Wallpaper Section */}
        <div className="wallpaper-section">
          <img
            src="https://i.ebayimg.com/images/g/98wAAOSwyeRkh-gn/s-l1600.webp"
            alt="Wallpaper 1"
          />
        </div>

        {/* Buttons Section */}
        <div className="container-fluid mt-3">
          <div className="buttons-section">
            {recipes.map((recipe, index) => (
              <button
                key={recipe.id}
                className="btn"
                data-bs-toggle="offcanvas"
                data-bs-target={`#offcanvas${recipe.id}`}
              >
                {recipe.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Offcanvas Sections */}
      {recipes.map((recipe) => (
        <div key={recipe.id} className="offcanvas offcanvas-end" id={`offcanvas${recipe.id}`}>
          <div className="offcanvas-header">
            <h5>{recipe.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <p><strong>Ingredients:</strong></p>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Instructions:</strong></p>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
