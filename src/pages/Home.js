import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import MealList from "../components/MealList";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("c");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getMeals() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}
          `
        );

        const data = await response.json();
        const { meals } = data;

        if (meals) {
          const newMeals = meals.map((item) => {
            const {
              idMeal: id,
              strMeal: name,
              strMealThumb: image,
              strCategory: category,
              strArea: area,
            } = item;

            return { id, name, image, category, area };
          });

          setMeals(newMeals);
        } else {
          setMeals([]);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    getMeals();
  }, [searchTerm]);

  return (
    <main className="text-center">
      <SearchForm setSearchTerm={setSearchTerm} />
      <MealList loading={loading} meals={meals} />
    </main>
  );
}
