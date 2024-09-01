const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://haripriyaviswambharan:mongo123@cluster0.xu5c4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
