const express = require('express')
const Router = express.Router()
const User = require('../model/userSchema')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")




exports.get=(req,res)=>{
    res.send("hello woorld router")

}

exports.register =async(req,res)=>{

  
    const {name,email,password,phone,work,cpassword} = req.body

   if(!name||!email||!password||!phone||!work||!cpassword){
     return  res.status(422).json({err:"please fileld the field properly"})
   }
       // promisses k through
       // User.findOne({email:email})
       // .then((userExist)=>{
       //     if(userExist){
       //        return res.status(422).json({err:"user already exist"})
       //     }
       //         const user = new User({name,email,password})
       //         user.save().then(()=>res.status(200).json({message:"user crteate successfully"}))
       //         .catch((err)=>res.status(500).json({err:"failled to register"}))

       // })
       // .catch((err)=>console.log(err.message))
     try {
       const userExist=await User.findOne({email:email})
       if(userExist){
        return res.status(422).json({err:"user already exist"})
     }else if(password!==cpassword){
       res.status(401).json({message:"password not match"})
     }




     const user = new User({name,email,password,phone,work,cpassword})
     
              await user.save()
              res.status(200).json({message:"user crteate successfully"})

     } catch(e){
           console.log(err.message)
     }
      
          
               



}

exports.sigin=async(req,res)=>{
    const {email,password}=req.body
  
    if(!email||!password){
  
      res.status(401).json({message:"please filed input  filed properly "})
    }
    try {
      const userLogin= await User.findOne({email:email})
      
        if (userLogin) {
            
          const isMatch = await bcrypt.compare(password,userLogin.password)
         let token = await userLogin.generateAuthToken()
         res.cookie("jwtoken",token,{
           expires:new Date(Date.now() + 25892000000),
           httpOnly:true
         })
         
          console.log(token)
  
  
          if(!isMatch){
            res.status(401).json({message:"user data invalid"})
          }else{
            res.status(200).json({message:"usr sigin successfuly"})
          }
        }
  
  
  
    
  
  
    } catch (error) {
      console.log(error.message)
    }
  
  
  
  
  
  }

exports.about=(req,res)=>{
    res.send(req.rootUser)

}
exports.getData=(req,res)=>{
    res.send(req.rootUser)

}

exports.contact = async (req,res)=>{
try {
  const {name,email,phone,message}=req.body;
  

  if(!name||!email||!phone||!message){
    return res.json({err:"please filled input"})
  }
  const userContact = await User.findOne({_id:req.userID})
  
  if(userContact){
    const userMessage  = await userContact.addMessage(name,email,phone,message)
    await userContact.save()
    res.status(201).json({message:"user contact successfully"})

  }
} catch (error) {
  console.log(error)
}

}
exports.logout=(req, res)=>{
    res.clearCookie("jwtoken",{
      path:"/"
    })
    res.status(200).send("user logout")
    alert("user logout")
  }
  

  exports.adminRouter=(req,res)=>{
    res.send(req.rootUser)

}
