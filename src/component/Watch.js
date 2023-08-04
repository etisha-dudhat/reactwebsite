import React, { useState } from 'react'

const Watch = () => {
    const CurTime=new Date().toLocaleTimeString();
    const [Time,setTime]=useState(CurTime);

    const UpdateTime=()=>{
        let NewTime=new Date().toLocaleTimeString();
        setTime(NewTime);
    }

    setInterval(UpdateTime);
  return (
    <div className='watch'>
      <h1>{Time}</h1>
    </div>
  )
}

export default Watch
