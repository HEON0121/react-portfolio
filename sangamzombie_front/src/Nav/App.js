import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSoap, faCalendarDays, faCircleExclamation, faToolbox, faBars, faSprayCanSparkles  } from "@fortawesome/free-solid-svg-icons";
import './style/nav.css';
//import { useState } from 'react';

//import {useState} from 'react';

function NavbarToogleBtn() {
  return (
    <a href='#' className='navbar_toogleBtn'>
      <FontAwesomeIcon icon={faBars}/>
    </a>
    
  );    
}
function NavbarMenu() {
  let menus = ['Home', '상품', '이벤트', '공지사항', 'My Page'];
  return(
    <ul className='navbar_menu'>
      <li>
        <FontAwesomeIcon icon={faHouse} />
        <a href='#'>{menus[0]}</a>
      </li>
      <li>
        <FontAwesomeIcon icon={faSoap} />
        <a href='#'>{menus[1]}</a>
      </li>
      <li>
        <FontAwesomeIcon icon={faCalendarDays} />
        <a href='#'>{menus[2]}</a>
      </li>
      <li>
        <FontAwesomeIcon icon={faCircleExclamation}/>
        <a href='#'>{menus[3]}</a>
      </li>
      <li>
        <FontAwesomeIcon icon={faToolbox} />
        <a href='#'>{menus[4]}</a>
      </li>
    </ul>    
  );
}

function NavbarLogo() {
  return(
    <div className='navbar_logo'>
      <FontAwesomeIcon icon={faSprayCanSparkles}/>
      <a href='#'>Kim's Laundry</a>
    </div>
  )
}

function Navbar() {
  return (
    <nav className='navbar'>
      {NavbarLogo()}
      {NavbarMenu()}
      {NavbarToogleBtn()}
    </nav>
  )
}

function App() {
  return(
    <div>
      {Navbar()}
    </div>
  )
}

export default App;
