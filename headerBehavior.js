const header = document.querySelector('header');

function checkScroll() {
  if (window.scrollY > 70) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.addEventListener('scroll', checkScroll);
