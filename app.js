const express = require("express");
const app = express();
const homeRoutes = require("./routes/tasks");
const MONOCLIENT = require("mongoose");
app.use(express.json());
const MONGO_URI =
  "mongodb+srv://geekygurdeep:453113@cluster0.tnxo4g8.mongodb.net/tasks?retryWrites=true&w=majority";
app.use("/", homeRoutes);
// app.use(router,controller);

MONOCLIENT.connect(MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("App have Started Listening");
    });
    console.log("Connected");
  })
  .catch((err) => console.log(err));
