import { createConnection } from './index.js';

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
        .find({ id: userid })
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

export{ newFunction,getuserbyid,hashedpwd }