const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("<h1>HOME</h1>");
});
app.get('/contact',(req,res) => {
    res.send("<h1>CONTACT</h1>");
});
app.get('/temp',(req,res) => {
    res.json([
        {
        id : 1,
        name : "ram",
        temp : 40,
        },
        {
            id : 1,
            name : "ram",
            temp : 40,
        }
    ]);
});
app.get('/about',(req,res) => {
    res.send("<h1>ABOUT</h1>");
});

app.listen(8000,()=>{
    console.log("from port 8000");
});