import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import { Box } from '@mui/material';
import Tema from '../../../model/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Services';

function ListaTemas() {
  //trazer a função de navegação interna
  let navigate = useNavigate();
  
  // estado para gerenciar os temas que virão do backend
  const [temas, setTemas] = useState<Tema[]>([])

  // trazer o token do navegador para dentro do blog
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useLocalStorage('token');

  //verificar se a pessoa tem token, se não tiver, mandar pra login
  useEffect(() => {
    if (token === '') {
      alert('Ai não meu bom')
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  //função que realmente vai até o backend para buscar os temas
  async function getTemas(){
    await busca('/temas', setTemas, {
      headers: {'Authorization': token}
    })
  }

  //função para disparar a busca de temas assim que a tela for carregada
  useEffect(() => {
    getTemas()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temas.length])

  return (
    <>
    {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
      {temas.map(tema => (
        <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              Tema {tema.id} - {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}

export default ListaTemas;