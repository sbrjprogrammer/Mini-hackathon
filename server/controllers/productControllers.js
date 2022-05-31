const Product = require("../model/productSchema")
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/asyncError")
const ApiFeatures = require('../utils/apiFeatures')
const booking = require("../model/bookingSchema")

exports.getAllproductget= catchAsyncError(async(req,res)=>{

  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter().pagination(resultPerPage)
    let product = await apiFeature.query;
  // const product = await Product.find()
  res.status(200).json(
  // success: true,
  product,
  // productsCount
)
})

exports.createProduct=catchAsyncError(async(req,res)=>{


  const product = await Product.create(req.body);

  res.status(201).json({
      success: true,
      product,
    });
})

exports.updateProduct = catchAsyncError(async(req,res,next)=>{
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      product,
    });
})


exports.deleteProduct =catchAsyncError(async(req,res,next)=>{
  const product = await Product.findById(req.params.id);

  // if (!product) {
  //   return res.status(200).json({
  //     // success: false,
  //     message: "Product not found",
  //   })
  // }
if (!product) {
  return next(new ErrorHandler("Product not found", 404));
}



  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
})

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.paramsid);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  })
}
)

exports.booking =async(req,res)=>{

  
  const {name,email,phone,debitCard,rooms,days,} = req.body

 if(!name||!email||!phone||!debitCard||!rooms||!days){
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
  //    const userExist=await booking.findOne({email:email})
  //    if(userExist){
  //     return res.status(422).json({err:"user already exist"})
  //  }else if(password!==cpassword){
  //    res.status(401).json({message:"password not match"})
  //  }




   const user = new booking({name,email,phone,debitCard,rooms,days,})
   
            await user.save()
            res.status(200).json({message:"booking successfully"})

   } catch(err){
         console.log(err.message)
   }
    
        
             



}

exports.bookingDetail=async(req,res)=>{
try {
  const data = await booking.find()
 
  if(data){
    res.status(200).json(data)
  }
  

  
} catch (error) {
  console.log(error)
}
}




