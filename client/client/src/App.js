import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import DisplayFoodList from "./components/DisplayFoodList";
import EditFood from "./components/EditFood";
import AddFood from "./components/AddFood";
import AddUser from "./components/AddUser";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <br />
        <Routes>
          <Route path="/" exact element={<DisplayFoodList />} />
          <Route path="/edit/:id" component={EditFood} />
          <Route path="/create" element={<AddFood />} />
          <Route path="/user" element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
}
export default App