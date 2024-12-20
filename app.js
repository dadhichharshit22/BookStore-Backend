const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();
const cors = require("cors");


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 


mongoose.connect(
    "mongodb+srv://dadhichharshit222002:WcAae7CiASJ8szMN@bookstore.lcxta.mongodb.net/"
).then(()=>console.log("Connected to Database"))
  .then(()=>{
    app.listen(5000);
  }).catch((err) => console.log(err));
