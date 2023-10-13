import React from 'react'
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
   <nav class="navbar navbar-expand-lg"  style={{backgroundColor:"#243b4b"}}>
  <div class="container-fluid">
    <a class="navbar-brand navbar-brand-me" href="\">Car Services</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link-me dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select States
          </a>
          <ul class="dropdown-menu dropdown-menu-me">
            <li><a class="dropdown-item dropdown-item-me " href="\">Hyderabad</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">New Delhi</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Mumbai</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Agra</a></li>
          </ul>
        </li>
        
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control me-2" style={{paddingLeft:"5rem", paddingRight:"2rem"}} type="search" placeholder="Search Batteries" aria-label="Search"/>
      </form>

      <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <a class="nav-link nav-link-me active" aria-current="page" href="/">Spares</a>
      <a class="nav-link nav-link-me active" aria-current="page" href="/blog">Blog</a>
      <li class="nav-item nav-link nav-link-me active dropdown">
          <a class="nav-link-me dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu dropdown-menu-me">
            <li><a class="dropdown-item dropdown-item-me " href="/faq">FAQ</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Contact US</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Terms</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Privacy</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Offers</a></li>
            <li><a class="dropdown-item dropdown-item-me" href="\">Reviews</a></li>
          </ul>
        </li>
        <Link class="nav-link nav-link-me active" to="/cart">Cart</Link>
        <Link class="nav-link nav-link-me active" to="/purachse">Purachse</Link>
      <a class="nav-link nav-link-me active" aria-current="page" href="\">Login</a>
      </ul>
      </form>
    </div>
  </div>
</nav>    </div>
  )
}

export default Navbar2
