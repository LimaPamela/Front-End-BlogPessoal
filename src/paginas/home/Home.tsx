// import React from "react";
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import "./Home.css";

// import purple from '@material-ui/core/colors/purple';

// const roxin = purple[500]


function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#80cbc4" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" style={{ color: "bLack", fontWeight: "bold" }}>Seja bem-vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center" >
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#000000", color: "white" }}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://media.istockphoto.com/photos/succulent-plants-picture-id534333478?k=20&m=534333478&s=612x612&w=0&h=s6X1G6bYfGxstbEKyczVkUdY-B5j4uXIIgzVdcE8eUQ=" alt="" width="500px" height="564px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white"}}>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;