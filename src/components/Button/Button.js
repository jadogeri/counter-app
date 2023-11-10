import React from 'react'
import './Button.css'

function Button(props) {
  const color = props.color;
  const title = props.title;
  const onClickHandler = props.onClickHandler;


  return (
    <div>
        <button onClick={onClickHandler} type='button'  style={{backgroundColor:color}}>{title}</button>
             
    </div>
  )
}

export default Button;
