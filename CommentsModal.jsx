// src/CommentsModal.jsx
import React, { useState } from 'react';

// Recebemos 'post', 'onClose' e 'onAddComment' como "props" do Feed.jsx
function CommentsModal({ post, onClose, onAddComment }) {
  const [commentInput, setCommentInput] = useState("");

  const handleSubmitComment = () => {
    onAddComment(commentInput);
    setCommentInput(""); // Limpa o input após enviar
  };
  
  // Impede que o clique dentro do modal feche o modal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // Se 'post' for nulo, não renderiza nada
  if (!post) return null;

  return (
    // O 'onClick' no fundo escuro (className="modal") fecha o modal
    <div className="modal" id="commentsModal" style={{ display: 'flex' }} onClick={onClose}>
      
      {/* O 'onClick' aqui impede o fechamento */}
      <div className="modal-content" onClick={handleModalContentClick}>
        <div className="modal-header">
          <h3 className="modal-title">Comentários</h3>
          <button className="close-modal" onClick={onClose}>&times;</button>
        </div>
        
        <div className="comments-container" id="commentsContainer">
          {/* Renderiza os comentários do post atual */}
          {post.comentarios.length === 0 ? (
            <p>Seja o primeiro a comentar!</p>
          ) : (
            post.comentarios.map((c, index) => (
              <div key={index} className="comentario">
                {c}
              </div>
            ))
          )}
        </div>
        
        <div className="comment-form">
          <input 
            type="text" 
            className="comment-input" 
            placeholder="Escreva um comentário..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button className="comment-btn" onClick={handleSubmitComment}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;