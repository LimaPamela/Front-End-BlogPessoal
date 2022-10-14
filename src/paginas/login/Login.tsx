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
  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      navigate("/home");
    }
  }, [dispatch, navigate, respUserLogin.id, respUserLogin.token]);


  return (
    <>
      <Grid
        container
        className="bgLinear"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={10}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              style={{ color: "#f9d5af" }} 
            >
              Seja bem-vindo(a) ao meu Blog!
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              align="center"
              style={{ color: "#f9d5af" }} 
            >
              {" "}
              Faça login e me acompanhe nessa transição de carreira para me tornar uma Desenvolvedora Full Stack
            </Typography>

            <br></br>
            <p><div className="spinner"></div> </p>
          </Box>
        </Grid>

        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20}>
            <form onSubmit={conectar}>
              <Typography variant="h3" align="center"  style={{ color: "#f9d5af" }}>
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
                label="Senha"className="Label" 
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                
              />
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ color: "#0f053e" }}
                  disabled={!form}
                >
                  Entrar
                </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent="center" marginTop={2} className="btgCadastro">
              <Box marginRight={1}>
                <Typography variant="subtitle1"  style={{ color: "#0f053e" }} >
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastro" className="text-decoration-none" >
                <Typography
                  variant="subtitle1"
                  align="center"  style={{ color: "#e6059a" }} >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Login;
