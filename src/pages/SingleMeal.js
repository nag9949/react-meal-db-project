import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleMeal() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getMeal() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
        `);

        const data = await response.json();
        // console.log(data.meals[0]);

        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strArea: area,
            strInstructions: instructions,
            strSource: url,
            strTags: tags,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
          } = data.meals[0];

          const ingredientsAndMeasure = [
            { name: strIngredient1, value: strMeasure1 },
            { name: strIngredient2, value: strMeasure2 },
            { name: strIngredient3, value: strMeasure3 },
            { name: strIngredient4, value: strMeasure4 },
            { name: strIngredient5, value: strMeasure5 },
            { name: strIngredient6, value: strMeasure6 },
            { name: strIngredient7, value: strMeasure7 },
            { name: strIngredient8, value: strMeasure8 },
            { name: strIngredient9, value: strMeasure9 },
            { name: strIngredient10, value: strMeasure10 },
            { name: strIngredient11, value: strMeasure11 },
            { name: strIngredient12, value: strMeasure12 },
            { name: strIngredient13, value: strMeasure13 },
            { name: strIngredient14, value: strMeasure14 },
            { name: strIngredient15, value: strMeasure15 },
            { name: strIngredient16, value: strMeasure16 },
            { name: strIngredient17, value: strMeasure17 },
            { name: strIngredient18, value: strMeasure18 },
            { name: strIngredient19, value: strMeasure19 },
            { name: strIngredient20, value: strMeasure20 },
          ];

          const newMeal = {
            name,
            image,
            category,
            area,
            instructions,
            url,
            tags,
            ingredientsAndMeasure,
          };

          setMeal(newMeal);
        } else {
          setMeal(null);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    getMeal();
  }, [id]);

  if (loading) {
    return <h3 className="text-center my-5">Loading...</h3>;
  }

  if (!meal) {
    return (
      <h3 className="text-capitalize text-center my-5">
        no meal available to Display{" "}
      </h3>
    );
  } else {
    const {
      name,
      image,
      category,
      area,
      instructions,
      url,
      tags,
      ingredientsAndMeasure,
    } = meal;

    return (
      <main className="my-5 text-center">
        <Link to="/" className="btn btn-info">
          Back to Home
        </Link>
        <h2 className="my-5">{name}</h2>

        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <img src={image} alt="avatar" className="w-75" />
            </div>

            <div className="col text-center mr-4 mt-3">
              {name && (
                <p>
                  <span className="font-weight-bold">name</span> : {name}
                </p>
              )}

              {category && (
                <p>
                  <span className="font-weight-bold">category</span> :{" "}
                  {category}
                </p>
              )}

              {area && (
                <p>
                  <span className="font-weight-bold">area </span>: {area}
                </p>
              )}

              {tags && (
                <p>
                  {" "}
                  <span className="font-weight-bold">tags</span> : {tags}
                </p>
              )}

              <p>
                <span className="font-weight-bold">ingrediants</span> :
                <br />
                {ingredientsAndMeasure.map((item, index) => {
                  return item.name && item.value !== "" ? (
                    <span key={index} className="text-capitalize font-italic">
                      {item.name}-{item.value} <br />
                    </span>
                  ) : null;
                })}
              </p>
            </div>
          </div>

          {/* second row for ingrediants */}
          <div className="row my-5 text-center">
            <div className="col">
              {url && (
                <p>
                  <span className="font-weight-bold">url</span> : {url}
                </p>
              )}

              {instructions && (
                <p>
                  <span className="font-weight-bold">instructions</span> :{" "}
                  {instructions}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
