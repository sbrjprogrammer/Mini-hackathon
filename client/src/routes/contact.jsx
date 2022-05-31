import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css"

export function Contact(props) {
  const [userData, setuserData] = useState({name:"",phone:"",email:"",message:""})
 
  console.log(userData)
    const callAboutPage=async()=>{
        try {
            const res = await fetch("/getData",{
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                credentials:"include"
            })
            // yaha saara data mil jaega
            const data=await res.json()
            setuserData({...userData,name:data.name,email:data.email,phone:data.phone})
            console.log(data)

            if(!res.status===200){
              throw new Error(res.error)
            }



        } catch (error) {
          
        console.log(error)

        }
    }

    const handleChange=(e)=>{
       let name = e.target.name
       let value= e.target.value
       setuserData({...userData,[name]:value})
    }

    const contactForm= async(e)=>{
      e.preventDefault()
      const {name,email,phone,message}=userData
       const res =await fetch("/contact",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,email,phone,message
           })
        })
        const data = res.json()
        if(!data){
          console.log("message not send")
        } else{
          alert("message send")
            setuserData({...userData,message:""})
        }
      }


  useEffect(() => {
    callAboutPage()
  }, [])


    return (
        <>
           
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className>Your name</label>
                    <input type="text" id="name"  value={userData.name} 
                    onChange={handleChange}  name="name" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email" className>Your email</label>
                    <input type="text" id="email" onChange={handleChange} value={userData.email} name="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject" className>Phone</label>
                    <input type="text" id="subject" onChange={handleChange} value={userData.phone} name="phone" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Your message</label>
                    <textarea type="text" value={userData.message} onChange={handleChange} id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left">
              <a className="btn btn-primary" onClick={contactForm}>Send</a>
            </div>
            <div className="status" />
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x" />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x" />
                <p>+ 01 234 567 89</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x" />
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section> 

        </>
    )
}
