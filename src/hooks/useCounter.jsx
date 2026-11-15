// import {useState} from "react";

// function useCounter(initialState) {
//     const [count, setCount] = useState(initialState);

//     function handleIncrement() {
//         setCount((prev) => prev + 1)
//     }

//     function handleDecrement() {
//         setCount((prev) => prev - 1)
//     }

//     function handleReset() {
//         setCount(0);
//     }


//     return { count, handleIncrement, handleDecrement, handleReset }
// }
// export default useCounter;



import { useState } from "react";

function useCounter(initialState) {
  const [count, setCount] = useState(initialState);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleReset() {
    setCount(initialState);
  }

  return { count, handleIncrement, handleDecrement, handleReset };
}

export default useCounter;