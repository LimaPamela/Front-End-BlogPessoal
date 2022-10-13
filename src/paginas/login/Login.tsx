import { Typography, Button } from "@material-ui/core";
import { Box, Grid, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserLogin from "../../model/UserLogin";
import { login } from "../../services/Services";
import { addId, addToken } from "../../store/tokens/Action";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token] = useState("");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    nome: "",
    senha: "",
    foto: "",
    token: "",
  });
  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (
      userLogin.usuario !== "" &&
      userLogin.senha !== "" &&
      userLogin.senha.length >= 8
    ) {
      setForm(true);
    }
  }, [userLogin]);

  const [form, setForm] = useState(false);

  async function conectar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);
      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
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
  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [dispatch, navigate, token]);

  //metodo para pegar o token e o id do json e guardar no redux
  useEffect(()=> {
    if(respUserLogin.token !== ''){
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home');
    }
  }, [respUserLogin.token])

  return (
    <>
      <Grid
        className="bgLinear"
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20}>
            <form onSubmit={conectar}>
              <Typography variant="h2" align="center">
                Entrar
              </Typography>

              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                value={userLogin.usuario}
                id="usuario"
                name="usuario"
                label="Usuário"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                value={userLogin.senha}
                id="senha"
                name="senha"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!form}
                >
                  Entrar
                </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1">
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastro">
                <Typography variant="subtitle1" align="center">
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className="imglogin"></Grid>

      </Grid>
    </>
  );
}

export default Login;
