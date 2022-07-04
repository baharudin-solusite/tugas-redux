import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrementCake, restockCake } from "./CakeSlice";

const CakeView = () => {
  const totalCakesRedux = useSelector((state) => state.cake.totalCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <div><h2>Toko Kue</h2></div>
      <h1>Total Cakes: {totalCakesRedux}</h1>
      <button onClick={() => dispatch(decrementCake())}>Decrement Cake</button>
      <button onClick={() => dispatch(restockCake())}>Restock Cake</button>
    </div>
  );
};

export default CakeView;