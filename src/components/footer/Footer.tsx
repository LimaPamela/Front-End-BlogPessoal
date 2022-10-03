import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
              >
        <Grid alignItems="center" item xs={12}>
          <Box style={{backgroundColor: "#408575 ", height: '78px', padding:"1rem"}}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: 'black' }}
              >
                Siga-nos nas redes sociais{' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/LimaPamela"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon style={{ fontSize: 30, color: 'white' }} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/pamela-lima-s/"
                target="_blank" rel="noreferrer"
              >
                <LinkedInIcon style={{ fontSize: 30, color: 'white' }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: '#000000', height: '30px', padding:"1rem"}}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
              >
                © 2022 Copyright: Pamela Lima
              </Typography>
            </Box>
          </Box> 
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;