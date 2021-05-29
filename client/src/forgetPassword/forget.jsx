import React, {useState} from 'react'

const Forget = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  const [size, setSize] = useState(1);
  
  const handleSetCount = () => {
    (count === 4) ? setCount(0) : setCount(count + 1); 
    (count === 4) ? setSize(1) : setSize(size + .05); 
  };
  
  const handleSetColor = () => {
    if(count === 1) setColor('red');
    if(count === 2) setColor('blue');
    if(count === 3) setColor('pink');
    if(count === 4) setColor('yellow');
  };
  
  const heartStyle = {
    color: color,
    transform: `scale(${size})`
  };
  
  return (
    <div>
      <button onClick={() => { handleSetCount(); handleSetColor() } }>
        <i>Like</i>
      </button>
      <p style={heartStyle}>You have liked this {count} times</p>
    </div>
  );
}

export default Forget;
