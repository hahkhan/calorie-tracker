import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const userInputRef = useRef("userInput");

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setName(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleUsername(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleCalories(e) {
    setCalories(e.target.value);
  }

  function handleDate(date) {
    setDate(date);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const meal = {
      name,
      calories,
      description,
      date: (date).toISOString(),
    };

    console.log(meal);

    axios
      .post("http://localhost:5000/food/add", meal)
      .then((res) =>{
        console.log(res.data);
        window.location ="/";
      })
      .catch((e) => {
            console.log(e);
      });
    
  }
  return (
    <>
      <div className="container">
        <div className="card border-0 shadow my-4">
          <div className="card-body p-3"></div>
          <div>
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <label>👤 User Name: </label>
                <select
                  ref={userInputRef}
                  required
                  className="form-control"
                  value={name}
                  onChange={handleUsername}
                >
                  {users.map(function (user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "25px",
                  marginRight: "20px",
                }}
              >
                <label>🥡 Food Info: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={description}
                  onChange={handleDescription}
                />
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <label>🔥 Calories: </label>
                <input
                  type="text"
                  className="form-control"
                  value={calories}
                  onChange={handleCalories}
                />
              </div>
              <div
                className="form-group"
                style={{
                  marginLeft: "20px",
                  marginBottom: "15px",
                  marginRight: "20px",
                }}
              >
                <div style={{ cursor: "pointer" }}>
                  <label>Date: </label>
                  <div>
                    <DatePicker selected={date} onChange={handleDate} />
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  value="Add Meal"
                  className="btn"
                  style={{
                    color: "white",
                    backgroundColor: "#50C878",
                    marginBottom: "25px",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFood;