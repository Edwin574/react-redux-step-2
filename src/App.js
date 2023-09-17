import React from "react";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { increment,decrement,addBy } from "./store/counterSlice";


const App=()=> {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter.counter)
  return (
    <div>
    <h1>Counter app</h1>
    <h2>{counter}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(addBy(10))}>Add value</button>
    </div>
  );
}

export default App;
