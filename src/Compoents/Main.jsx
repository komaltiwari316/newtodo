import React from 'react'
import SubMain from './SubMain'

const Main = (props) => {
  const handleClick = (data) => {
    // alert("Helloooooo komal")
    console.log("Event Calling..", data)
  }

  const HandleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <h1>Main</h1>
      <input type="text" name="" id="" onChange={HandleChange} />
      <button onClick={() => handleClick("text")}>Click Event</button>
      <SubMain data={"Winner"}></SubMain>
    </div>
  )
}

export default Main
