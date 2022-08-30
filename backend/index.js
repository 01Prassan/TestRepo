const express = require("express")
const app = new express()
const path = require("path")
const cors = require('cors') 
const threeJSroutes = require("./routes/main")
const db = require("./database/connection")


app.use(cors()) 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(threeJSroutes)




app.listen(8080,()=>{
    console.log(" port is running on 8080")
})