// ======== MENU MOBILE ========
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ======== ELEMENTOS DO FEED ========
const postsContainer = document.getElementById("postsContainer");
const btnPublicar = document.getElementById("btnPublicar");
const postInput = document.querySelector(".post-input[placeholder*='Compartilhe']"); // Seleciona o textarea
const inputAutor = document.getElementById("inputAutor"); // NOVO: Captura o input do autor

// ======== ELEMENTOS DOS FILTROS (NOVOS) ========
const filterBtnRecente = document.querySelector('[data-filter="recent"]');
const filterBtnCurtido = document.querySelector('[data-filter="liked"]');

// ======== BANCO DE DADOS (LOCALSTORAGE) ========
// Carregamos os posts salvos. Se não houver nada, usamos um array vazio.
let posts = JSON.parse(localStorage.getItem("navis_posts")) || [];
let filtroAtual = "recent"; // NOVO: Controla o filtro ativo

// NOVO: Função para salvar os posts no localStorage
function salvarPosts() {
    localStorage.setItem("navis_posts", JSON.stringify(posts));
}

// ======== PUBLICAÇÕES ========

// Cria uma nova postagem
btnPublicar.addEventListener("click", () => {
    const texto = postInput.value.trim();
    
    // NOVO: Captura o nome do autor, ou usa "Navegante Anônimo" se estiver vazio
    const autor = inputAutor.value.trim() || "Navegante Anônimo";

    if (texto === "") return; // Não publica se o texto estiver vazio

    const novoPost = {
        id: Date.now(), // Usamos o tempo como ID único
        autor: autor,
        conteudo: texto,
        curtidas: 0,
        comentarios: []
    };

    posts.unshift(novoPost); // Adiciona no início (mais recente)
    postInput.value = "";
    
    salvarPosts(); // NOVO: Salva após publicar
    aplicarFiltroErenderizar(); // NOVO: Renderiza com o filtro atual
});

// Renderiza o feed
function renderPosts() {
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("post");
        // Usamos o 'data-id' para identificar o post facilmente
        div.setAttribute("data-id", post.id);

        div.innerHTML = `
            <div class="post-header">
                <div class="post-info">
                    <i class="fas fa-user-circle"></i>
                    <strong>${post.autor}</strong>
                </div>
            </div>
            <p>${post.conteudo}</p>
            <div class="post-actions">
                <span class="like-btn"><i class="fas fa-heart"></i> ${post.curtidas}</span>
                <span class="comment-btn"><i class="fas fa-comment"></i> ${post.comentarios.length}</span>
            </div>
        `;

        // ATUALIZADO: Lógica de curtir
        const likeBtn = div.querySelector(".like-btn");
        likeBtn.addEventListener("click", () => {
            post.curtidas++;
            salvarPosts(); // NOVO: Salva ao curtir
            aplicarFiltroErenderizar(); // NOVO: Re-renderiza para atualizar a ordem (se filtro "curtidos" ativo)
        });

        // ATUALIZADO: Lógica de comentar
        const commentBtn = div.querySelector(".comment-btn");
        commentBtn.addEventListener("click", () => {
            // Encontramos o post correto pelo ID, em vez de passar o objeto
            const postId = post.id;
            const postParaComentar = posts.find(p => p.id === postId);
            abrirModal(postParaComentar);
        });

        postsContainer.appendChild(div);
    });
}

// ======== LÓGICA DE FILTROS (NOVA) ========

filterBtnRecente.addEventListener("click", () => {
    filtroAtual = "recent";
    // Atualiza a classe 'active'
    filterBtnRecente.classList.add("active");
    filterBtnCurtido.classList.remove("active");
    aplicarFiltroErenderizar();
});

filterBtnCurtido.addEventListener("click", () => {
    filtroAtual = "liked";
    // Atualiza a classe 'active'
    filterBtnCurtido.classList.add("active");
    filterBtnRecente.classList.remove("active");
    aplicarFiltroErenderizar();
});

// NOVO: Função centralizada para ordenar e renderizar
function aplicarFiltroErenderizar() {
    if (filtroAtual === "recent") {
        // Ordena do mais novo (maior ID/timestamp) para o mais velho
        posts.sort((a, b) => b.id - a.id);
    } else if (filtroAtual === "liked") {
        // Ordena do mais curtido para o menos curtido
        posts.sort((a, b) => b.curtidas - a.curtidas);
    }
    renderPosts(); // Re-renderiza a lista ordenada
}

// ======== MODAL DE COMENTÁRIOS ========
const modal = document.getElementById("commentsModal");
const closeModalBtn = document.querySelector(".close-modal");
const commentsContainer = document.getElementById("commentsContainer");
const commentInput = document.querySelector(".comment-input");
const commentBtn = modal.querySelector(".comment-btn"); // Seleciona o botão dentro do modal

let postAtual = null;

function abrirModal(post) {
    postAtual = post;
    modal.style.display = "flex";
    renderComments();
}

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

commentBtn.addEventListener("click", () => {
    const texto = commentInput.value.trim();
    if (texto === "" || !postAtual) return;

    postAtual.comentarios.push(texto);
    commentInput.value = "";
    
    salvarPosts(); // NOVO: Salva após adicionar comentário
    renderComments();
    aplicarFiltroErenderizar(); // NOVO: Atualiza a contagem de comentários no post
});

function renderComments() {
    commentsContainer.innerHTML = "";
    if (!postAtual) return; // Proteção caso postAtual seja nulo

    postAtual.comentarios.forEach(c => {
        const div = document.createElement("div");
        div.textContent = c;
        div.classList.add("comentario"); // Adicionei uma classe para estilização futura
        commentsContainer.appendChild(div);
    });
}

// Fecha modal ao clicar fora
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ======== INICIALIZAÇÃO ========
// Ao carregar a página, renderiza os posts que foram carregados do localStorage
aplicarFiltroErenderizar();
// ======== FECHAR MENU AO CLICAR NO LINK (NOVO) ========
// Adiciona um "escutador" para cada link dentro do menu
navMenu.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', () => {
        // Se o menu estiver ativo (aberto), fecha ele
        navMenu.classList.remove('active');
    });
});

// ======== INICIALIZAÇÃO ========
// ... (o resto do seu código, como aplicarFiltroErenderizar())