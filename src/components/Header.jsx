import React from 'react'
import logo from '../assets/logo.jpeg'
import '../style.css'

const Header = () => {
  return (
    

<nav className="navbar bg-logo rounded-bottom-5">
  <div className="container-fluid justify-content-center">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="120" class="d-inline-block align-text-top"></img>
      
    </a>
  </div>
</nav>


  )
}

export default Header
