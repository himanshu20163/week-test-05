import React, { useState } from 'react'
import myreduxstore from './Createstore';
import {useDispatch} from 'react-redux';

const Comp1 = () => {

    const[state,setstate] = useState("");
    const dispatch = useDispatch();

    const submitdata = ()=>{
        var actionObject ={
            type:"Comp1",
            info:state,
        } 
      dispatch(actionObject);
    }
  return (
    <div>
        <input type='text' onChange={(e)=>{
           setstate(e.target.value);
        }} />
           <button onClick={submitdata}>Submit</button>
    </div>
  )
}
export default Comp1;
