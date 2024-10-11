document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки и страницы
    const buttons = document.querySelectorAll('.itemSearch, .item');
    const pages = {
        'popularProduct': document.querySelector('.popularProduct'),
        'pageBaykBtn': document.querySelector('.baykPage'),
        'pageAutoBtn': document.querySelector('.autoPage'),
        'pageYaxtaBtn': document.querySelector('.yaxtaPage'),
        'pageTranferBtn': document.querySelector('.tranferPage'),
        'pageTicketBtn': document.querySelector('.ticketPage')
    };

    // Функция для скрытия всех страниц
    function hideAllPages() {
        Object.values(pages).forEach(page => {
            page.style.display = 'none';
        });
    }

    // Функция для показа нужной страницы
    function showPage(buttonId) {
        hideAllPages();
        pages[buttonId].style.display = 'block';
    }

    // Назначаем обработчик клика на все кнопки
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.id;
            if (pages[buttonId]) {
                showPage(buttonId);
            }
        });
    });

    hideAllPages();
    showPage('popularProduct');
});


document.addEventListener('DOMContentLoaded', function() {
    
    const hoverElements = document.querySelectorAll('header .item img, .searchBlockWidth .itemSearch, .productMainBox');

    hoverElements.forEach(function(el) {
        
        el.addEventListener('mousedown', function() {
            el.style.transform = 'scale(0.9)';  
            el.style.transition = 'transform 0.2s ease';
        });

        
        el.addEventListener('mouseup', function() {
            el.style.transform = 'scale(1)';
        });

        
        el.addEventListener('touchstart', function() {
            el.style.transform = 'scale(0.9)';  
            el.style.transition = 'transform 0.2s ease';  
        });

        el.addEventListener('touchend', function() {
            el.style.transform = 'scale(1)'; 
        });
    });
});
