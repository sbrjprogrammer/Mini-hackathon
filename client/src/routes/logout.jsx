import React,{useContext, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { userContext } from '../App'

export function Logout(props) {

    const {state,dispatch} = useContext(userContext)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('/logout',{
            method:"get",
            headers:{
                "content-type":"application/json"
            },
            credentials:"include"

        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            navigate("/login",{replace:true})
            if(!res.status===200){
                throw new Error(res.Error)
            }

        }).catch((err)=>{
            console.log(err)
        })


    }, [])

    return (
        <>
            <h1>logout page</h1>
        </>
    )
}
