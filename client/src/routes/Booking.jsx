import React,{useState} from 'react'
import {useNavigate}  from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
// import axios from "axios"

export function Booking(props) {
  let navigate = useNavigate()
   const [userData, setuserData] = useState({
     name:"",
     email:"",
     phone:"",
     creditCard:"",
     days:"",
     rooms:"",
     

   })
   console.log(userData)

   const handleChange=(e)=>{
     let name=e.target.name;
      let value = e.target.value
      setuserData({...userData,[name]:value})
    }

    const postData = async(e)=>{
        e.preventDefault()
        const {name,email,phone,creditCard,days,rooms}=userData
        // const res = axios("/register",{
        //   method: 'post',
         
        //   body:JSON.stringify({
        //        name,email,work,phone,password,cpassword
        //       })
        // });
       
       
       
        const res = await fetch('/booking',{
          method:"post",
          headers:{
                "Content-Type":"application/json"
           },
           body:JSON.stringify({
            name,email,phone,creditCard,days,rooms
           })


        })
        const data = res.json()

        if(data.status ===422||!data){
          alert("inavalid data")
          console.log("invalid data")
        }else{
          alert("booking successfully")
          console.log("booking  successfully")
          navigate("/successfully")
        }
    }

    return (
        <>
          <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">BOOKING</p>
                     
                      <form method='POST' className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                 
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            <input type="text" name='name' value={userData.name} onChange={handleChange}   id="form3Example1c" className="form-control" />
                          </div>
                        </div>


                

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            <input type="email" name='email' value={userData.email} onChange={handleChange} id="form3Example3c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            
                            <label className="form-label" htmlFor="form3Example3c">phone no</label>
                            <input type="text" name='phone' value={userData.phone} onChange={handleChange} id="form3Example3c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            
                            <label className="form-label" htmlFor="form3Example3c">Days</label>
                            <input type="text" name='days' value={userData.days} onChange={handleChange} id="form3Example3c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            
                            <label className="form-label" htmlFor="form3Example4c">CreditCard</label>
                            <input type="nu" name='creditCard' value={userData.creditCard} onChange={handleChange} id="form3Example4c" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                         
                            <label className="form-label" htmlFor="form3Example4cd">Rooms</label>
                            <input type="text" name='rooms' value={userData.rooms} onChange={handleChange} id="form3Example4cd" className="form-control" />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" onClick={postData} className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>



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
