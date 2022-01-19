import React, { useState } from 'react';
import image from '../images/raccoonClick.jpg'

const Points = () => {
  const [food, setFood] = useState(0)
  const incrementFood = () =>setFood(food + 1);
  return <div>
    <div className='App'>
    <img onClick={incrementFood} className='clicker'  src={image} alt='fat raccoon'/>
    <button onClick={() => alert("you got baited")}>Click Me</button>
    <h1>{food}</h1>
    </div>
  </div>;
};

export default Points;