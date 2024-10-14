const mongoose=require('mongoose');

const mongo_URL='mongodb+srv://akashajay10:akash242810@cluster0.9ltch.mongodb.net/Course-App?retryWrites=true&w=majority&appName=Cluster0';



mongoose.connect(mongo_URL).then(()=>{
     console.log('connection established');
}).catch(()=>{
    console.log('connection not established');
});