import React, { useState } from 'react'
import './todo.css'

const Hometodo = () => {
  const[getname,setgetname] = useState('');
  const[showlist,setshowlist] = useState([]);

  //delete function

  const delte_fun = (e)=>{
     const ans = showlist.filter((ele,id)=>{
       return id != e;
     })
     alert("delete is sucessfully");
     setshowlist(ans);
  }
  return (
    <div  style={{
      margin:"20px"
    }}>
      <input type="text" name="" id="" placeholder='enter your task' onChange={(e)=>{
        setgetname(e.target.value);
      }} style={{
        height:"30px",
        width:"350px",
      }}/>
      <button onClick={()=>{
        setshowlist([...showlist,getname]);
      }} 
      style={{
        height:"30px",
        width:"150px",
        marginLeft:"50px",
      
      }}
      >Submit</button>
      {console.log(showlist)}
      <div style={{width:"85%",height:"20vh"}}>
      {
        showlist.map((e,i)=>{
          return(
            <div className='cred-row'>
              <h2>{e}</h2>
              <button onClick={()=>delte_fun(i)}>Delete</button>
              <button onClick={()=>{
                alert("sucessfully marked");
              }}>Mark</button>
            </div>
          )
        })
      }
      </div>
     
    </div>
  )
}

export default Hometodo