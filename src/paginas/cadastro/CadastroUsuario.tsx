import { Typography } from "@material-ui/core";
import { Box, Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Usuario from "../../model/User";
import { cadastroUsuario } from "../../services/Services";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [cadastro, setCadastro] = useState(false);

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (user.nome.length > 3 && user.usuario !== "" && user.senha.length >= 8) {
      setCadastro(true);
    }
  }, [user]);

  // useEffect(() => {
  //   if (userResult.id !== 0) {
  //     navigate("/login");
  //   }
  // }, [navigate, userResult]);

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }


  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      toast.success("Usuario cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      toast.error(
        "Dados inconsistentes. Favor verificar as informações de cadastro.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        }
      );
    }
  }

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login");
    }
  }, [navigate, userResult]);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} className="bg-cadastro"></Grid>
        <Grid container xs={6} justifyContent="center">
          <Grid item xs={8} justifyContent="center">
            <form onSubmit={cadastrar}>
              <Typography variant="h2">Cadastre-se</Typography>

              <TextField
                required
                name="nome"
                value={user.nome}
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="usuario"
                value={user.usuario}
                id="usuario"
                label="Usuário (email)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="foto"
                value={user.foto}
                id="foto"
                label="Foto (url)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="senha"
                value={user.senha}
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="confirmarSenha"
                value={confirmarSenha}
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(event)
                }
              />

              <Box display="flex" justifyContent="space-around" marginTop={2}>
                <Link to="/login" className="text-decoration-none">
                  <Button type="submit" variant="contained" color="secondary">
                    Cancelar
                  </Button>
                </Link>

                <Link to="/login">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!cadastro}
                  >
                    Cadastrar
                  </Button>
                </Link>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;
