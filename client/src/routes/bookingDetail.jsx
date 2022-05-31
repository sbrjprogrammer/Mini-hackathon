import React,{useEffect,useState} from 'react'

export function BookingDetail(props) {
    const [detail, setdetail] = useState([])
    console.log(detail)
        const bookingData=async()=>{
            try {
                const res = await fetch("/bookingdetail",{
                    method:"GET",
                    headers:{
                      Accept:"application/json",
                      "Content-Type":"application/json"
                    },
                    
                })
                const data = await res.json()
                if(data){
                    setdetail(data)
                    
                }


            } catch (error) {
                alert(error)
            }
        }


    useEffect(() => {
        bookingData()
    }, [])

    return (
        <>
           <section>
        
        {detail.map((item,ind)=>{
            return (
            <table key={ind} className="table py-1 table-dark">
             
              <tbody>
                <tr>
                  <th scope="row">{item._id}</th>
                  <td>Name:{item.name}</td>
                  <td>room:{item.rooms}</td>
                  <td>phone:{item.phone}</td>
                  <td>email:{item.email}</td>
                  <td>days:{item.days}</td>
                  {/* <td><button onClick={()=>deleteid(item._id)}>Delete</button></td>
                
                  <td><Link to={`/product/${item._id}`}><button>upadte</button></Link></td> */}
                </tr>
               
               
              </tbody>
            </table>
            )
        })}
        
        </section>
        </>
    )
}
