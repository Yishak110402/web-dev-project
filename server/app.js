const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRouter = require("./routes/authRoutes")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/auth", authRouter)

mongoose.connect("mongodb+srv://yishak:rfTtsGRqkPr5ILhL@write-wave.3yjawuk.mongodb.net/shemsu?retryWrites=true&w=majority&appName=write-wave",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connection Successful");    
}).catch((err)=>{
    console.log(err.message);    
})


app.all((req, res)=>{
    return res.json({
        status:"success",
        message:"Test successfull"
    })
})

app.all("/*", (req, res)=>{
    res.json({
        status:"fail",
        msg:``
    })
})
app.listen(6969, ()=>{
    console.log("Listening on port 6969")
})