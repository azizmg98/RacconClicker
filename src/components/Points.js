import React, { useState } from 'react';
import image from '../images/raccoonClick.jpg'

const Points = () => {
  const [building, setBuilding] = useState(1);
  const incrementBuilding = () => setBuilding(building + 1);
  const [food, setFood] = useState(0);
  const incrementFood = () => setFood(food + building);
  // const foodPerSecond = () => setInterval(incrementFood, 1000);
  return <div>
    <div className='App'>
    <img onClick={incrementFood} className='clicker'  src={image} alt='fat raccoon'/>
    {/* <button onClick={() => alert("you got baited")}>Click Me</button> */}
    <button onClick={incrementBuilding}>building placeholder</button>
    <button onClick={setInterval(incrementFood, 1000)}>building per second</button>
    <h1>{food}</h1>
    </div>
  </div>;
};

export default Points;