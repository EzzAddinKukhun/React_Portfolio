import React from 'react'
import '../App.css'

export default function Navbar() {
  return (
    <nav className="nav-abr">
        <div className="container-nav">
            <h1 style={{color:'white'}}>Ezz Addin Kukhun</h1>
            <ul className="navigations-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#serv">services</a></li>
                <li><a href="#hist">History</a></li>
                <li><a href="#cont">contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
