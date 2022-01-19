import React, { useState } from 'react';

const Points = () => {
  const [food, setFood] = useState(0)
  const incrementFood = () =>setFood(food + 1);
  return <div>
    {/* <img className='clicker'  src='../images/raccoonClick.jpg' alt='fat raccoon'/> */}
    <button onClick={incrementFood}>Click Me</button>
    <h1>{food}</h1>
  </div>;
};

export default Points;
