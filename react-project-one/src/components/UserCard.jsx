import React from 'react'
import snap from '../assets/snap.jpg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} />
      <p id='user-desc'> {props.description}</p>
    </div>
  )
}

export default UserCard