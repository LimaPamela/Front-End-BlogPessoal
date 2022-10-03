import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
  return (
    <>
      <AppBar position="static" className="cor-navbar" >
        <Toolbar variant="dense">
            <Box className="cursor">
            <Typography variant="h5" color="black">
              Suculente-se
            </Typography>
            </Box>
         
          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="start">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="black">
                  Home
                </Typography>
              </Box>
             

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="black">
                  Postagens
                </Typography>
              </Box>
            

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="black">
                  Temas
                </Typography>
              </Box>
             

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="black">
                  Sobre nós
                </Typography>
      
              </Box>

                <Link to='/login' className='logout'>            
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="black">
                        Logout
                      </Typography>
                  </Box>
                </Link>
            </Box>
  

          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;