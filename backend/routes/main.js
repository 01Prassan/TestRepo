const express = require("express")
const router = express.Router()
const controllerthreejs = require("../controller/rootController")

router.get("/",controllerthreejs.getdata)
router.patch("/",controllerthreejs.patchdata)
module.exports = router