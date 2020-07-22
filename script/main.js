let MENU = document.getElementById('menuItems');

MENU.addEventListener('click', (evt) => {
    let e = evt.target
    console.log(`1 ---- ${e}`);

    if (e.name === 'menu') {
        let menuItem = e.dataset.menu;
        let class_sel = document.querySelector('.menu__item_sel');
        let menuIt = document.getElementById('menu-it');
        let menuAll = document.getElementById('menu-all');
        let menuCharact = document.getElementById('menu-charact');
        let menuContact = document.getElementById('menu-contact');

        if (menuItem === 'all') {
            class_sel.classList.remove('menu__item_sel');
            menuAll.classList.add('menu__item_sel');
            console.log('Весь опыт');
        } else if (menuItem === 'charact') {
            class_sel.classList.remove('menu__item_sel');
            menuCharact.classList.add('menu__item_sel');
            console.log('Общая характеристика');
        } else if (menuItem === 'contact') {
            class_sel.classList.remove('menu__item_sel');
            menuContact.classList.add('menu__item_sel');
            console.log('Контактная информация');
        } else if (menuItem === 'it') {
            class_sel.classList.remove('menu__item_sel');
            menuIt.classList.add('menu__item_sel');
            console.log('Опыт ИТ')
        }
    }
})

window.onscroll = function() {
    let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if (scrollTop >= 365) {
        document.getElementById('menu-title').classList.remove('invisible-block');
    } else if (scrollTop <= 365) {
        document.getElementById('menu-title').classList.add('invisible-block');
    }
}