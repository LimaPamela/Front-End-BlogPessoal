import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify';
import { TokenState } from '../../store/tokens/tokensReducer';
import { addToken } from '../../store/tokens/Action';


function Navbar() {

    let history = useNavigate()
    let dispatch = useDispatch()
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    )
  
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history('/login')

      let navBarComponent
  

    if(token !== ""){
        navBarComponent = <AppBar position="static"
        style={{ backgroundColor: "#408575" }} >
        <Toolbar variant="dense">
            <Box className='cursor' >
                <Typography variant="h5" style={{ color: "#ffffff" }}>
                    Pamela Lima
                </Typography>
            </Box>

            <Grid container justifyContent="flex-end">
          <Box display="flex" justifyContent="start">

            <Box mx={1} className="cursor">
              <Link to="/home" className="navLink">
                        <Typography variant="h6" style={{ color: "#ffffff" }}>
                            home
                        </Typography>
                        </Link>
                    </Box>
                        
                    <Box mx={1} className='cursor'>
                        <Link to="/posts" className="text-decorator-none">
                        <Typography variant="h6" style={{ color: "#ffffff" }}>
                            postagens
                        </Typography>
                        </Link>
                    </Box>
                               
                <Box mx={1} className='cursor'>
                    <Link to="/temas" className="text-decorator-none">
                    <Typography variant="h6" style={{ color: "#ffffff" }}>
                        temas
                    </Typography>
                    </Link>
                </Box>
                                
               <Box mx={1} className='cursor'>
                <Link to="/formularioTema" className="text-decorator-none">
                    <Typography variant="h6" style={{ color: "#ffffff" }}>
                        cadastrar tema
                    </Typography>
                    </Link>
                </Box>
                            
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" style={{ color: "#ffffff" }}>
                            logout
                        </Typography>
                    </Box>
                
            </Box>
        </Grid>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navBarComponent}
        </>
    );
}
}
export default Navbar;