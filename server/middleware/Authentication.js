const jwt = require("jsonwebtoken")
const User = require("../model/userSchema")

const Authentication =async(req,res,next)=>{
    try {
        let token = req.cookies.jwtoken
        const verifyToken = jwt.verify(token,"NNYNAMEISSHAHZAIBSIRAJIAMAFOUNDEROFSBRJPRODUCTION")
        const rootUser = await User.findOne({_id:verifyToken._id,"token.token":token})
        if(!rootUser){
            throw new Error("user not found")
            
        }
        // yahha haum sub req me save kar wa rahe h taa k hum 
        // bad req.user id kar k get kar sake iska use humne
        //  api me kia h about ki or res.send se data send kia h frontend ko
        req.token=token;
        req.rootUser=rootUser;
        req.userID = rootUser._id;
        
        next()


    } catch (error) {
        res.status(401).send("unauthorized token")
        console.log(error)

    }

}

module.exports=Authentication