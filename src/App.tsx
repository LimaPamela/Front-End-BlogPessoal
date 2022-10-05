import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTemas from './components/temas/ListaTemas';

function App() {
  return (
    <BrowserRouter>
      
 
        <Navbar />

        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/posts" element={<ListaPostagem />} />
          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;