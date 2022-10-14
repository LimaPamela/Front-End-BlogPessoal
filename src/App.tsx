import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Perfil from "./components/perfil/Perfil";
import Footer from "./components/footer/Footer";
import ListaTema from "./components/temas/listaTema/ListaTema";
import CadastroUsuario from "./paginas/cadastro/CadastroUsuario";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer />
      
      <Navbar />

      <div style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />

          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="/temas" element={<ListaTema />} />
          <Route path="/cadastroTema" element={<CadastroTema />} />
          <Route path="/atualizarTema/:id" element={<CadastroTema />} />
          <Route path="/apagarTema/:id" element={<DeletarTema />} />

          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/editarPost/:id" element={<CadastroPost />} />
          <Route path="/apagarPost/:id" element={<DeletarPostagem />} />
        </Routes>
      </div>
      
      <Footer />
    
  </BrowserRouter>
    </Provider>
  );
}

export default App;