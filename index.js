import express from 'express';
import { MongoClient,ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import {router} from './routes/data.js';

import {router as userRouter} from './routes/user.js';


dotenv.config();

export const app = express();
const PORT = process.env.PORT;
// const users= [
//     {
//      "createdAt": "2021-07-14T03:33:29.935Z",
//      "name": "Mrs. Malcolm Cartwright",
//      "age": "51076",
//      "email": "8^;u]h7Wl#",
//      "phone": "79072782",
//      "dob": "pdqCxhHK2j",
//      "password": "zany",
//      "id": "3"
//     },
//     {
//      "createdAt": "2021-07-14T03:48:42.896Z",
//      "name": "James Auer",
//      "age": 19039,
//      "email": "|9$pF1?$ON",
//      "phone": 20154,
//      "dob": "oVBXCZ<t4d",
//      "password": "NSM4)3O]nd",
//      "id": "4"
//     },
//     {
//      "createdAt": "2021-07-14T02:14:18.927Z",
//      "name": "abdul ",
//      "age": "23",
//      "email": "y*RToh1Pmc",
//      "phone": 44784,
//      "dob": "FZqMXa@dOr",
//      "password": "%[2O\\%@LN_",
//      "id": "5"
//     },
//     {
//      "createdAt": "2021-07-14T07:29:17.685Z",
//      "name": "abdul ",
//      "age": "23",
//      "email": "1G(5'O}#H#",
//      "phone": 31870,
//      "dob": "<6F&}<sU};",
//      "password": "L2U|ob$v-g",
//      "id": "6"
//     },
//     {
//      "createdAt": "2021-07-14T06:51:40.838Z",
//      "name": "afrin",
//      "age": "27",
//      "email": "FTC{1XL1T>",
//      "phone": "51132",
//      "dob": "_;AvO0m]jE",
//      "password": "'_{rCZtDpm",
//      "id": "7"
//     },
//     {
//      "createdAt": "2021-07-14T17:26:07.922Z",
//      "name": "afhfsd",
//      "age": "27",
//      "email": ")}-.HA6NZ]",
//      "phone": 96264,
//      "dob": "#N}HL'<?wm",
//      "password": "e8^,Q+`!K'",
//      "id": "11"
//     }
//    ];


   //mongodb connection
   //const MONGO_URL = "mongodb://localhost";
   const MONGO_URL = process.env.MONGO_URL;

//genpassword hashedpass
export async function genPassword(password) {

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(hashedpassword);
    return hashedpassword;


}

// genPassword("pwd");





//connecting mongodb brands to displaydata
   export async function createConnection(){
       const client = new MongoClient(MONGO_URL); 
       await client.connect();
      return client;
   }
   
//curd
app.use(cors());//to allow request of server in react app
app.use(express.json());//middleware to prase thr body as json


app.get('/', function (req, res) {
    res.send('hello world .. new day');
})
//routing to data.js
app.use("/data", router);

app.use("/user", userRouter);

app.listen(PORT,()=>console.log('server is on',PORT));







// app.get('/brands', async function (req, res) {
    
//     const client = await createConnection();
//     const result = await client
//     .db("flipkart")
//     .collection("brands")
//     .find({})
//     .toArray();
    
//     res.send(result);
// })


// app.post('/user', function (req, res) {
//     console.log(req.body);
//     res.send({msg:"Created users"});
// })



// app.get('/user/:id', function (req, res) {
//     const { id } = req.params;
//     console.log('request for id: ' , id);

//     const notfound= {msg: 'not found'};
//     const searchuser=users.filter(data=>data.id === id);

//     if (searchuser.length>0){
//         res.send(searchuser);
//     }else{
//         res.send(notfound);
//     }

//     //no user found

// })

