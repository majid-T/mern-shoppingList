const express = require('express');
const router = express.Router();

const Item = require('../../models/Items');

//@route    GET api/items
//@desc     Get all Items
//@access   Public
router.get('/',(req,res,next)=>{
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
        .catch((err)=>console.log(err));
});

//@route    POST api/items
//@desc     Create an Item
//@access   Public
router.post('/',(req,res,next)=>{
    const newItem = new Item({name: req.body.name});
    newItem.save().then((item)=>res.json(item));
});


//@route    DELETE api/items
//@desc     Delete an Item
//@access   Public
router.delete('/:id',(req,res,next)=>{
    Item.findById(req.params.id)
    .then((item)=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({sucess:false}));
});


module.exports = router;