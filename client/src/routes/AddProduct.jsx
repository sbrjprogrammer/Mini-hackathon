import React, { useState } from "react";
// import useStyles from "./style"
import {Paper,TextField,Typography,Button} from "@mui/material"
import FileBase from "react-file-base64"




 export const AddProduct = ()=>{

    const[postData,setpostData]=useState({
        name:'',
        description :'',
        price :'',
        category:"",
        rooms:"",
        services:"",
        selectfile:''
    })
   
    const handlerSubmit = async(e)=>{
        e.preventDefault()
        const{name,price,description,rooms,services,selectfile}=postData
        const res = await fetch('/product/new',{
            method:"post",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                name,price,description,rooms,services,selectfile
               })
        })
        const data = res.json()
        if(data.status ===422||!data){
            alert("inavalid data")
            console.log("invalid data")
          }else{
            alert("user sigunp successfully")
            console.log("user login successfully")
            
          }

    
    }
    const clear=()=>{
        console.log("shahzaib")
    }

    return(
        <Paper>
        <form action="" autoComplete="off" noValidate onSubmit={handlerSubmit}>
        <Typography variant="h6">Create services</Typography>
            <TextField name="name" variant="outlined" label="hotelName" fullWidth onChange={(e)=>{setpostData({...postData,name:e.target.value})}} ></TextField>
            <TextField name="price" variant="outlined" label="price" fullWidth onChange={(e)=>{setpostData({...postData,price:e.target.value})}} ></TextField>
            <TextField name="category" variant="outlined" label="category" fullWidth onChange={(e)=>{setpostData({...postData,category:e.target.value})}} ></TextField>
            <TextField name="description" variant="outlined" label="description" fullWidth onChange={(e)=>{setpostData({...postData,description:e.target.value})}} ></TextField>
            <TextField name="rooms" variant="outlined" label="rooms" fullWidth onChange={(e)=>{setpostData({...postData,rooms:e.target.value})}} ></TextField>
            <TextField name="services" variant="outlined" label="services" fullWidth onChange={(e)=>{setpostData({...postData,services:e.target.value})}} ></TextField>
           
            <div>
            <FileBase 
            type="file"
            multiple={false}
            onDone={({base64})=>setpostData({...postData,selectfile:base64}) }
            />
            <br />
            <Button  variant="contained" color="primary" size="large" type="submit" >Submit</Button> <br />
            <Button  variant="contained" color="primary" size="small" onClick={clear} >clear</Button>
            

            </div>
        </form>
        </Paper>
    )
}

