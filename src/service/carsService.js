import { API } from "../shared/api";

export const getCars = () => {
  return API.get("/cars");
};

export const postCars = ({
  brand,
  model,
  year,
  isAutomatic,
  engine,
  numberOfDoors,
  maxSpeed}
) => {
  return API.post("/cars", {
    brand,
    model,
    year,
    isAutomatic,
    engine,
    numberOfDoors,
    maxSpeed
  });
};
 

// export const postCars = (
//   car
//  ) => {
//    return API.post("/cars", car);
//  };