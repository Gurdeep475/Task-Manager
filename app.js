const express = require("express");
const app = express();
const homeRoutes = require("./routes/tasks");
const MongoClient = require("mongoose");
app.use(express.json());
require('dotenv').config();
app.use("/", homeRoutes);
// app.use(router,controller);

MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("App have Started Listening");
    });
    console.log("Connected");
  })
  .catch((err) => console.log(err));
