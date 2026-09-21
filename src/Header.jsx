// src/Header.jsx
import React, { useState } from 'react';
import navisLogo from './assets/navis_logo.png'; // Importe a logo

function Header() {
  // Criamos um 'state' para controlar se o menu está ativo (aberto)
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Função para "alternar" (toggle) o estado
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar num link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <img src={navisLogo} alt="Logo NAVIS" style={{ height: '50px' }} />
        </div>
        
        {/* Adiciona o evento 'onClick' para chamar nossa função */}
        <div className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        
        <nav>
          {/* Adicionamos a classe 'active' dinamicamente:
            Se 'isMenuOpen' for true, a classe 'active' é adicionada.
          */}
          <ul id="navMenu" className={isMenuOpen ? 'active' : ''}>
            {/* Adicionamos 'onClick' em cada link para fechar o menu */}
            <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
            <li><a href="#comunidade" onClick={closeMenu}>Comunidade</a></li>
            <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#eventos" onClick={closeMenu}>Eventos</a></li>
            <li><a href="#perfil" onClick={closeMenu}>Perfil</a></li>
          </ul>
        </nav>
        <button className="btn-entrar">Entrar como Navegante</button>
      </div>
      <div className="waves-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </header>
  );
}

export default Header;