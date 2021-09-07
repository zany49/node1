import express from 'express';
import { getuserbyid, newFunction as postdata,deleteData,insertOneuser} from '../helper.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();



//getting data from
//auth is from auth.js

//using auth as middileware like express.json
router.get('/' /*, auth*/ ,async function (req, res) {
    
    const result = await postdata();
    
    res.send(result);
})



//getting by id
router.get('/:userid', async function (req, res) {
    const { userid } = req.params;
    const result = await getuserbyid(userid);

    
    res.send(result);
})
//posting data to db
router.post('/', async function (req, res) {
    const usersData = req.body;
    console.log(usersData);
    const result = await postdata(usersData);
    
    res.send(result);
})
//posting one data to db
router.post('/createuser', async function (req, res) {
    const {name,pic} = req.body;
    
    const result = await insertOneuser( name,pic);
    console.log(result);
    res.send(result);
})
//deleting data
router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    
    const result = await deleteData(id);
    
    res.send(result);
})


export{ router };

    