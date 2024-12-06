import React from 'react'
import snap from '../assets/snap.jpg'
import "./UserCard.css"
const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='user-name'>Priyanshu Biswas</p>
      <img id='user-img' src={snap} alt="priyanshu" />
      <p id='user-desc'>This is Priyanshu Biswas</p>
    </div>
  )
}

export default UserCard