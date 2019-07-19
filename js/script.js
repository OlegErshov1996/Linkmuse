const cart = document.getElementById('cart');
const buttons = document.getElementsByClassName('feedback');
const send = document.getElementById('send');
const close = document.getElementById('close');
let currentButton;

close.addEventListener('click', () => {
    cart.style.display = 'none';
})

send.addEventListener('click', () => {
    cart.style.display = 'none';
    currentButton.innerHTML = 'Отклик отправлен';
    currentButton.style.color = 'rgba(40, 42, 54, 0.32)';
    currentButton.style.whiteSpace = 'nowrap';
    currentButton.style.pointerEvents = 'none';
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        cart.style.display = 'block';
        currentButton = buttons[i];
    });
}