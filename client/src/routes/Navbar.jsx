import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom'
import logoimg from "../images/images.jpg"
import { RenderMenu } from './RenderMenu'

export function Navbar(props) {
  

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width:100}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://st2.depositphotos.com/5486388/8161/v/950/depositphotos_81616810-stock-illustration-hotel-logo-template.jpg" alt="" style={{height:"70px",width:"100px"}} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <RenderMenu/>
           
            </ul>
  
          </div>
        </div>
      </nav>
      
    </div>
  )
}
