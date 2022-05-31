import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from '../greetings/greetings.js';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state => state.GreetingsReducer));

  useEffect(() => {
    dispatch(fetchGreetings())
  }, [])

  return (
     <h1>
       {greetings.text}
     </h1>
  );
}

export default Greeting;
