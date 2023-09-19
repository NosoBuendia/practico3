import React from 'react';

const Test = ({ onIncrement }) => {
  return (
    <button onClick={onIncrement}>
      Increment Count
    </button>
  );
};
export default Test;

/** ESTO VA EN EL PADRE
 * 
const [count, setCount] = useState(0);
const handleIncrement = () => {
  setCount(count + 1);
};

*/