import React from 'react'

const Child = (props) => {
  const { data } = props;
  // console.log(props.data)
  return (
    <div>
      {/* <h1>Child {props.data}</h1> */}
      <h1>Child {data}</h1>
    </div>
  )
}

export default Child
