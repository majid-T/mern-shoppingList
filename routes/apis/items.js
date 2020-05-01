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
//@desc     Create an Items
//@access   Public
router.post('/',(req,res,next)=>{
    const newItem = new Item({name: req.body.name});
    newItem.save().then((item)=>res.json(item));
});

module.exports = router;