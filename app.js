const express = require('express');
const app = express();

app.use(express.json());



// app.use(router,controller);

app.listen(4000,() => {
    console.log("App have Started Listening");
});
