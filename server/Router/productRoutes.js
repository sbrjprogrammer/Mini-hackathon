const express =require("express")
const router = express.Router()
const getAllproductget = require("../controllers/productControllers")
const Authentication = require("../middleware/Authentication")

router.get("/product",getAllproductget.getAllproductget)
router.post("/product/new",getAllproductget.createProduct)
router.put("/product/:id",getAllproductget.updateProduct)
router.delete("/product/:id",getAllproductget.deleteProduct)
router.get("/product/:id",getAllproductget.getProductDetails)
router.post("/booking",getAllproductget.booking)
router.get("/bookingdetail",getAllproductget.bookingDetail)

module.exports =router
