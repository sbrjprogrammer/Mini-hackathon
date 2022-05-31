import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import { userContext } from '../App'

export function Login(props) {
  const {state,dispatch} = useContext(userContext)

const [email,setemail]= useState("")
const [password,setpassword]= useState("")
let navigate = useNavigate()
    console.log(password,email)

    const loginUser= async(e)=>{
      e.preventDefault()
      const res = await fetch('/sigin',{
        method:"post",
        headers:{
              "Content-Type":"application/json"
         },
         body:JSON.stringify({
          email,password
         })


      })
      const data = res.json()
      if(res.status===400||!data){
        alert("inavalid data")
      }else{
        dispatch({type:"USER",payload:true})
        alert("login successfully")
        navigate('/')
      
      }

    }

    return (
        <> <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">login page</p>
                     
                      <form className="mx-1 mx-md-4">
                   


                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            <input type="text"
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}} id="form3Example3c" className="form-control" />
                          </div>
                        </div>

                      

                      

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}
                             type="text" id="form3Example4c" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                         
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            <input type="text" id="form3Example4cd" className="form-control" />
                          </div>
                        </div>
                       
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={loginUser} type="button" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>

                    <Link to="/sigup"> create account</Link>

                    </div>
                    
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </>
    )
}
