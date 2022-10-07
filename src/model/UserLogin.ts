interface UserLogin {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto:string;
  token?: string | null;   //opcional (?) e pode ser null
}

export default UserLogin;