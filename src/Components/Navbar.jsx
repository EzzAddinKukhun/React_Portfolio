import React, { useEffect } from 'react'
import '../App.css'

export default function Navbar() {
  // window.onscroll(() => {
  //   console.log(document.getElementById("navScroll"))
  // })
  useEffect(()=>{
    document.addEventListener('scroll', (e)=>{
          document.getElementById("navScroll").style.backgroundColor = ' rgb(36, 36, 72)'

    })

  }, [])
  return (
    <nav id="navScroll" className="nav-abr">
      <div className="container-nav">
        <h1 style={{ color: 'white' }}>Ezz Addin Kukhun</h1>
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
