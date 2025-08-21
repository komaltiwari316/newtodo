import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
      <h1>Parent</h1>
      <Child data={"Winner"}></Child>
    </div>
  )
}

export default Parent
