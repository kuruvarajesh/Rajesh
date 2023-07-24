import React from 'react'
import './NotFound.css'
const NotFound = (props) => {
    const {text} = props
  return (
    <div className="notfound-container">
    <h1 className='not-found'>{text}</h1>
    </div>
  )
}

export default NotFound