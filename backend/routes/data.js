const express=require('express');
const router =new express;
const Data=require('../models/data');


router.get('/posts', async (req,res)=>{
    res.json({
        status:'sucess',
        data: await Data.find(),
    });
});

router.post('/user', async(req,res)=>{
    const data= new Data({...req.body});
    res.json({
        status:"sucess",
        data:await data.save(),
    });
});

module.exports =router;