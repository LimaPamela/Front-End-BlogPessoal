import Tema from "./Tema";


interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema?: Tema | null;      //opcional (?) e pode ser null
  
}

export default Postagem;