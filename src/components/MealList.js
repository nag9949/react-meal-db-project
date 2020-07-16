import React from "react";
import Meal from "./Meal";

export default function MealList({ loading, meals }) {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (meals.length < 1) {
    return (
      <h3 className="text-capitalize text-center my-5">
        {" "}
        no Meal matched please try some other meal
      </h3>
    );
  }

  return (
    <div className="text-center">
      <h3>Meals</h3>
      <div className="card-columns">
        {meals.map((item) => {
          return <Meal key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
