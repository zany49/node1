import { createConnection } from './index.js';
import {ObjectId} from 'mongodb';

 async function newFunction() {
    const client = await createConnection();
    const result = await client
        .db("flipkart")
        .collection("users")
        .find({})
        .toArray();
    return result;
}


//userby id

 async function getuserbyid(userid) {
    const client = await createConnection();
    const result = await client
        .db("flipkart")
        .collection("users")
        .find({ _id: ObjectId(userid) })
        .toArray();
    return result;
}

 async function hashedpwd(name, pic, hashedpassword) {
    const client = await createConnection();
    const result = await client
        .db("flipkart")
        .collection("users")
        .insertOne({
            name: name,
            avatar: pic,
            password: hashedpassword,
            createdAt: new Date().toISOString(),
        });
    return result;
}


async function searchUserbyname(name) {
    const client = await createConnection();
    const result = await client
        .db("flipkart")
        .collection("users")
        .findOne({ name: name })
        

    return result;
}
async function deleteData(id) {
    const client = await createConnection();
    const result = await client
        .db("flipkart")
        .collection("users")
        .deleteOne({ _id: ObjectId(id) });
    return result;
}

async function postdata(usersData) {
const client = await createConnection();
const result = await client
    .db("flipkart")
    .collection("users")
    .insertMany(usersData);
return result;
}


export{ newFunction,getuserbyid,hashedpwd,searchUserbyname,deleteData,postdata }