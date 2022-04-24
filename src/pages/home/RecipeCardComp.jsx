import React from "react";
import { RecipeImage, RecipeCard, RecipeHeader, Button } from "./HomeStyles";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
const RecipeCardComp = ({ recipe1 }) => {
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe1 } });
  };
  console.log(recipe1);
  return (
    <RecipeCard>
      <RecipeHeader>{recipe1.label}</RecipeHeader>

      <RecipeImage src={recipe1?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
