import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import { useState, useEffect, ChangeEvent } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../model/UserLogin';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import  { api, login } from '../../services/Services';
import './Login.css';
import { toast } from 'react-toastify';


function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>(
      {
          id: 0,
          nome: '',
          usuario: '',
          senha: '',
          foto: '',
          token: ''
      });

  function updateModel(event:ChangeEvent<HTMLInputElement>){
    setUserLogin({
    ...userLogin,
    [event.target.name]: event.target.value
  })
  }

    //Cadastra e envia o cliente para a Home
    useEffect(()=>{
      if(token !== ''){
          navigate('/home')
      }
  }, [navigate, token])


//Mensagem de erro
async function conectar(e: ChangeEvent<HTMLFormElement>){
  e.preventDefault();
  try{
      await login(`/usuarios/logar`, userLogin, setToken)
      toast.success('Usuário logado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
          });
  }catch(error){
      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
          });
  }
}



  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        display='flex' 
      >
        <Grid item xs={6} alignItems="center" justifyContent="center" display='flex' >
          <Box paddingX={20}>
          <form onSubmit={conectar}>
              <Typography variant="h2" align='center'>Entrar</Typography>

              <TextField
                onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userLogin.usuario}
                id="usuário"
                name="usuario"
                label="Usuário (e-mail)"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userLogin.senha}
                id="senha"
                name="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Box display='flex' justifyContent='center' marginTop={2}>
                <Link to='/home' className='text-decoration-none'>
                  <Button type="submit" variant="contained" color="primary"
                  className="btg-entrar">
                    Entrar
                  </Button>
                </Link>
              </Box>
            </form>

            <Box display="flex" justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography flex-wrap='wrap' className="espacoLinha" variant='subtitle1'>Ainda não tem uma conta?</Typography>
            </Box>
              <Link to='/cadastro'>
                <Typography flex-wrap='wrap' className="espacoLinha" variant='subtitle1' align='center'>Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className="bg-login"></Grid>
      </Grid>
    </>
  );
}

export default Login;