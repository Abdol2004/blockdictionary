const express= require('express');
const Router= express.Router();
const {create,get,getOneTerm}= require("../controller/termController")

Router.post("/", create)
Router.get("/", get)
Router.get("/:word", getOneTerm)

module.exports= Router;