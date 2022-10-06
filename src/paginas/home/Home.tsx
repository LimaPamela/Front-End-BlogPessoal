
import React from "react";
import { Box, Button, Grid, Typography } from '@mui/material'; //components
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import "./Home.css";
import { Link } from 'react-router-dom';

// import background from '../../paginas/img/suculenta -Home.jpg';
//style={{ backgroundImage: `url(${background})`}}

function Home() {
  return (
    <>
      <Grid 
       container direction="row" style={{ backgroundColor: "white" }} >
        <Grid alignItems="center" item xs={12} justifyContent="center" display="grid" >
          <Box  paddingX={5} paddingY={5}>
            <Typography className="espacoLine" variant="h4" gutterBottom color="textPrimary" component="h4" align="center" style={{ color: "bLack", fontWeight: "bold" }}>Seja bem-vindo(a)!</Typography>
            <Typography className="linhaespaco" variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}><p>esse é o seu espaço para dar dicas </p><p>de como cultivar Suculentas</p> </Typography>
          </Box>

          <Grid>
          <Box display="grid" justifyContent="center" >
            <Box marginRight={3}>
            </Box>
            <Link to='/posts' className='text-decoration-none'>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#000000", color: "white" }}>Ver Postagens</Button>
            </Link>
          </Box>
          </Grid>

        <Grid item xs={12} paddingX={5} paddingY={5}>
          <img src="https://media.istockphoto.com/photos/mix-of-different-echeveria-succulent-house-plant-pots-concept-of-home-picture-id1341358322?k=20&m=1341358322&s=612x612&w=0&h=J2VaVxt-I0UTiiWZXZjGzp9mOvdQPlOjQJt-dDzEELo=" className="imgHome" alt="" />
        </Grid>

      </Grid>

        <Grid xs={12} style={{ backgroundColor: "white"}}>
          
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;