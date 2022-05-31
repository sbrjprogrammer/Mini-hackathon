import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"


export function AdminRoutes(props) {
    const [product, setproduct] = useState([])
    const navigate = useNavigate()
    console.log(product)


    const callAdminCheck=async()=>{

    

      try {
          const res = await fetch("/adminroute",{
              method:"GET",
              headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              credentials:"include"
          })
          // yaha saara data mil jaega
          const data=await res.json()
         
          console.log(data.email)

          if(!data.email==="sbrjprogrammer@gmail.com"||!data){
            alert("only admin acces this paeg")
            throw new Error(res.error)
            
          
          }



      } catch (error) {
        
        navigate('/')

      }
  }



    // const callAdminpage=async()=>{
    //     try {
    //         const res = await fetch("/product",{
    //             method:"GET",
    //             headers:{
    //               Accept:"application/json",
    //               "Content-Type":"application/json"
    //             },
    //             credentials:"include"
    //         })
    //         // yaha saara data mil jaega
    //         const data=await res.json()
         
    //             setproduct(data)




    //     } catch (error) {
          
    //     console.log(error)

    //     }
    // }


    const deleteid=async(id)=>{
        console.log(id)
      try {
        const res = await fetch(`/product/${id}`,{
            method:"DELETE",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
        })
        const data = await res.json()

        if(data){
            alert("product deleted")
            // callAdminpage()
        }

      } catch (error) {
          alert("product deleting problem")
      }
    }


    
    useEffect(() => {
      callAdminCheck()
        // callAdminpage()
      }, [])

    return (
        <>
        <section>
        
            {product.map((item,ind)=>{
                return (
                <table key={ind} className="table py-1 table-dark">
                 
                  <tbody>
                    <tr>
                      <th scope="row">{item._id}</th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td><button onClick={()=>deleteid(item._id)}>Delete</button></td>
                    
                      <td><Link to={`/product/${item._id}`}><button>upadte</button></Link></td>
                    </tr>
                   
                   
                  </tbody>
                </table>
                )
            })}
            
            </section>
        </>
    )
}
