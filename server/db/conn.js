const mongoose = require("mongoose");
const DB = "mongodb+srv://admin:admin@cluster0.kopcy.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connection start")).catch((error)=>console.log(error.messsage))