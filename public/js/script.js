// SLIDER
const swiper = new Swiper('.swiper', {
  cssMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  scrollbar:{
    el:'.swiper.scrollbar',
  },
  keyboard: true,
})

// SCROLLREVEAL
document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 768) {
    ScrollReveal({ reset: false });

    ScrollReveal().reveal('.animacao ', {
      origin: 'bottom',
      distance: '50px',
      duration: 1500,
      easing: 'ease-in-out'
    });

   
  } 
});//  botão de voltar ao topo
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('btnTop').style.display = 'block'
  } else {
    document.getElementById('btnTop').style.display = 'none'
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// NAVEGAÇÃO DAS PAGINAS
const pathname = window.location.pathname;

const currentLink = document.querySelector(`a[href="${pathname}"]`);
if (currentLink) {
  currentLink.classList.add('active');
}

// MENU HAMBURGUER
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('header nav ul');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

//  VALIDAÇÃO DE FORMULARIO

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const telefone = document.getElementById('telefone');
  const mensagem = document.getElementById('mensagem');
  
  const nomeValor = nome.value.trim();
  const emailValor = email.value.trim();
  const telefoneValor = telefone.value.trim();
  const mensagemValor = mensagem.value.trim();
  
  if (nomeValor === '') {
    alert('Campo nome vazio');
    nome.focus();
    return false;
  } else if (emailValor === '') {
    alert('Campo email vazio');
    email.focus();
    return false;
  } else if (telefoneValor === '') {
    alert('Campo telefone vazio');
    telefone.focus();
    return false;
  } else if (mensagemValor === '') {
    alert('Campo mensagem vazio');
    mensagem.focus();
    return false;
  } else {
    form.submit();
  }
});
 