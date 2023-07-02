import React from 'react'
import { useSelector } from 'react-redux'

export const Result = () => {

    let data = useSelector((storedata)=>{
        return storedata;
    })
  return (
    <div>
        <div >
            <h2> {data.comp1}</h2>
        </div>
    </div>
  )
}
