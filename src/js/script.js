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

// Ativar e desativar as respostas da FAQ
//? [1] por os botões em uma variável
const faqBtns = document.querySelectorAll(".faq button");

faqBtns.forEach((btn) => {
  //? [2] detectar qual botão está sendo clicado
  btn.addEventListener("click", (event) => {
    const btnClicked = event.currentTarget;
    const btnControls = btnClicked.getAttribute("aria-controls");

    //? [3] por a resposta (dd) dentro de uma variável através do atributo do botão
    const ddElement = document.getElementById(btnControls);

    //? [4] inserir/remover uma classe para que dd apareça/desapareça na página
    ddElement.classList.toggle("ativo");

    //? [5] fazer uma verificação para caso dd tenha a classe "ativo", então o valor de "aria-expanded" deverá ser atualizado de acordo
    btnClicked.setAttribute(
      "aria-expanded",
      ddElement.classList.contains("ativo")
    );
  });
});

// Galeria de bicicletas
//? alterar a posição das imagens da galeria de acordo com a que for clicada
//? desativar a funcionalidade quando o layout entrar no modo responsivo

//*  [1] selecionar as imagens
const galleryIMGs = document.querySelectorAll(".bicicleta-foto img");
const galleryContainer = document.querySelector(".bicicleta-foto");

galleryIMGs.forEach((img) => {
  //*  [2] detectar qual imagem foi clicada
  img.addEventListener("click", (eventoImg) => {
    //*  [3] alterar a posição da imagem para 1ª quando clicada
    if (matchMedia("(width >= 1025px)").matches) {
      galleryContainer.prepend(eventoImg.currentTarget);
    }
  });
});

// Animação
if (new SimpleAnime()) {
  new SimpleAnime();
}
