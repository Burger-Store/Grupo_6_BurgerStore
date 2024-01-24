window.addEventListener('load', function() {
    const menu = document.getElementById('avatar-option');
    const shopIcon = document.getElementById('shop-icon');
    const menuDesplegable = document.getElementById('main-menu');
    const cartOptions = document.getElementById('cart');

    menu.addEventListener('click', function() {
        menuDesplegable.classList.toggle('hide')
    });
    shopIcon.addEventListener('click', function() {
        cartOptions.classList.toggle('hide')
    });

})
