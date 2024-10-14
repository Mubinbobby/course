const express=require('express');
const router=express.Router();

const coursemodel=require('../model/coursemodel');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/',async(req,res)=>{
    try {
        const data=await coursemodel.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('error ');
    }
});

router.post('/add',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new coursemodel(item);
        const saveddata=await data1.save();
        res.status(200).send('post successfull');
    } catch (error) {
        res.status(404).send('post unsuccessfull');
    }
});

router.put('/update/:id',async (req,res)=>{
    try {
        var id=req.params.id;
        const data=await coursemodel.findByIdAndUpdate(id,req.body);
        res.status(200).send('updated succesfully');
    } catch (error) {
        res.status(404).send('updated unsuccesfull');
    }
});


router.delete('/delete/:id',async(req,res)=>{
      try {
        var id=req.params.id;
        const data=await coursemodel.findByIdAndDelete(id);
        res.status(200).send('deleted succesfully');
      } catch (error) {
        res.status(404).send('delete unsuccesfull');
      }
});



module.exports=router;