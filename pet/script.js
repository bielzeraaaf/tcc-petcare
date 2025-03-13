// Função que alterna o menu
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
  
    // Alterna a visibilidade do menu
    navLinks.classList.toggle('active');
    
    // Adiciona ou remove a classe 'open' no ícone de menu
    menuToggle.classList.toggle('open');
  };
  
  // Adicionando o event listener para o clique do botão
  document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
  