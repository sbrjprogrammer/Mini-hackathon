import React, { useContext } from 'react'
import { userContext } from '../App'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom'

export function RenderMenu(props) {
    const {state,dispatch} = useContext(userContext)
        if(state){
            return(
                <>      <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product/new">ADD services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookingdetails">BookingDetail</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sigup">Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminroute">AdminRoute</Link>
              </li>
              
            
              <li className="nav-item">
                <Link className="nav-link" to="/logout">logout</Link>
              </li>
              </>

            )
        }else{
        return(
            <>
            
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sigup">Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">login</Link>
              </li>
             
            
            </>
        )
        }
}
