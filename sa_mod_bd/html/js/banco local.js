// Verifica se já existem usuários cadastrados no localStorage
if (!localStorage.getItem("usuarios")) {
  // Se não existir, cria um array com dados de usuários iniciais
  const dadosIniciais = [
    { usuario: "joao123", email: "joao@example.com", senha: "senha123" },
    { usuario: "maria456", email: "maria@example.com", senha: "senha456" },
    { usuario: "carlos789", email: "carlos@example.com", senha: "senha789" },
    { usuario: "ana000",  email: "ana@example.com", senha: "ana000senha" },
    { usuario: "lucas321",email: "lucas@example.com", senha: "lucassenha" },
    { usuario: "pedro123",email: "pedro@example.com", senha: "pedrolindo123" }
  ];

  // Salva esse array no localStorage como uma string JSON
  localStorage.setItem("usuarios", JSON.stringify(dadosIniciais));
}

//muda do portugues para o ingles 
  document.getElementById("idioma").addEventListener("change", function () {
  const idiomaSelecionado = this.value;
  localStorage.setItem("idiomaSelecionado", idiomaSelecionado);

  if (idiomaSelecionado === "en" && !window.location.pathname.includes("login-ig.html")) {
    window.location.href = "login-ig.html";
  } else if (idiomaSelecionado === "pt" && !window.location.pathname.includes("login-estilo.html")) {
    window.location.href = "login-estilo.html";
  }
});


// Adiciona um evento ao botão com classe .botao-embora
// Quando clicado, redireciona o usuário para o Google
document.querySelector('.botao-embora').addEventListener('click', () => {
  window.location.href = "https://www.google.com";
});


// Função que exibe uma mensagem de erro ou sucesso na tela
function exibirMensagem(texto, isError = true) {
  const msg = document.getElementById("mensagemErro"); // Pega o elemento da mensagem
  if (!msg) return; // Se não houver elemento, não faz nada

  msg.textContent = texto; // Define o texto da mensagem
  msg.style.backgroundColor = isError ? "#ffdddd" : "#ddffdd"; // Cor de fundo: vermelho para erro, verde para sucesso
  msg.style.color = isError ? "#990000" : "#006600"; // Cor do texto
  msg.style.display = "block"; // Torna visível
  msg.style.opacity = "1"; // Define opacidade total
  msg.style.transform = "translate(-50%, -50%)"; // Centraliza a mensagem

  // Após 3 segundos, inicia o desaparecimento da mensagem
  setTimeout(() => {
    msg.style.opacity = "0"; // Diminui opacidade
    msg.style.transform = "translate(-50%, -60%)"; // Move levemente para cima (animação)
    setTimeout(() => msg.style.display = "none", 300); // Esconde completamente após a animação
  }, 3000);
}


// Função para realizar o login
function fazerLogin() {
  // Pega o valor digitado no campo de usuário (ou string vazia se não existir)
  const u = document.getElementById("usuario")?.value.trim() || "";
  // Pega a senha digitada (ou string vazia se não existir)
  const s = document.getElementById("senha")?.value || "";
  // Pega a lista de usuários do localStorage (ou um array vazio se não existir)
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Verifica se há um usuário com o nome e senha informados
  if (usuarios.find(x => x.usuario === u && x.senha === s)) {
    // Redireciona para a página principal caso a combinação seja válida
    window.location.href = "main.html";
  } else {
    // Exibe mensagem de erro se usuário ou senha estiverem incorretos
    exibirMensagem("Usuário ou senha incorretos.");
  }
}


// Função para recuperar senha usando o e-mail
function recuperarSenha() {
  // Pega o e-mail digitado no campo correspondente
  const email = document.getElementById("email")?.value.trim() || "";
  // Recupera a lista de usuários
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Verifica se existe algum usuário com esse e-mail
  if (usuarios.find(x => x.email === email)) {
    // Se existir, salva o e-mail no localStorage para usá-lo mais tarde
    localStorage.setItem("recoveryEmail", email);
    // Redireciona para a tela de alteração de senha
    window.location.href = "at-senha-estilo.html";
  } else {
    // Se o e-mail não for encontrado, exibe mensagem de erro
    exibirMensagem("E-mail não encontrado no sistema.");
  }
}


// Função para alterar a senha
function alterarSenha() {
  // Pega os valores dos campos: nova senha, confirmação e senha antiga
  const nova = document.getElementById("novaSenha")?.value || "";
  const conf = document.getElementById("confirmarSenha")?.value || "";
  const senha = document.getElementById("senhaantiga")?.value || "";

  // Verifica se as novas senhas coincidem
  if (!nova || nova !== conf) {
    exibirMensagem("As senhas não coincidem.");
    return;
  }

  // Recupera o e-mail usado durante a recuperação
  const email = localStorage.getItem("recoveryEmail");
  if (!email) {
    exibirMensagem("Erro interno. Tente recuperar de novo.");
    return;
  }

  // Recupera todos os usuários
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // Procura o usuário correspondente ao e-mail
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) {
    exibirMensagem("Usuário não encontrado.");
    return;
  }

  // Verifica se a nova senha é igual à senha atual
  if (nova === senha) {
    exibirMensagem("A nova senha não pode ser igual à atual.");
    return;
  }

  // Atualiza a senha do usuário no array
  usuarios = usuarios.map(u => {
    if (u.email === email) u.senha = nova;
    return u;
  });

  // Salva os dados atualizados no localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Remove o e-mail de recuperação do localStorage
  localStorage.removeItem("recoveryEmail");

  // Exibe mensagem de sucesso
  exibirMensagem("Senha alterada com sucesso!", false);

  // Redireciona para a tela de login após 1,5 segundos
  setTimeout(() => window.location.href = "login-estilo.html", 1500);
}
