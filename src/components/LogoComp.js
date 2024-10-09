import React from 'react'
import './Components.css';
import b201 from '../assets/b201.png';
import ce from '../assets/ce.png';

export default function LogoComp() {
  return (
    <div className="logos">
        <img src={b201} alt="Lab B201" />
        <img src={ce} alt="Computer Engineering" />
      </div>
  )
}
