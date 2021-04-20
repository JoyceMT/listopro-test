import React from 'react'
import './Button.css'

const Button = (props) => {
  const buttonStyles = {
    background: props.buttonColor,
  }

  return (
    <div>
      <button className="btn-pry" style={buttonStyles}>{ props.text }</button>
    </div>
  )
}

export default Button
