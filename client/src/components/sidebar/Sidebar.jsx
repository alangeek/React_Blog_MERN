import React from 'react'

import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Sobre</span>
        <img className="sidebarImg" src="https://images.pexels.com/photos/2080363/pexels-photo-2080363.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        <p className="sidebarText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere eaque nulla autem voluptatibusque illo in!</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Categorias</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          Decorações
        </li>
        <li className="sidebarListItem">
          Dicas
        </li>
        <li className="sidebarListItem">
          Tendências
        </li>
        <li className="sidebarListItem">
          Ambientes
        </li>
        <li className="sidebarListItem">
          Lar
        </li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">SIGA-NOS</span>
      <div className="sidebarSocial">
        <i class="sidebarIcon fab fa-instagram-square"></i>
        <i class="sidebarIcon fab fa-facebook-square"></i>
      </div>
      </div>
    </div>
  )
}
