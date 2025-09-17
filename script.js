const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const btns = document.querySelectorAll('.btn');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log(navLinks.classList);
    
});

btns.forEach(button => {
  button.addEventListener('click', () => {
    modalText.innerHTML = 'Email us at <a href="mailto:squeekoapp@gmail.com">squeekoapp@gmail.com</a> to join the beta.';
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
