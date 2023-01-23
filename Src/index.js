const path = require('path');
const express = require('express');
const { dirname } = require('path');
const app = express();

//to join the file or dir
    //console.log(path.join());

    const staticPath =(path.join(__dirname," ../public/hello.html"));
    //built-in middleware
app.use(express.static(staticPath));
app.get('/',(req,res) => {
    res.send("........");
});
app.get('/contact',(req,res) => {
    res.send("<h1>CONTACT</h1>");
});
app.listen(9000,()=>{
    console.log("from port 8000");
});

