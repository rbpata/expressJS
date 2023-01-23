const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const port = 8000;
//built in middleware

const staticPath = path.join(__dirname,'../public/hello.html');
const temp = path.join(__dirname,"../Templates/views");
const patialsPath = path.join(__dirname,"../Templates/partials");
//to set view engine

app.set("view engine","hbs");

// to change views directory name
app.set('views',temp);

//partials
hbs.registerPartials(patialsPath);


//template engine route
app.get("",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})
//app.use(express.static(staticPath));
app.get("/",function(req,res){
    //res.sendFile(staticPath);
    res.send("hello from this side");
});
//404 error for about
app.get('/about*',(req,res)=>{
    res.render('404');
});


//404 error
app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(port,()=>{
    console.log(`listening from th eport ${port}`);
})