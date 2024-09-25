const express=require("express")
const Term= require("../model/termSchema")
const mongoose= require("mongoose")

const create= async(req,res)=>{
   
        const newTerm= new Term(req.body);
        const {word}= newTerm;
        const findWord= await Term.findOne({word})
        if (findWord) {
            return res.status(500).json({"msg":"word exist"})
        }
        const saveWord= await newTerm.save()
        return res.status(201).json({"msg": "word added"})
}

const get= async(req,res)=>{
    const getTerm= await Term.find()
    if (getTerm.length===0) {
        return res.status(500).json({"msg": "No word"})
    }
    return res.status(200).json(getTerm)
}

const getOneTerm= async(req,res)=>{
    console.log(req.params);
    const word = req.params.word.trim();
    const getThatOneTerm= await Term.findOne({ word: new RegExp(`^${word}$`, 'i') });
    if (!getThatOneTerm) {
        return res.status(404).json({ message: 'Term not found' });
      }
      res.json(getThatOneTerm);
}


module.exports= {create,get,getOneTerm};