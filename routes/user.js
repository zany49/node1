import express from 'express';
import { hashedpwd ,searchUserbyname} from '../helper.js';
import { genPassword } from '../index.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();





//singup


router.post('/signup', async function (req, res) {
    const { name, password, pic } = req.body;
    // console.log(name,password,pic);
    const hashedpassword = await genPassword(password);
    console.log(hashedpassword);
    const result = await hashedpwd(name, pic, hashedpassword);
    res.send(result);
});
//login
router.post('/login', async function (req, res) {
    const { name, password } = req.body;

    const user = await searchUserbyname(name);
    console.log(user);
    if ( user){
        //checking pass
     const passinDb =  user.password;
     const loginpass = password;
    console.log(user, password);
    const isPasswordValid= await bcrypt.compare(loginpass,passinDb);
    console.log(isPasswordValid)
    //jwt is used like band until logout it needed
    if (isPasswordValid){
        const token = jwt.sign({id: user._id }, process.env.SECRET_KEY);
        res.send({msg:'sucessfull login', token: token});
    }else{
        res.send({msg:'invalid login '})
    }
}else{
    res.send({msg:'invalid login '})
}
    res.send(isPasswordValid);
});

export{ router};