const express = require('express');
const app = express();

//API

// get = read
// post = create
// put = update
// delete = delete


app.get('/',(req,res) => {
    res.send("<h1>hello.html</h1>");
});

app.listen(8000,()=>{
    console.log("listening from 8000");
});