import React from 'react'
import './Count.css'

function Count(props) {
  return (
    <h2 style={{color:props.value < 0?'red':props.value === 0?'grey' : 'blue'}} className='count'>{props.value}</h2>

  )
}

export default Count;
