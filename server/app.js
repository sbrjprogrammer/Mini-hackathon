const express  = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const Routes = require('./Router/auth');
const productRoutes = require('./Router/productRoutes');
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")

const app = express()
const PORT = 5000;
app.use(cookieParser())
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
dotenv.config({path:'./config'})
app.use(express.json())
const URL ='mongodb+srv://shahzaib:pakistan123@cluster0.grly8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.use(Routes)
app.use(productRoutes)




mongoose.connect(URL,
    
    {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}
)



.then(()=>{
console.log("connect")
}).catch((err)=>{
    console.log("no connection")
})

const middleware=(req,res,next)=>{
    console.log("heello  middled ware")
    next()


}
app.get("/",(req,res)=>{
    res.send("hello woorld")
})
app.get("/sigin",(req,res)=>{
    res.send("sigin")
})
app.get("/about",middleware,(req,res)=>{
    res.send("about")
})
app.get("/contact",(req,res)=>{
    res.send("contact")

})




app.listen(PORT,()=>{
    console.log("hello world")
})