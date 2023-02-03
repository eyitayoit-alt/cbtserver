require('dotenv').config();
const { MongoClient } = require('mongodb');

// or as an es module:
// import { MongoClient } from 'mongodb'


  const uri = process.env.URI;
  const client = new MongoClient(uri,{
      useNewUrlParser: true,
    useUnifiedTopology: true,
   
  });
  async function dbConnect()
  { try{
 
    console.log("connected to Database")
    return  await client.connect()
    
  }

catch(error){
console.log(error)
}
}







module.exports={
  client,
  dbConnect,
 
}
// Connection URL

 
// Database Name



