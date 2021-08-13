import React from 'react'

import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span  className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/4207780/pexels-photo-4207780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
    </div>
  )
}
