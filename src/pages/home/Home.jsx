import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { ImgDiv, MainContainer, HomeImg } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const APP_ID = "7991ed62";
const APP_KEY = "75e11628712b2c781cf463e78ecc389b";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
      console.log(result.data.hits);
    } else {
      console.log("please fill the form");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />

      {food ? (
        <MainContainer>
          {food.map((liste, index) => (
            <RecipeCardComp key={index} recipe1={liste.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
