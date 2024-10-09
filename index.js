const cart = [];
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h2').innerText;
        cart.push({ id: productId, name: productName });
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        cartItems.appendChild(li);
    });
}

document.getElementById('checkout').addEventListener('click', function() {
    const cartData = JSON.stringify(cart);
    window.Telegram.WebApp.sendData(cartData); // Отправка данных боту
});