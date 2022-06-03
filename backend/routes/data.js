const express=require('express');
const router =new express;
const Data=require('../models/Property');


router.get('/property', async (req,res)=>{
    let data = await Data.find();
    data.reverse();
    res.json({
        status:'sucess',
        data: await data,
    });
});

router.post('/property', async(req,res)=>{
    const data= new Data({...req.body});
    res.json({
        status:"sucess",
        data:await data.save(),
        message:"data added sucessfully"
    });
});

router.get('/search/:PPID', async (req,res)=>{
    try{
    const PPID = req.params.PPID;
    const data = await Data.findOne({PPID: PPID});
    if (!data) {
        return res.json({
          status: "Not found",
          message: "post not found",
        });
      }
    // let data = await Data.findOne(PPID: PPID);
    res.json({
        status:'sucess',
        data: await data,
    });
    }catch (e) {
        res.json({
          status: "err",
          message: e.message,
        });
      }
});

module.exports =router;