import React, { useState } from 'react'


const Square = (props) => {
  // console.log(props);
  
  return (
    <>
      <h2 className='board__value' onClick={props.onClick}>
        {props.value}
      </h2>
    </>
  )
}

export default Square