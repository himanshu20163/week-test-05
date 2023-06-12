import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './users.css';

const Users = () => {

    const[user,setUser] = useState([]);
    const[state,setState] = useState([]);

    useEffect(() => {
        fetch_users();
    }, [])

    const fetch_users = ()=>{
      fetch('https://randomuser.me/api/?results=10')
      .then((res) =>res.json())
      .then((data) =>{
        console.log(data.results);
        setUser(data.results);
        setState(data.results);
      })   
      .catch((e) =>{
        console.log(e);
      });
    }
    
  return (
    <div>
        <h2>To do App </h2>
        <Navbar />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus placeat recusandae illo corrupti, eligendi explicabo, facere repellendus minus adipisci ducimus, inventore incidunt expedita beatae architecto. Sunt voluptate eveniet nisi.</p>
        <div style={{width:'100%',height:'100vh'}}>
        <p style={{padding:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque aliquam quidem iusto iure perspiciatis vero, dolore culpa sequi exercitationem tempore quas labore repellat autem officiis rerum quisquam sit vitae!</p>
        <button onClick={fetch_users}>Get data </button>
       {
        user.length>0 && 
        <div style={{padding:"20px"}}>
            <label>All</label>
            <input type="radio" value ="all" name="gender" id="gender" defaultChecked onChange={()=>{
                setUser(state);
            }}/>
            <label>female</label>
            <input type="radio" value="female" name="gender" id="male" onChange={()=>{
                setUser(state.filter((data)=>  data.gender === "female"))
            }}/>
            <label>male</label>
            <input type="radio" value="male" name="gender" id="female" onChange={()=>{
                setUser(state.filter((data)=> data.gender === "male"))
            }}
            />
            </div> 
       }
       
        {
            user.length>0 &&  (<table width='100%' frame="box" rules='all'>
            <thead style={{padding:"10px"}}>
                <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {

                    user.map((e)=>{
                        return(
                            <tr>
                                <td>
                                    <img src={e.picture.medium} width='100' height={100} />
                                </td>
                                <td>
                                    {e.name.first}{e.name.last}
                                </td>
                                <td>
                                    {e.gender}
                                </td>
                                <td>
                                    {e.email}
                                </td>
                                <td>
                                    {e.location.city}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
            )
        }
    </div>
    </div>
  )
}

export default Users