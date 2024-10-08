const express= require("express");
const mongoose= require("mongoose");
require('dotenv').config();
const cors= require("cors")
const bodyParser= require("body-parser");

const app= express();
app.use(express.json());
const port= process.env.port;
const mongo= process.env.mongoUri
const Router=require("./route/termRoute")
app.use(cors());
app.use(bodyParser.json())
mongoose.connect(mongo).then(()=>{
    console.log(`DB Connected`);
    app.listen(port, ()=>{
        console.log(`Server is running too`);
    })
})

app.use("/",Router)