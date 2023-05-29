import logo from "./logo.svg";
import "./App.css";
import { API } from "./shared/api";
import Layout from "./components/Layout";
import {  Route, Routes } from "react-router-dom";
import AppCars from "./components/AppCars";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route index element={<AppCars />} />
        <Route path="/add" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
