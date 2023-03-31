const mongoose = require('mongoose');

// const url = "mongodb://127.0.0.1:27017/newdatabase"
const url = "mongodb+srv://abhishekmedia1289:Naman1289@projectdb.2rgftop.mongodb.net/?retryWrites=true&w=majority"
const connect = async ()=>{

    try{
console.log("connecting to mongodb...")
        const dbConn = await mongoose.connect(url);
      
        
    }
    catch(error){
        console.log("error in connecting",error.message)

    }
}

module.exports = connect;