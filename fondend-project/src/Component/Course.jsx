import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Course.css';
import axios from "axios"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';
const Course = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/course')
      .then((res) => {
        setRows(res.data); // Set fetched product data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Handle error
      });
  }, []);

  //PUT Function
  const navigate=useNavigate()
  function updateCourse(course) {
    navigate('/add',{state:{course}})
  }
    //DELETE OPERATION
    function deletecourse(p){
      axios.delete(`http://localhost:5000/course/delete/${p}`).then(()=>{
        alert("Data Deleted Successfully");
        navi('/home');
      }).catch((error)=>{
        console.log(error);
      })
    }

  return (
    <>
      <Container>
        <Grid container spacing={8}>
          {rows.map((course) => (
            <Grid item key={rows.id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth:500 , marginTop:'50px', border:'2px double black'}}>
                <CardMedia
                
                
                style={{ objectFit: 'contain' }}
                  sx={{ height: 200}}
                  image={course.CourseImage}
                  title={course.CourseName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">

                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course Id :{course.CourseId}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course Category :{course.CourseCategory}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course Description :{course.CourseDescription}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Duration :{course.Duration}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>fees :{course.fees}</Typography>

                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
                  <Button onClick={()=>{updateCourse(course)}} variant="contained" sx={{ backgroundColor: 'green', marginLeft:'90px'}}>Edit</Button>
                  <Button onClick={()=>{deletecourse(course._id)}} color='error' variant="contained">Delete</Button>
                </CardActions>
              </Card>
            </Grid>

          ))}
        </Grid>
      </Container>



    </>
  )
}

export default Course



//to check when we submit the data we need to ensure that is it put or post operation
// in if-else condition we can check the state using useLocation()- a hook
// the if-else should be written in a function if location.state!=null then navigate to put operation else location.state==null then naviagte to add or post operation
// Again we need to represent the data in the form when the put operation is called then the form fields needed to be filled with exisiting data and when we call the edit function we need to edit that data but for add operation we dont need data in the datafield we only rwquire a blank field