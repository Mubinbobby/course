import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"



const Add = () => {
  const [course, setCourse] = useState({
    courseId: '',
    courseName: '',
    courseDescription: '',
    courseCategory: '',
    courseFee: '',
  })
  const fetchValue = (e) => {
    // console.log(e)
    setCourse({ ...course, [e.target.name]: e.target.value })
  }
  const location = useLocation()

  const sentData = () => {
    //console.log(form)
    if (location.state!=null) {
      axios.put('http://localhost:3000/course/update/' + location.state.Course._id, form).then((res) => {
        alert('Data updated');
        Navigate('/home')
      }).Catch((error) => {
        console.log(error);
      })
    }
    else{
        axios.post('http://localhost:3000/course/addcourse/',course).then((res)=>{
            alert('Data Submited')
            Navigate('/home')
        }).catch((error)=>{
            console.log(error);
        })
    }
  }
useEffect(()=>{
    if(location.state!=null){
        setForm({...form,
            CourseImage:location.state.course.CourseImage,
            CourseId:location.state.course.courseId,
            CourseName:location.state.course.CourseName,
            CourseCategory:location.state.course.courseCategory,
            CourseDescription:location.state.course.CourseDescription,
            Duration:location.state.course.Duration,
            fees:location.state.course.fees
        })
    }
},[])

  return (<div>
    <Box

      component="form"
      sx={{
        border: '1px solid #fffff',
        borderColor: 'BLACK',
        backgroundColor: '#f0f0f0',
        // borderWidth: '0.3px', 
        borderStyle: 'solid'
      }}

      // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic"
        label="courseId"
        variant="standard"
        name='courseId'
        value={course.courseId}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseName"
        variant="standard"
        name='courseName'
        value={course.courseName}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseDescription"
        variant="standard"
        name='courseDescription'
        value={course.courseDescription}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseCategory"
        variant="standard"
        name='courseCategory'
        value={course.courseCategory}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseFee"
        variant="standard"
        name='courseFee'
        value={course.courseFee}
        onChange={fetchValue} /><br />
      <br /><br />
      <Button variant="contained" onClick={sentData}>Submit</Button>
    </Box>
  </div>

  )
}

export default Add