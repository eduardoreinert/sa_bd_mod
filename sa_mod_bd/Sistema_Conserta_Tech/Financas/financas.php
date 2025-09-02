<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <!-- Links css -->
  <link rel="stylesheet" href="../Menu_lateral/css-home-bar.css">
  <link rel="stylesheet" href="financas.css">

  <!-- Link do bootscript -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

  <!-- Link da imagem do navegador -->
  <link rel="shortcut icon" href="../img/favicon-16x16.ico" type="image/x-icon">



  <title>Finanças - Serviços</title>
</head>

<body>

  <h1 class="titulo"><span>FINANÇAS</span> SERVIÇOS</h1>

  <?php
  include("../Menu_lateral/menu.php"); 
?>


  <header class="topo">
    <div class="header-container">
      <h1></h1>
      <a href="financas_gastos.html" class="btn-troca-pagina">
        Ver Gastos <i class="bi bi-arrow-right-circle"></i>
      </a>
    </div>
  </header>
  <section class="resumos">
    <div class="card verde">
      <div class="card-conteudo">
        <i class="bi bi-calendar-plus"></i>
        <div class="texto">
          <span class="titulo-receber">A Receber Hoje</span>
          <span class="valor"></span>
        </div>
      </div>
    </div>

    <div class="card azul">
      <div class="card-conteudo">
        <i class="bi bi-wallet2"></i>
        <div class="texto">
          <span class="titulo-receber">Total a Receber</span>
          <span class="valor"></span>
        </div>
      </div>
    </div>

    <div class="card roxo">
      <div class="card-conteudo">
        <i class="bi bi-check2-circle"></i>
        <div class="texto">
          <span class="titulo-receber">Total Recebido</span>
          <span class="valor"></span>
        </div>
      </div>
    </div>
  </section>


  <section class="tabela-financas">
    <table>
      <thead>
        <tr>
          <th class="campo-os">OS:</th>
          <th class="campo-cliente">Cliente:</th>
          <th>Descrição:</th>
          <th>Vencimento:</th>
          <th>Valor:</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="corpo-tabela">
        <!-- Linhas serão carregadas dinamicamente -->
      </tbody>
    </table>


    <div class="botoes-acoes">
      <button class="botao salvar"><i class="bi bi-save"></i> Salvar Alteração</button>

      <button class="botao novo"><i class="bi bi-plus-circle"></i> Novo Serviço</button>

    </div>
  </section>
  </main>
  <div id="modal-confirmacao" class="modal-overlay hidden">
    <div class="modal-content">
      <p>Tem certeza que deseja excluir?</p>
      <div class="botoes">
        <button id="btn-sim">Sim</button>
        <button id="btn-nao">Não</button>
      </div>
    </div>
  </div>

  <!-- Link javascript -->
  <script src="../Menu_lateral/carregar-menu.js" defer></script>
  <script src="financas_script.js" defer></script>

</body>

</html>