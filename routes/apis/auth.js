const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config =  require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

//@route    POST api/users
//@desc     Authenticate user
//@access   Public
router.post('/',(req,res,next)=>{
    const {email,password} = req.body;

    //Check for all data to be in req body
    if(!email || !password){
        return res.status(400).json({msg:'Please Enter all fields'});
    }

    //Check for duplicated user
    User.findOne({email})
        .then(user=>{
            if(!user){
                return res.status(400).json({msg:'User does not exists'});
            }

            //validating password
            bcrypt.compare(password,user.password)
            .then(isMatch =>{
                if(!isMatch) return res.status(400).json({msg:'Password is incorrect'});

                jwt.sign(
                    {id:user.id},
                    config.get('jwtSecret'),
                    {expiresIn:2000},
                    (err,token)=>{
                        if(err) throw err;
                        res.json({
                            token,
                            user:
                                {
                                id: user.id,
                                user: user.name,
                                email:user.email
                            }
                        })
                    }
                );
            })
        })
});


module.exports = router;