import React,{useEffect,useState} from 'react'

export function Home(props) {
const [username, setusername] = useState("")
const [show, setshow] = useState(false)
    const callHomepage=async()=>{
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
            setusername(data.name)
            setshow(true)
            console.log(data)




        } catch (error) {
          
        console.log(error)

        }
    }


    
    useEffect(() => {
        callHomepage()
      }, [])
    
    return (
        <>
          
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://saalthotels.com/saalt@/imgs/61b08e153bd64welcomhotel-bhubaneswar.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlqUG0oYxJDQnU3Y8CvzFW9vXkOVFEqCBcQ&usqp=CAU" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://media.cntraveler.com/photos/61e08b00abc79c35233fa50b/master/w_2045,h_1363,c_limit/Bedroom-ArtHotel-DenverCO-CRHotel.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>


            <div style={{justifyContent:"center",alignItem:"center"}}>
                <h1>{username}</h1> <br />
                  <h2>
                  { show  ? "happy to see u again":"Welcome we are mern developer"}
                </h2>
            </div>
        </>
    )
}
