import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CalorieChart from "./CalorieChart";
import UserChart from "./UserChart";

const FoodTrack = (props) => (
  <tr>
     <td>
      <Link to={"/edit/" + props.meal._id} style={{ color: " #a04949" }}>
        <span  style={{fontSize: "1rem",}} >
          ✏️
        </span>
      </Link>{" "}
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteMeal(props.meal._id);
          window.location.reload(false);
        }}
        style={{ color: " #a04949" }}
      >
        <span style={{fontSize: "1rem",}}>
          ❌
        </span>
      </a>
    </td>
    <td>{props.meal.name}</td>
    <td>{props.meal.description}</td>
    <td>{props.meal.calories}</td>
    <td>{props.meal.date.substring(0, 10)}</td>
  </tr>
);

const DisplayFoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/food/")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deleteMeal(id) {
    axios.delete("http://localhost:5000/food/" + id).then((response) => {
      console.log(response.data);
    });
    setFoods(foods.filter((el) => el._id !== id));
  }

  const mealList = () => {
    return foods.map((currentmeal) => {
      return (
        <FoodTrack
          meal={currentmeal}
          deleteMeal={deleteMeal}
          key={currentmeal._id}
        />
      );
    });
  };

  return (
    <>
      <>
        <div className="container">
          <div className="card border-0 shadow my-4">
            <div className="card-body p-5">
              <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
                Calorie Journal
              </h3>
              <table className="table" style={{ textAlign: "center" }}>
                <thead className="thead" style={{ backgroundColor: "#50C878" }}>
                  <tr>
                    <th>📝 Edit/Delete</th>
                    <th>👤 Username</th>
                    <th>🥡 Meal</th>
                    <th>🔥 Calories</th>
                    <th>📅 Date</th>
                  </tr>
                </thead>
                <tbody>{mealList()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="card border-0 shadow my-2"
            style={{ padding: "2rem" }}
          >
            <div className="card-body p-1"></div>
            <UserChart />
            <CalorieChart />
          </div>
        </div>
      </>
    </>
  );
};

export default DisplayFoodList;