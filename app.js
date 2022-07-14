const express = require('express');
const app = express();

app.use('/section',(req,res) =>{
    console.log("App is in Some Section")
})
app.use('/',(req,res) => {
    console.log("App is in Home Page");
})


// app.use(router,controller);

app.listen(3000,() => {
    console.log("App have Started Listening");
});
