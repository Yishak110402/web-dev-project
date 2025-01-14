const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRouter = require("./routes/authRoutes")
const itemRouter = require("./routes/itemRoutes")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/auth", authRouter)
app.use("/items", itemRouter)

mongoURL = "mongodb+srv://yishak:rfTtsGRqkPr5ILhL@write-wave.3yjawuk.mongodb.net/shemsu?retryWrites=true&w=majority&appName=write-wave"

mongoose.connect("mongodb://127.0.0.1:27017/shemsu",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connection Successful");    
}).catch((err)=>{
    console.log(err.message);    
})

app.all('/test',(req, res)=>{
    return res.json({
        status:"success",
        message:"Test successfull"
    })
})

app.all("/*", (req, res)=>{
    res.json({
        status:"fail",
        msg:`No path ${req.originalUrl}`
    })
})
app.listen(6969, ()=>{
    console.log("Listening on port 6969")
})