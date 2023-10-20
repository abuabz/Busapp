const express=require('express')
const bcrypt = require('bcryptjs')
const userRouter = express.Router()
const Logdata = require('../models/Log_Table') 
const userdata = require('../models/Reg_Table') 
const busdata = require('../models/add_bus')
const objectId = require('mongodb').ObjectId
const jwt=require('jsonwebtoken')
const multer = require('multer')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, '../client/public/images')
    },
    filename:function(req,file,cb){
        cb(null,req.body.name)
    }
})

var upload = multer({storage:storage})

userRouter.post('/upload',upload.single('file'),(req,res)=>{
    return res.json('file uploaded')
})

userRouter.post('/', async (req,res)=>{
    console.log(req.query.Password);
    try{
        const oldusername = await Logdata.findOne({Username:req.body.Username});
        if (oldusername){
            return res.status(400).json({message:'User already Exist'});
        }
        const hashedpassword = await bcrypt.hash(req.body.Password,10) 

        const oldMobile = await userdata.findOne({Mobile:req.body.Mobile});
        if (oldMobile){
            return res.status(400).json({message:'Mobile already Exist'});
        }
        const oldEmail = await userdata.findOne({Email:req.body.Email});
        if (oldEmail){
            return res.status(400).json({message:'email already Exist'});
        }
      
        var log = {Username:req.body.Username, Password:hashedpassword, Role:req.body.Role}
        const result1 = await Logdata(log).save()
        var reg = {LoginId:result1._id,Username:req.body.Username,Age:req.body.Age, Mobile:req.body.Mobile,Email:req.body.Email}
        const result2 = await userdata(reg).save()
      return res.status(200).json({result2});
    }catch(error){
        res.status(500).json({message:"Somthing Went Wrong"});
        console.log(error);
    }
})
userRouter.post('/log', async (req,res)=>{
    try{
        const oldusername = await Logdata.findOne({Username:req.body.Username});
        if (!oldusername){
            return res.status(400).json({success:false,error:true,message:"Username does not match"});

        }
        console.log(oldusername);

        const Pass = await bcrypt.compare(req.body.Password,oldusername.Password)
        console.log(Pass);
        if (!Pass){
            return res.status(400).json({success:false,error:true,message:"Password does not match"});
        }
        else{
            var tocken=jwt.sign({LoginID:oldusername._id,Username:oldusername.Username,Role:oldusername.Role},
                'tockenKey',
                {
                    expiresIn:"1h"
                })
            return res.status(200).json({message:"Success",tocken})
        
        }
        // var log = {Username:req.query.Username, Password:Pass}
        // console.log()
        
        // const result1 = await Logdata(log).save()
    //     var reg = {LoginId:result1._id,Username:req.query.Username,Age:req.query.Age, Mobile:req.query.Mobile,Email:req.query.Email}
    //     const result2 = await userdata(reg).save()
    //   return res.status(200).json({result2});
    }catch(error){
        res.status(500).json({message:"user not exist"});
        console.log(error);
    }
    
    })

userRouter.get('/profile/:LoginId', async(req,res)=>{
    
    var id = req.params.LoginId
    console.log(id);
    // Regdata.findOne({_id:id}).then((profiledata)=>{
    //     console.log(profiledata);
    //     return res.status(400).json({success:true,error:false,profile:profiledata})
    // })

    userdata.aggregate(
        
            [
                {
                  '$lookup': {
                    'from': 'log_tables', 
                    'localField': 'LoginId', 
                    'foreignField': '_id', 
                    'as': 'result'
                  }
                },
                {
                    '$unwind':'$result'
                },
                {
                    '$match':{
                        'LoginId':objectId(id)
                    }
                },
                {
                    '$group':{
                        '_id':'$_id',
                        'Username':{'$first':'$result.Username'},
                        'Role':{'$first':'$result.Role'},
                        'Age':{'$first':'$Age'}

                    }
                    
                }
              ]
        

    ).then((profiledata)=>{
        console.log(profiledata)
        return res.status(200).json({success:true,error:false,userprofile:profiledata})
    })
})

userRouter.get('/update/:LoginId', async(req,res)=>{
    var id = req.params.LoginId
    console.log(id)
    const hashedpassword = await bcrypt.hash(req.query.Password,10) 
    var details = {
        Username : req.query.Username,
        Password:hashedpassword,
        Role: req.query.Role
    }
    console.log(details);
    Logdata.updateOne({_id:id},{$set:details}).then((updatedata)=>{
        console.log(updatedata)
        return res.status(200).json({message:"Successfully Updated"})
    })
})

userRouter.get('/delete/:LoginId',async(req,res)=>{
    var id = req.params.LoginId
    console.log(id);
    userdata.findByIdAndDelete(id).then((deleted)=>{
        if(deleted){
            return res.status(200).json({message:"Successfully Deleted"})
        }
        else{
            return res.status(400).json({message:"Not found ID"})

        }
    })

})

userRouter.post('/add_bus',async(req,res)=>{
    console.log(req.body.BusImage);
    var addbus={
        BusNumber:req.body.BusNumber,
        BusImage:req.body.BusImage,
        Stime:req.body.Stime,
        Etime:req.body.Etime,
        Departure:req.body.Departure,
        Destination:req.body.Destination
    }
    busdata(addbus).save().then((busdata)=>{
        console.log(busdata);
    })
})

userRouter.get('/buses',async(req,res)=>{
    try{
        const buses = await busdata.find();
        res.status(201).json({success:true,error:false,data:buses})
    }
    catch{
        res.status(400).json({success:false,error:true})
    }
})

userRouter.delete('/buses/:id',async(req,res)=>{
    try{
        const busId = req.params.id
        await busdata.deleteOne({
            _id:busId
        })
        res.status(201).json({success:true,error:false,message:'Bus deleted'})
    }
    catch{
        res.status(400).json({success:false,error:true,message:'Bus Not deleted'})
       }
})

userRouter.get('/buses/:id',async(req,res)=>{
    try{
        const busdetails = req.params.id
        console.log(busdetails);
       
       const value =  await busdata.findOne({
            _id:busdetails
        })
        console.log(value);
        res.status(201).json({success:true,error:false,message:'Bus Get',data:value})

    }
    catch{
        res.status(400).json({success:false,error:true,message:'not added'})

    }
})

userRouter.get('/getbuses',async(req,res)=>{
    const from_route = req.body.Departure
    const to_route = req.body.Destination

    try{
        const buses = await busdata.find({from_route,to_route})
        res.status(201).json({success:true,error:false,data:buses})
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,error:true})
    }
})

module.exports=userRouter