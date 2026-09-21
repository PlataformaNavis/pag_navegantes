// src/Feed.jsx
import React, { useState, useEffect, useMemo } from 'react';
// CORRIJA O IMPORT AQUI (sem o ponto final)
import CommentsModal from './CommentsModal.jsx'; 

// Dados iniciais (exemplo)
const DADOS_INICIAIS = [
  { id: 1, autor: "Navegante Alfa", conteudo: "Acabei de me juntar! Rumo a cidades mais seguras.", curtidas: 5, comentarios: ["Bem-vindo!"] },
  { id: 2, autor: "Exploradora Beta", conteudo: "Dica: A iluminação na Rua das Flores melhorou muito!", curtidas: 12, comentarios: ["Ótima notícia!", "Vou passar por lá."] },
];

function Feed() {
  // --- A LÓGICA QUE FALTAVA ESTÁ AQUI ---
  
  const [posts, setPosts] = useState(DADOS_INICIAIS);
  const [filtroAtual, setFiltroAtual] = useState('recent'); // 'recent' ou 'liked'
  
  // States para o formulário
  const [inputAutor, setInputAutor] = useState("");
  const [postConteudo, setPostConteudo] = useState("");
  
  // States para o Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [postAtual, setPostAtual] = useState(null); // Guarda o post que está sendo comentado

  // Salva no localStorage (bônus)
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('navisPosts');
    if (dadosSalvos) {
      setPosts(JSON.parse(dadosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('navisPosts', JSON.stringify(posts));
  }, [posts]);

  // Funções Handlers
  const handlePublicar = () => {
    if (!inputAutor || !postConteudo) {
      alert("Por favor, preencha seu nome e o conteúdo do post.");
      return;
    }
    
    const novoPost = {
      id: Date.now(), // ID único baseado no tempo
      autor: inputAutor,
      conteudo: postConteudo,
      curtidas: 0,
      comentarios: []
    };
    
    // Adiciona o novo post no início da lista (mais recente)
    setPosts([novoPost, ...posts]);
    
    // Limpa os inputs
    setInputAutor("");
    setPostConteudo("");
  };

  const handleCurtir = (postId) => {
    setPosts(postsAtuais => 
      postsAtuais.map(post => 
        post.id === postId ? { ...post, curtidas: post.curtidas + 1 } : post
      )
    );
  };

  const handleAbrirModal = (post) => {
    setPostAtual(post);
    setModalOpen(true);
  };

  const handleFecharModal = () => {
    setModalOpen(false);
    setPostAtual(null);
  };

  const handleAdicionarComentario = (novoComentario) => {
    if (!postAtual || !novoComentario) return;

    setPosts(postsAtuais =>
      postsAtuais.map(post =>
        post.id === postAtual.id
          ? { ...post, comentarios: [...post.comentarios, novoComentario] }
          : post
      )
    );
    
    // Atualiza o post no modal também
    setPostAtual(postAntigo => ({
      ...postAntigo,
      comentarios: [...postAntigo.comentarios, novoComentario]
    }));
  };

  // Filtra os posts (agora 'posts' existe)
  const postsFiltrados = useMemo(() => {
    if (filtroAtual === 'liked') {
      return [...posts].sort((a, b) => b.curtidas - a.curtidas);
    }
    // 'recent' é o padrão (já que publicamos no início da lista)
    return posts;
  }, [posts, filtroAtual]);

  // --- FIM DA LÓGICA QUE FALTAVA ---


  // ======== JSX (O que será renderizado) ========
  return (
    <>
      <section className="feed" id="comunidade">
        
        {/* --- DESCRIÇÃO DA COMUNIDADE (PREENCHIDA) --- */}
        <div className="section-description">
          <h3>💬 Comunidade</h3>
          <p>Este é o coração da NAVIS — o espaço dos navegantes.</p>
          <p>Aqui você pode compartilhar experiências, relatar trajetos, dar dicas de segurança e apoiar quem se move pela cidade.</p>
          <p>Cada história, comentário e sugestão ajuda a construir uma rede viva de confiança.</p>
          <p>💡 Participe de discussões, conheça outras pessoas da sua região e contribua com ideias para melhorar a mobilidade urbana.</p>
          <p>🔹 Transparência, proteção, inclusão e inovação responsável — tudo começa na comunidade.</p>
        </div>

        <h2 className="section-title">
          <i className="fas fa-users"></i>
          Feed da Comunidade
        </h2>

        {/* Formulário de Postagem (Agora funcional) */}
        <div className="post-form">
          <input 
            type="text" 
            id="inputAutor" 
            className="post-input" 
            placeholder="Seu nome..." 
            value={inputAutor} 
            onChange={(e) => setInputAutor(e.target.value)}
          />
          <textarea 
            className="post-input" 
            placeholder="Compartilhe sua ideia, navegante..."
            value={postConteudo}
            onChange={(e) => setPostConteudo(e.target.value)}
          ></textarea>
          <button className="post-btn" id="btnPublicar" onClick={handlePublicar}>
            Publicar
          </button>
        </div>

        {/* Filtros (Agora funcionais) */}
        <div className="filters">
          <button 
            className={`filter-btn ${filtroAtual === 'recent' ? 'active' : ''}`}
            onClick={() => setFiltroAtual('recent')}
          >
            Mais recentes
          </button>
          <button 
            className={`filter-btn ${filtroAtual === 'liked' ? 'active' : ''}`}
            onClick={() => setFiltroAtual('liked')}
          >
            Mais curtidos
          </button>
        </div>

        {/* Container de Posts (Agora funcional) */}
        <div className="posts-container" id="postsContainer">
          {postsFiltrados.length === 0 ? (
            <p>Ainda não há posts. Seja o primeiro a publicar!</p>
          ) : (
            postsFiltrados.map(post => (
              <div className="post" key={post.id} data-id={post.id}>
                <div className="post-header">
                  <div className="post-info">
                    <i className="fas fa-user-circle"></i>
                    <strong>{post.autor}</strong>
                  </div>
                </div>
                <p>{post.conteudo}</p>
                <div className="post-actions">
                  <span className="like-btn" onClick={() => handleCurtir(post.id)}>
                    <i className="fas fa-heart"></i> {post.curtidas}
                  </span>
                  <span className="comment-btn" onClick={() => handleAbrirModal(post)}>
                    <i className="fas fa-comment"></i> {post.comentarios.length}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Renderiza o Modal condicionalmente (Agora funcional) */}
      {isModalOpen && (
        <CommentsModal 
          post={postAtual} 
          onClose={handleFecharModal} 
          onAddComment={handleAdicionarComentario}
        />
      )}
    </>
  );
}

export default Feed;