// Log no console para confirmar que a função foi chamada
console.log("carregarMenuLateral foi chamado");

// Função assíncrona que carrega o menu lateral na página
async function carregarMenuLateral() {
  try {
    // HTML do menu lateral como template string
    const menuHtml = ` <nav class="menu-lateral">
  <div class="btn-expandir"></div>

  <div class="top-menu">
    <ul>
      <li class="item-menu">
        <a href="main-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-house-door"></i></span>
          <span class="txt-link">Home</span>
        </a>
      </li>
      <li class="item-menu">
        <a href="agenda-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-calendar"></i></span>
          <span class="txt-link">Schedule</span>
        </a>
      </li>
      <li class="item-menu">
        <a href="cliente-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-person-fill"></i></span>
          <span class="txt-link">Register Client</span>
        </a>
      </li>
      <li class="item-menu">
        <a href="usuario-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-person-circle"></i></span>
          <span class="txt-link">Register User</span>
        </a>
      </li>
      <li class="item-menu">
        <a href="fornecedor-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-truck"></i></span>
          <span class="txt-link">Register Supplier</span>
        </a>
      </li>
      <li class="item-menu">
        <a href="estoque_cad-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-box-seam"></i></span>
          <span class="txt-link">Inventory</span>
        </a>
      </li>
      <li class="item-menu">
        <a href="#" id="orcamento" class="menu-link">
          <span class="icon"><i class="bi bi-receipt-cutoff"></i></span>
          <span class="txt-link">Budget <i class="bi bi-chevron-down"></i></span>
        </a>
        <div id="sub-orcamento" class="sub-menu" style="display: none;">
          <a href="financas-ig.html"><i class="bi bi-circle-fill"></i> Finances</a>
          <a href="emitir_nf-ig.html"><i class="bi bi-circle-fill"></i> Issue Invoice</a>
        </div>
      </li>
      <li class="item-menu">
        <a href="os-ig.html" class="menu-link">
          <span class="icon"><i class="bi bi-tools"></i></span>
          <span class="txt-link">Work Orders</span>
        </a>
      </li>
    </ul>
  </div>

  <!-- Footer -->
  <div class="footer-contato">
    <div class="linha-info">
      <p class="duvidas">Questions?<br><span>Contact us</span></p>
      <p class="telefone">3025-5458</p>
    </div>
    <p class="empresa">Conserta Tech</p>
  </div>
</nav>

    `;

    // Busca o elemento do container onde o menu será inserido
    const menuContainer = document.getElementById('menu-container');
    console.log('menuContainer:', menuContainer);

    // Se o container existir no DOM
    if (menuContainer) {
      console.log('Inserindo menu no container...');

      // Insere o HTML do menu no container
      menuContainer.innerHTML = menuHtml;

      // Busca dentro do container o link "orcamento" e seu submenu
      const orcamentoLink = menuContainer.querySelector('#orcamento');
      const subOrcamento = menuContainer.querySelector('#sub-orcamento');

      console.log('orcamentoLink:', orcamentoLink);
      console.log('subOrcamento:', subOrcamento);

      // Se os elementos existem, adiciona o evento para expandir/recolher submenu
      if (orcamentoLink && subOrcamento) {
        orcamentoLink.addEventListener('click', (e) => {
          e.preventDefault(); // previne o comportamento padrão do link

          // Alterna entre mostrar ou esconder o submenu
          subOrcamento.style.display = subOrcamento.style.display === 'none' ? 'block' : 'none';
        });
      } else {
        // Caso os elementos não existam, mostra erro no console
        console.error('Elemento orcamentoLink ou subOrcamento não encontrado!');
      }
    } else {
      // Caso o container do menu não seja encontrado no DOM
      console.error('menuContainer não encontrado no DOM!');
    }
  } catch (error) {
    // Captura e mostra qualquer erro que ocorrer na função
    console.error('Erro ao carregar menu lateral:', error);
  }
}

// Ao carregar o DOM, adiciona eventos nos botões fechar e sair (se existirem)
window.addEventListener("DOMContentLoaded", () => {
  // Botão fechar redireciona para o Google
  document.querySelector(".fechar")?.addEventListener("click", () => {
    window.location.href = "https://www.google.com"; // Redireciona para o Google
  });

  // Botão sair redireciona para página de login
  document.querySelector(".sair")?.addEventListener("click", () => {
    window.location.href = "login-ig.html";
  });
});

// Quando o DOM for carregado, chama a função para carregar o menu lateral
window.addEventListener('DOMContentLoaded', carregarMenuLateral);
