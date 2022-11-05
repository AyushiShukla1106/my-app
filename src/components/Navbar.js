import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) 
// import {Link} from 'react-router-dom';
{
  return (

    // for light navigation use light
    // for dark use dark
    // <nav className={'navbar navbar-expand-lg navbar-dark bg-dark}></nav>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href = "#">Home </a>
            </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
          </li> */}
          {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
 </li> */}


         </ul>

         {/* in bootstrap, green color is coded as success
         and blue color is coded as primary */}

        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
          {/* <input className="form-control me-2" type="search" placeholder="size" aria-label="size"/> */}
        
        
         {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
         
{/*          
          <button className="btn btn-outline-primary" type="submit">Search</button> */}
        
        {/* </form> */}

        <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'} `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypess= {
                     title: PropTypes.string,
                                about: PropTypes.string}


//   Navbar.defaultProps = {
//     title: "Cart",
//     about: "About us"
//   };                             