import { useState, useEffect } from "react";
import { getCars } from "../service/carsService";

const AppCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
    getCars().then(({data})=>setCars(data))
  },[]);

  return (

<div >
  <h1 className="App">All Cars</h1>
  <br/>
      <table className=" container table table-success table-striped"> 
        <thead>
          <tr className="table-primary">
            <th scope="col">Brand</th>
            <th scope="col"> Model</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <br/>
        <tbody>
        {cars.map((car, id) => (
            <tr key={id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>                     
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AppCars;