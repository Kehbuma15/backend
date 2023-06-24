const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const cors = require("cors");

//CONNECTION TO MONGODB
mongoose.connect(MONGO_DB_CONFIG.DB,{
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).then(() =>{
    console.log('Connection to MongoDB Succesful');
}).catch((error) => {
    console.log('Error connecting to MongoDB:',error);
});

//Enable Cors
app.use(cors());

//Middleware to pass JSON data
app.use(express.json());

//Define a route a fetch the data
app.use("/api", require("./router/app.route"));

//Start the server
app.listen(8000, () =>{
    console.log("Server started on port 8000 ");
})
   


