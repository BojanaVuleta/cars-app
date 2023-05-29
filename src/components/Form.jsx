import { postCars } from "../service/carsService";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Form = () => {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    numberOfDoors: 0,
    isAutomatic: false,
    engine: "",
    maxSpeed: 0,
  });

  const [selectedYear, setSelectedYear] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate= useNavigate();

  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let year = 1990; year <= currentYear; year++) {
    yearOptions.push(
      <option value={year} key={year}>
        {year}
      </option>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
  
    const newCar = {
      ...car,
      year: parseInt(car.year),
      numberOfDoors: parseInt(car.numberOfDoors),
      maxSpeed: parseInt(car.maxSpeed),
      isAutomatic: isChecked,
      engine: selectedOption
    }
  
    console.log(newCar);
    postCars(newCar);
    navigate("/");

  };


  const handleBrandInputChange = (e) => {
    setCar((prevState) => {
      return { ...prevState, brand: e.target.value };
    });
  };

  const handleModelInputChange = (e) => {
    setCar((prevState) => {
      return { ...prevState, model: e.target.value };
    });
  };

  const handleDoorsInputChange = (e) => {
    setCar((prevState) => {
      return { ...prevState, numberOfDoors: e.target.value };
    });
  };

  const handleYearChange = (e) => {
    setCar((prevState) => {
      return { ...prevState, year: e.target.value };
    });
  };

  const handleMaxSpeed = (e) => {
    setCar((prevState) => {
      return { ...prevState, maxSpeed: e.target.value };
    });
  };

  const handleCheckboxChangeIsAutomatic = () => {
    setIsChecked(!isChecked);
  };

  const handleOptionChangeRadioButton = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormReset = () => {
    setCar(car);
    setSelectedYear("");
    setIsChecked(false);
    setSelectedOption("");
  };

  const handlePreview = () => {
    const carInfo = `Brand: ${car.brand}\nModel: ${car.model}\nYear: ${car.year}\nNumber of Doors: ${car.numberOfDoors}\nMax Speed: ${car.maxSpeed}`;
    alert(carInfo);
  };
  

  return (
    <div>
        <h1 className="App">Add Car</h1>
      <form className=" container" onSubmit={submitHandler}>
        <label className="form-label" htmlFor="brand">
          Brand
        </label>
        <input 
          onChange={handleBrandInputChange}
          className="form-control container"
          name="brand"
          type="text"
        ></input>

        <label className="form-label" htmlFor="model">
          Model
        </label>
        <input
          onChange={handleModelInputChange}
          className="form-control container"
          name="model"
          type="text"
        ></input>
        <br/>

        <select
          id="year"
          name="year"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value=""> Select Year</option>
          {yearOptions}
        </select>
        <br />
        <br />

        <label className="form-label" htmlFor="numberOfDoors">
          Number of doors
        </label>
        <input
          onChange={handleDoorsInputChange}
          className="form-control container"
          name="NumberOfDoors"
          type="number"
        ></input>

        <label className="form-label" htmlFor="maxSpeed">
          MaxSpeed
        </label>
        <input
          onChange={handleMaxSpeed}
          className="form-control container"
          name="maxSpeed"
          type="number"
        ></input>

        <label htmlFor="checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChangeIsAutomatic}
          />
          Is Automatic?
        </label>
        <br />
        <br />

        <div>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChangeRadioButton}
            />
            Diesel
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChangeRadioButton}
            />
            Petrol
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChangeRadioButton}
            />
            Electric
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChangeRadioButton}
            />
            Hybrid
          </label>
        </div>

        <br />
        <button type="submit" className="btn btn-outline-success">
          Add Car
        </button>
        <button
          type="reset"
          onClick={handleFormReset}
          className="btn btn-outline-danger"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handlePreview}
          className="btn btn-outline-info"
        >
          Preview
        </button>
      </form>
    </div>
  );
};

export default Form;
