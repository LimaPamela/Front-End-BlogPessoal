import React from 'react';
// import Grid  from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';



const pages = ['Postagem', 'Temas'];
const settings = ['Logout', 'Conta'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    // Logo -Navbar
  
    function ResponsiveAppBar() {
      const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
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
        navigate('/login')
    }
    
    var navbarComponent;
    
    if(token != ""){
    <AppBar position="static" className="cor-navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpaOutlinedIcon/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Alkalami',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color:'white',
            }}
          >
            Suculente-se
          </Typography>
        {/* Final do Logo */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            {/* Menu itens da page */}
           
            <Menu 
              id="menu-appbar" color='white' 
              className='menuItens'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center', //quando em tela pequena
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            
              {/* Em tela sx */}
          <Box sx={{ flexGrow: 1 }}>
          <Link to ='/home' className='text-decoration-none'>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Alkalami',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
            >
            Suculente-se 
          </Typography>
          </Link>
          </Box>
            {/* Final do Home - Login */}

          {/* Pages - menu item */}
          <Box sx={{ flexGrow:22, display: { xs: 'none', md: 'flex' } }}>
          <Box mx={1} className="cursor">
                <Typography variant="h6" color="white"></Typography>
              </Box>
            
              <Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="white"></Typography>
                </Box>

          
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', p:15}}
              >
                {page}
              </Button>
            ))}
          </Box>
          </Box>
         {/* Final das pages - menu item */}
        
          {/* Foto-Avatar */}
       
          <Box sx={{ flexGrow: 0  }}>
            <Tooltip title="Open settings">
              <IconButton className="Avatar" onClick={handleOpenUserMenu} sx={{ p:0 }}>
                <Avatar alt="Pamela_Suculenta" src="/paginas/img/suculenta - Avatar - login.avif" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',

              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Botão Logout- */}
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Link to='/login' className='logout'>            
                  <Box mx={1} className="cursor"></Box>
                  <Typography variant="h6" color="black" textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {/* final do Avatar */}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  }
  
  return (
    <>
    {navbarComponent}
    </>

  )
}

export default ResponsiveAppBar;
