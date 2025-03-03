const wrapper = document.querySelector('.wrapper'); 
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};
document.addEventListener('mousemove', e => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
  });