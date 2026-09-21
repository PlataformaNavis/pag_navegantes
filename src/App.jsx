// src/App.jsx

// Importamos o React e a logo
import React from 'react';
import navisLogo from './assets/navis_logo.png'; // Verifique o caminho

// Importamos nossos componentes
import Header from './Header';
import Feed from './Feed.jsx';

function App() {
  // O 'return' só pode retornar UM elemento pai. Usamos <> (Fragment)
  return (
    <>
      {/* O Header já tem sua própria lógica */}
      <Header />

      <main>
        <div className="container">
          
          {/* --- SEÇÃO INÍCIO (PREENCHIDA) --- */}
          <section className="welcome" id="inicio">
            <h1>🌎 Bem-vindo à Comunidade NAVIS</h1>
            <p> NAVIS — o caminho certo é o caminho seguro</p>
            <p>Aqui você descobre o propósito que move nossa jornada: tornar o ir e vir das pessoas mais tranquilo, confiável e humano.</p>
            <p>A NAVIS nasceu do desejo de transformar o medo em movimento — com tecnologia, empatia e colaboração.</p>
            <p>Navegue pelas abas, conecte-se com outros usuários e conheça projetos que estão mudando a forma como vivemos as cidades.</p>
            <p><strong>Cidades evoluem, quando todos participam!</strong></p>
          </section>

          {/* --- SEÇÃO COMUNIDADE (É O COMPONENTE <Feed />) --- */}
          {/* O conteúdo "💬 Comunidade..." vai dentro do Feed.jsx */}
          <Feed />

          {/* --- SEÇÃO CONQUISTAS (PREENCHIDA) --- */}
          {/* (Você não colou este, mas eu preenchi com base no HTML original) */}
          <section className="achievements">
            <h2 className="section-title">
              <i className="fas fa-trophy"></i>
              Conquistas
            </h2>
            <div className="badges">
              <div className="badge">
                  <div className="badge-icon"><i className="fas fa-compass"></i></div>
                  <h3>Explorador</h3>
                  <p>Quem inicia novas jornadas e descobre caminhos</p>
              </div>
              <div className="badge">
                  <div className="badge-icon"><i className="fas fa-hands-helping"></i></div>
                  <h3>Colaborador</h3>
                  <p>Quem fortalece a comunidade com apoio mútuo</p>
              </div>
              <div className="badge">
                  <div className="badge-icon"><i className="fas fa-star"></i></div>
                  <h3>Mentor</h3>
                  <p>Quem guia outros navegantes em suas trajetórias</p>
              </div>
            </div>
          </section>

          {/* --- SEÇÃO PROJETOS (PREENCHIDA) --- */}
          <section id="projetos">
            <div className="section-description">
              <h3>🚀 Projetos</h3>
              <p>A NAVIS acredita que inovação nasce da colaboração.</p>
              <p>Nesta aba, você encontra projetos em andamento, protótipos, ideias e iniciativas desenvolvidas por nossa equipe e pela própria comunidade.</p>
              <p>Acompanhe o progresso de soluções criadas com base em dados, IA e empatia — desde o aprimoramento das rotas seguras até programas de inclusão digital.</p>
              <p>Você também pode propor novos projetos, colaborar em etapas de desenvolvimento e ver sua ideia impactar a cidade.</p>
              <p>🌱 Aqui, cada projeto é um passo em direção a um futuro mais seguro e humano.</p>
            </div>
          </section>

          {/* --- SEÇÃO EVENTOS (PREENCHIDA) --- */}
          <section className="events" id="eventos">
            <div className="section-description">
              <h3>📅 Eventos</h3>
              <p>A NAVIS está sempre em movimento — e nossos eventos são oportunidades para conectar, aprender e agir.</p>
              <p>Participe de oficinas, encontros presenciais, lives e debates sobre segurança urbana, tecnologia e cidadania digital.</p>
              <p>Fique de olho nas próximas datas e envolva-se nas atividades que mais combinam com você.</p>
              <p>🔔 Transformar as cidades é um trabalho coletivo — e você faz parte disso.</p>
            </div>
            
            <h2 className="section-title">
              <i className="fas fa-calendar-alt"></i>
              Eventos Futuros
            </h2>
            <div className="events-container">
              <div className="event">
                <div className="event-date">15 OUT</div>
                <h3>Encontro Mensal dos Navegantes</h3>
                <p>Nosso encontro mensal para compartilhar experiências e planejar as próximas jornadas.</p>
                <button className="btn-participar">Participar</button>
              </div>
              <div className="event">
                <div className="event-date">22 OUT</div>
                <h3>Workshop: Captação de Recursos</h3>
                <p>Aprenda estratégias eficazes para financiar seus projetos de impacto social.</p>
                <button className="btn-participar">Participar</button>
              </div>
              <div className="event">
                <div className="event-date">05 NOV</div>
                <h3>Desafio: Inovação Comunitária</h3>
                <p>Participe do nosso desafio de 30 dias para desenvolver soluções criativas.</p>
                <button className="btn-participar">Participar</button>
              </div>
            </div>
          </section>

          {/* --- SEÇÃO PERFIL (PREENCHIDA) --- */}
          <section id="perfil">
            <div className="section-description">
              <h3>👤 Perfil</h3>
              <p>Este é o seu espaço pessoal dentro da comunidade NAVIS.</p>
              <p>Aqui você pode atualizar suas informações, acompanhar suas contribuições, gerenciar seus projetos e interagir com outros navegantes.</p>
              <p>Quanto mais você participa, mais a plataforma entende suas preferências e te conecta com pessoas e iniciativas que fazem sentido pra você.</p>
              <p>💫 Seu perfil é o reflexo do seu impacto — cada passo conta para construir cidades mais seguras e humanas.</p>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={navisLogo} alt="Logo NAVIS" style={{ height: '50px' }} />
            </div>
            <p>NAVIS — Navegando juntos rumo a um futuro melhor.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>

      {/* O Modal é gerenciado de dentro do Feed.jsx */}
    </>
  );
}

export default App;