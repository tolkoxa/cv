window.onscroll = function() {
    let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if (scrollTop >= 365) {
        document.getElementById('menu-title').classList.remove('invisible-block');
        document.querySelector('.menu-sticky').classList.add('border-bottom');
    } else if (scrollTop <= 365) {
        document.getElementById('menu-title').classList.add('invisible-block');
        document.querySelector('.menu-sticky').classList.remove('border-bottom');
    }
}

class cvMain {
    constructor() {
        this._init();
    }

    _init() {
        this.menuClick();
        this.showModal();
    }

    menuClick() {
        let MENU = document.getElementById('menuItems');

        MENU.addEventListener('click', (evt) => {
            let e = evt.target

            if (e.name === 'menu') {
                let menuItem = e.dataset.menu;
                let class_sel = document.querySelector('.menu__item_sel');
                let menuIt = document.getElementById('menu-it');
                let menuAll = document.getElementById('menu-all');
                let menuCharact = document.getElementById('menu-charact');
                let menuContact = document.getElementById('menu-contact');
                let portfolio = document.getElementById('portfolio');

                if (menuItem === 'all') {
                    class_sel.classList.remove('menu__item_sel');
                    menuAll.classList.add('menu__item_sel');
                } else if (menuItem === 'charact') {
                    class_sel.classList.remove('menu__item_sel');
                    menuCharact.classList.add('menu__item_sel');
                } else if (menuItem === 'contact') {
                    class_sel.classList.remove('menu__item_sel');
                    menuContact.classList.add('menu__item_sel');
                } else if (menuItem === 'it') {
                    class_sel.classList.remove('menu__item_sel');
                    menuIt.classList.add('menu__item_sel');
                } else if (menuItem === 'portfolio') {
                    class_sel.classList.remove('menu__item_sel');
                    portfolio.classList.add('menu__item_sel');
                }
            }
        })
    }

    showModal() {
        let overLay = document.getElementById('overlay');
        let modalWin = document.getElementById('modal-window');
        let str = `<a class="close-modal" id="close"></a>
        <img src="img/cert/2116749_652449.jpg" width="auto" height="auto" alt="Курс: &laquo;HTML/CSS. Интерактивный курс&raquo;">
        <p class="label-text">Курс: &laquo;HTML/CSS. Интерактивный курс&raquo;, 30.09.2019</p>
        <p class="label-text__margin-last">№0652449</p>
        <img src="img/cert/2116749_669069.jpg">
        <p class="label-text">Курс: &laquo;HTML5 и CSS3&raquo;, 09.11.2019</p>
        <p class="label-text__margin-last">№0669069</p>
        <img src="img/cert/2116749_693465.jpg">
        <p class="label-text">Курс: &laquo;JavaScript. Уровень 1&raquo;, 15.12.2019</p>
        <p class="label-text__margin-last">№0693465</p>
        <img src="img/cert/2116749_724925.jpg">
        <p class="label-text">Курс: &laquo;Стажировка GeekBrains (web)&raquo;, 23.02.2020</p>
        <p class="label-text__margin-last">№0724925</p>
        <img src="img/cert/2116749_734529.jpg">
        <p class="label-text">Курс: &laquo;JavaScript. Уровень 2&raquo;, 13.03.2020</p>
        <p class="label-text__margin-last">№0734529</p>
        <img src="img/cert/2116749_874823.jpg">
        <p class="label-text">Курс: &laquo;React JS&raquo;, 07.06.2020</p>
        <p class="label-text">№0874823</p>`;

        document.getElementById('cert').addEventListener('click', () => {
            overLay.classList.remove('invisible-block');
            modalWin.classList.remove('invisible-block');
            document.querySelector('#modal-window').insertAdjacentHTML("beforeend", str);

            document.getElementById('close').addEventListener('click', () => {
                this.closeModal();
            });

            document.getElementById('overlay').addEventListener('click', () => {
                this.closeModal();
            });
        })
    }
    closeModal() {
        document.getElementById('overlay').classList.add('invisible-block');
        document.getElementById('modal-window').classList.add('invisible-block');
        document.querySelector('#modal-window').innerHTML = '';
    }
}

let forHr = new cvMain();