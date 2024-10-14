const express=require('express');
const app=new express();
const cors=require('cors')

const port=3000;

require('./db/connection');

//Intializing express and cors
app.use(cors())


const route=require('./routes/basicroutes');
app.use('/course',route);


app.listen(port,()=>{
    console.log(`'succesfully running on post ${port}`)
});