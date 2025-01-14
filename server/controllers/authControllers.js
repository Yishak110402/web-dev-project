const mongoose = require("mongoose")
const User = require("./../models/userModel")
const bcrypt = require("bcryptjs")
const validate = require("validator")

exports.signup = async(req, res)=>{    
    const {name, email, password} = req.body
    const user = await User.findOne({email})    
    if(user){
        return res.json({
            status:"fail",
            msg: "Email already taken"
        })
    }
    if(!email || !name || !password){
        return res.json({
            status:"fail",
            msg: "All fields are required"
        })
    }
    const isEmail = validate.isEmail(email)   
    if(!isEmail){
        return res.json({
            status:'fail',
            msg:"Please enter a valid email"
        })
    }
    const newUser = await User.create({
        name,
        email,
        password,
    })        
    return res.json({
        status: "success",
        data:{
            user: newUser
        }
    })
}

exports.login = async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.json({
            status:"fail",
            msg:"Incorrect email or password"
        })
    }
    if(user){
        if(user.password !== password){            
            return res.json({
                status:"fail",
                msg:"Incorrect email or password"
            })
        }
    }
    return res.json({
        status:"success",
        data:{
            user
        }
    })
}