// SLIDER
const swiper = new Swiper('.swiper', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  keyboard: true,
})

// SCROLLREVEAL
document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 768) {
    ScrollReveal({ reset: true });

    ScrollReveal().reveal('.planos', {
      origin: 'bottom',
      distance: '50px',
      duration: 1200,
      easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.vantagens', {
      rotate: { x: 0, y: 80, z: 0 },

      delay: 250

    });
  } else {
    ScrollReveal().clean('.planos');
    ScrollReveal().clean('.vantagens');
  }
});



//  botão de voltar ao topo
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