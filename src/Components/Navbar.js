import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to = "/">Home</Link>
          </li>
              {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href = "#">Home</a>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link" to = "/about">About us</Link>
          </li>
        </ul>
      </div>

      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor:'pointer' }}></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor:'pointer' }}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor:'pointer' }}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor:'pointer' }}></div>
      </div> */}

      <div className={`form-check form-switch text-${props.mode==='light'?'dark': 'light'  }`}>
  <input className="form-check-input" onClick ={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </nav>

  )
}
        
// PropTypes
Navbar.proptype = {title:PropTypes.string,
                    about:PropTypes.string  }


// Default Proptypes: This is used so that when no value or name is provided by the props than by using default proptype, a default value will be given
Navbar.proptype = {title:"TextUtlis Title"
      }
