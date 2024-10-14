const mongoose=require('mongoose');

const courseschema=mongoose.Schema({
    CourseImage:String,
    CourseId:String,
    CourseName:String,
    CourseCategory:String,
    CourseDescription:String,
    Duration:String,
    fees:Number
});

const coursedata=mongoose.model('course',courseschema);

module.exports=coursedata;