let menu =document.querySelector('#menu');
let nav =document.querySelector('nav ul');

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("show");
}
