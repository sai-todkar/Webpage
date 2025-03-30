const express=require('express');
const realstateModel = require('../model/realstate.model')
const router = express.Router();

router.post('/create',async(req,res)=>{
    console.log("heloo");
    const userdoc= await realstateModel.create({
            realstatename:req.body.realstatename,
            mobilenumber:(req.body.mobilenumber).toString(),
            selectedDesigner:req.body.selectedDesigner,
            designVision:req.body.designVision,
    }) 
    res.status(200).json({
        message: 'User created successfully',
        mongo_data: userdoc
    });
});

module.exports=router;