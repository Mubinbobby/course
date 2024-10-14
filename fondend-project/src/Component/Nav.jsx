import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>


        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
            <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <div class="app-name">Course App</div>
            </Typography>
            <Link to={'/home'}><Button color="inherit" class="Home-butt">Home</Button></Link>
            <Link to={'/add'}><Button color="inherit" class="Home-butt">Add</Button></Link>
            <Link to={'/'}><Button color="inherit" class="Home-butt">Logout</Button></Link>
            </Toolbar>
        </AppBar>
        </Box>
        
    </>
  )
}

export default Nav