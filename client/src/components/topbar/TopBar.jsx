import React from 'react';

import './topbar.css';

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fab fa-instagram-square"></i>
        <i class="topIcon fab fa-facebook-square"></i>
        {/* <i class="topIcon fab fa-youtube-square"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">Sobre</li>
          <li className="topListItem">Contato</li>
          <li className="topListItem">Escreva</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img 
          className="topImg" 
          src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="" 
        />
        <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
