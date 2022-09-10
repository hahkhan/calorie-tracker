import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import axios from "axios";
Chart.register(...registerables);


const Delayed = ({ children, waitBeforeShow = 4500 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
};

const CalorieChart = () => {
  const [chartData, setChartData] = useState({});

  async function getData() {
    let foodName = [];
    let foodCalories = [];
    await axios
      .get("http://localhost:5000/food/")
      .then((res) => {
        console.log(res);
        for (let dataObj of res.data) {
          foodName.push(dataObj.description);
          foodCalories.push(parseInt(dataObj.calories));
          console.log("foodName, foodCalories", foodName, foodCalories);
        }
        setChartData({
          labels: foodName,
          datasets: [
            {
              label: "Cal",
              data: foodCalories,
              backgroundColor: [
                "#f42f42",
                "#5ab950",
                "#fe812a",
                "#ffc748",
                "#6b71c7",
                "#8661d1",
                "#8a2cba",
              ],
              borderColor: [
                "#f42f42",
                "#5ab950",
                "#fe812a",
                "#ffc748",
                "#6b71c7",
                "#8661d1",
                "#8a2cba",
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h4>Food Analytics</h4>

      <h5
        style={{
          fontSize: "20",
          textAlign: "center",

          marginBottom: "1em",
        }}
      >
        Calorie Intake per each Food
      </h5>
      <div>
        <Delayed>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              title: {
                text: "Calorie Per Food ",
                fontSize: 20,
                fontColor: "#212529",
              },
              scales: {
                y: 
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: true,
                    },
                  },
                x: 
                  {
                    gridLines: {
                      display: true,
                    },
                  },
              },
            }}
          />
        </Delayed>
      </div>
    </div>
  );
};

export default CalorieChart;