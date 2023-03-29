// Marcar o botão do menu de navegação
const links = document.querySelectorAll(".header-menu a");

links.forEach((e) => {
  if (location.href.includes(e.href)) {
    e.classList.add("ativo");
  }
});

// Ativar itens de orçamento
const currentUrl = new URLSearchParams(location.href);

currentUrl.forEach((e) => {
  const tipo = document.getElementById(e);
  if (tipo) {
    tipo.checked = true;
  }
});
