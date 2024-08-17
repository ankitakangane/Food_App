import React from 'react';
import "./Home.css";
import FoodCard from '../../components/FoodCard/FoodCard';

function Home() {
  return (
    <div>
       <h1 className="app_name">Ankita Dhaba</h1>
       <div className="food_cards_container">
      <FoodCard
        imgUrl="https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?t=st=1723875309~exp=1723878909~hmac=5c5d6838582091aaeff67a9c08f4275ddba2149cf9983125cbd544d753632bc2&w=900"
        title="Chicken Biryan"
        discription="'Chicken Biryani' is a highly aromatic, mouth-watering staple dish that needs no introduction."
        isVeg={false}
        
      />

      <FoodCard
      imgUrl="https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?t=st=1723873508~exp=1723877108~hmac=275acc7ea3f37bfaca7ce3b39beecbb1e124e1cb0cd87b4d69897ea13b03b8a5&w=900"
        title="Dosa"
        discription="'Dosa' is high in carbohydrates and contains no added sugars. As its key ingredients are rice and black gram, it is a good source of protein"
        isVeg={true}
      />

     <FoodCard
      imgUrl="https://img.freepik.com/premium-photo/floating-hamburger-with-meat-cheese-tomatoes-lettuce-splash-sauce-isolated-dark_711110-9808.jpg?w=740"
        title="Burger"
        discription="'Burger' is high in carbohydrates and contains no added sugars. As its key ingredients are rice and black gram"
        isVeg={true}
      />

<FoodCard
      imgUrl="https://img.freepik.com/premium-photo/pizza-with-pepperoni-mushrooms-sits-wooden-board_99096-19571.jpg?w=826"
        title="Pizza"
        discription="'Pizza' is high in carbohydrates and contains no added sugars. As its key ingredients are rice and black gram, it is a good source of protein"
        isVeg={true}
      />
</div>
      
    </div>
  )
}

export default Home
