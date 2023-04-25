import React, { useState } from 'react'

function Task(props) {
  const[isStriked , setStrike]= useState(false);
  
  return (
    <div className='list-items'>
        <input type="checkbox" checked = {isStriked} onClick={() => {setStrike(!isStriked)}} />
        <li style={{textDecoration: isStriked && 'line-through'}}>{props.value}</li>
        <i className='fa fa-times-circle' onClick={() => {props.sendData(props.id)}}></i>
    </div>
  )
}

export default Task
