import React,{useState,useEffect} from 'react'
import { Productitem } from './productitem'

export function Product(props) {
    const [product, setproduct] = useState([])
    console.log(product)
    const callproductpage=async()=>{
        try {
            const res = await fetch("/product",{
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                credentials:"include"
            })
            // yaha saara data mil jaega
            const data=await res.json()
         
                setproduct(data)




        } catch (error) {
          
        console.log(error)

        }
    }


    
    useEffect(() => {
        callproductpage()
      }, [])

    return (
        <>
        <div style={{display:"flex"}}>
      

            {product.map((item,ind)=>{
                return <Productitem key={ind} name={item.name} 
                description={item.description}
                price={item.price} 
                category={item.category}
                rooms={item.rooms}
                services={item.services}
                selectfile={item.selectfile}/>
            })}
            
       
            </div>
        </>
    )
}
