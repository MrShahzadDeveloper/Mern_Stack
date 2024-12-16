const express = require("express");             //  This line imports the Express library/module into your project
const app = express();                          //  This line creates an instance of an Express application.
const router = require("./router/auth_router");

app.use("/api/auth" , router)

app.get("/" , (req , res)=>{
    res.status(200).send("Hello This Server is created Succefully By Shadow")
})

app.get("/register" , (req , res) =>{
    res.status(200).send("This is registration page")
})

app.get("/about" , (req , res) =>{
    res.status(200).send("This is About page")
})

const Port = 5000;

app.listen(Port , () =>{
    console.log(`The Server is Running at the Port: ${Port}`);
    
})