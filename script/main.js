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

async function getSkills(typeSkills) {
    let response;
    if (typeSkills == 'hard') {
        response = await fetch('data/competence.json');
    } else if (typeSkills == 'soft') {
        response = await fetch('data/softskills.json');
    }
    let content = await response.json();
    let str = '';
    let starsPainted = '&#9733;';
    let starsCircuit = '&#9734;';

    let compItems;
    if (typeSkills == 'hard') {
        compItems = document.getElementById('hardcomp');
    } else if (typeSkills == 'soft') {
        compItems = document.getElementById('softcomp');
    }


    for (let i = 0; i < content.length; i++) {
        let obj = content[i].stars;
        for (let j = 1; j < obj; j++) {
            starsPainted = starsPainted + '&nbsp;&#9733;';
        }

        let sCircuit = 5 - obj;
        if (sCircuit > 0) {
            for (let j = 1; j < sCircuit; j++) {
                starsCircuit = starsCircuit + `&nbsp;&#9734;`;
            }
        } else {
            starsCircuit = '';
        }

        str = str + `<div class="comp-item text-margin__bottom_20">
        <p class="comp-name">${content[i].name}</p>
        <p class="comp-stars">${starsPainted}&nbsp;${starsCircuit}</p></div>`;

        starsPainted = '&#9733;';
        starsCircuit = '&#9734;';
    }

    compItems.insertAdjacentHTML('beforeend', str);
};



class cvMain {
    constructor() {
        this._init();
    }

    _init() {
        this.menuClick();
        this.showModal();
    }

    menuClick() {
        let MENU = document.getElementById('container');
        let footnote = document.querySelector('.footnote');

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

                let neIt = document.getElementById('neit');
                let neItStr;
                let resStr;
                let port_str;
                let resumDown = document.getElementById('resume');

                let softcomp = document.getElementById('soft-title');

                const MAIN_AREA = document.getElementById('main-area');
                const ALL_COMP = document.getElementById('allcompetence');
                const CONTAINER = document.getElementById('container');

                if (menuItem === 'all') {
                    MAIN_AREA.classList.add('resume-text');
                    MAIN_AREA.classList.remove('invisible-block');
                    ALL_COMP.classList.remove('invisible-block');
                    softcomp.classList.remove('invisible-block');
                    class_sel.classList.remove('menu__item_sel');
                    menuAll.classList.add('menu__item_sel');
                    footnote.classList.add('invisible-block');
                    getSkills('soft');

                    document.getElementById('portfolio-all').innerHTML = '';
                    neIt.innerHTML = '';
                    neItStr = `<div class="neit">
                    <section class="block block_margin">
                    <div class="block_data">
                        октябрь 2017 &#151; февраль 2019
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">ООО &laquo;Европапир&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Сфера:</span> Полиграфия.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> Ведущий менеджер по продажам.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> продажа бумаги и печатных материалов типографиям и печатным комплексам. </p>
                    </div>
                    <div class="footnote">Базу клиентов формировал с 0. Увеличил продажи по своей базе с 10 000 ₽ (ноябрь 2017) до 8 000 0000 ₽ (ноябрь 2018). Дополнительно: верстал письма для рассылок.</div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        июнь 2016 &#151; октябрь 2017
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">ООО &laquo;ТД Изопринт&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Сфера:</span> Полиграфия.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> начальник отдела продаж новых материалов.</p>
                        <p class="block_text__item text-margin__bottom_20"><span class="text_bold">Обязанности:</span> выполнение плана продаж отдела. </p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> менеджер по продажам.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> продажа магнитных материалов для рекламно–производственных компании. </p>
                    </div>
                    <div class="footnote">Создал новый отдел продаж в компании, нанял сотрудников. Дополнительно: верстал письма для рассылок, разрабатывал новый сайт компании.</div>
                </section>

                <section class="block block_margin">
                    <div class="block_data">
                        ноябрь 2015 &#151; март 2016
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">ООО &laquo;Компания Умный дом&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Сфера:</span> Реклама.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> менеджер по продажам.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> продажа сувенирной продукции крупным федеральным производителям FMCG рынка. </p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        март 2013 &#151; август 2014
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">КПК &laquo;Семейный капитал&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Сфера:</span> Финансы.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> Директор филиала.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> создание филиала с 0, подбор сотрудников, привлечение пайщиков. </p>
                    </div>
                    <div class="footnote">Проводил курсы компьютерной грамотности для пенсионеров, по 10 часов в неделю.</div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        июль 2011 &#151; март 2013
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">КГ &laquo;Модерн Стайл&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Сфера:</span> Мебельная фурнитура и комплектующие.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> руководитель учебного центра</p>
                        <p class="block_text__item text-margin__bottom_20"><span class="text_bold">Обязанности:</span> обучение текущих менеджеров компании и филиалов, и ввод в должность новых сотрудников. </p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> старший менеджер</p>
                        <p class="block_text__item text-margin__bottom_20"><span class="text_bold">Обязанности:</span> выполнение плана продаж филиала. </p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> менеджер по продажам</p>
                        <p class="block_text__item text-margin__bottom_20"><span class="text_bold">Обязанности:</span> выполнение плана продаж по своей клиентской базе. </p>
                    </div>
                    <div class="footnote">Проводил обучающие лекции, делал презентации, верстал письма для рассылок.</div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        март 2006 &#151; март 2011
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">ООО &laquo;Искаминт&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Сфера:</span> производство изделий из искусственного камня.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> исполнительный директор</p>
                        <p class="block_text__item text-margin__bottom_20"><span class="text_bold">Обязанности:</span> выполнение плана продаж, норматитов по качеству и браку. </p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> коммерческий директор</p>
                        <p class="block_text__item text-margin__bottom_20"><span class="text_bold">Обязанности:</span> выполнение плана продаж, создание сети партнёров (мебельных производств). </p>
                    </div>
                    <div class="footnote">Дополнительно разрабатывал сайт компании и франшизного проекта.</div>
                </section></div>`;
                    neIt.insertAdjacentHTML('afterbegin', neItStr);

                    resumDown.innerHTML = '';
                    resStr = `<p class="block_text__item"><a class="text-link" id="resime-it">Скачать резюме</a> (весь опыт).</p>`;
                    resumDown.insertAdjacentHTML('beforeend', resStr);

                } else if (menuItem === 'charact') {
                    MAIN_AREA.classList.remove('resume-text');
                    MAIN_AREA.classList.add('invisible-block');
                    ALL_COMP.classList.add('invisible-block');

                    document.getElementById('portfolio-all').innerHTML = '';

                    class_sel.classList.remove('menu__item_sel');
                    menuCharact.classList.add('menu__item_sel');
                } else if (menuItem === 'contact') {
                    MAIN_AREA.classList.remove('resume-text');
                    MAIN_AREA.classList.add('invisible-block');
                    ALL_COMP.classList.add('invisible-block');

                    document.getElementById('portfolio-all').innerHTML = '';

                    class_sel.classList.remove('menu__item_sel');
                    menuContact.classList.add('menu__item_sel');
                } else if (menuItem === 'it') {
                    MAIN_AREA.classList.add('resume-text');
                    MAIN_AREA.classList.remove('invisible-block');
                    ALL_COMP.classList.remove('invisible-block');

                    softcomp.classList.add('invisible-block');
                    class_sel.classList.remove('menu__item_sel');
                    menuIt.classList.add('menu__item_sel');
                    footnote.classList.remove('invisible-block');

                    document.getElementById('portfolio-all').innerHTML = '';
                    neIt.innerHTML = '';
                    neItStr = `<section class="block block_margin">
                    <div class="block_data text-additional">
                        март 2006 &#151; февраль 2019
                    </div>
                    <div class="block_text text-additional">
                        <p class="text-additional_desc">Опыт, не относящийся к ИТ.</p>
                        <p class="block_text__item">В это время был менеджером по продажам, коммерческим и исполнительным директором, руководителем филиала и тренером по ораторскому мастерству и публичным выступлениям.</p>
                    </div>
                    <div class="footnote">Посмотрите раздел &laquo;<a class="text-link" name="menu" data-menu="all" id="menu-all">Весь опыт</a>&raquo;. Там видно, почему я смогу работать практически в любой команде.</div>
                </section>`;
                    neIt.insertAdjacentHTML('afterbegin', neItStr);

                    resumDown.innerHTML = '';
                    resStr = `<p class="block_text__item"><a class="text-link" id="resime-it">Скачать резюме</a> (опыт в ИТ).</p>`;
                    resumDown.insertAdjacentHTML('beforeend', resStr);
                    document.getElementById('softcomp').innerHTML = '';

                } else if (menuItem === 'portfolio') {
                    MAIN_AREA.classList.remove('resume-text');
                    MAIN_AREA.classList.add('invisible-block');
                    ALL_COMP.classList.add('invisible-block');
                    class_sel.classList.remove('menu__item_sel');
                    portfolio.classList.add('menu__item_sel');

                    port_str = `<div class="portfolio-all" id="portfolio-all">
                                        <div class="container_corrector">
                                        <h1 class="h1–corrector">
                                        <div>«ко</div>
                                        <div class="flip">[р</div><span class="up-item">Р]</span>
                                        <div>ектор»</div>
                                    </h1>
                                        </div>
                                        <div class="container portfolio_bottom">
                                            <div class="portfolio__desc">
                                                <div class="portfolio_text">«Корректор» &#151; приложение, которое убирает мелкий «мусор» в тексте. Хорошо подходит для постов в соцсетях.</div>
                                                <div class="portfolio_info">
                                                    <p class="text-margin__bottom_20">Используются регулярные выражения.</p>
                                                    <p class="info_link" ><a href="http://corrector.plan-b.studio">http://corrector.plan-b.studio</a></p>
                                                    <p>Код на <a class="info_link" href="https://github.com/tolkoxa/corrector"> github.com</a></p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="container_bullsandcows">
                                            <header class="header-style">
                                                <div class="cow-left"></div>
                                                <div class="between-top">&nbsp;</div>
                                                <div class="game-name">
                                                    <p class="game-name__text_small">Игра</p>
                                                    <p class="game-name__text_black name__text-laquo">&laquo;Быки
                                                    <span class="game-name__text_white">и</span>
                                                    </p>
                                                    <p class="game-name__text_black">Коровы&raquo;</p>
                                                </div>
                                                <div class="between-top">Развивает<br>логичность мышления,<br>счёт и память.</div>
                                                <div class="cow-right"></div>
                                            </header>
                                        </div>
                                        <div class="container portfolio_bottom">
                                            <div class="portfolio__desc">
                                                <div class="portfolio_text">Игра «Быки и коровы» – браузерная игра (SPA) на развитие логичного мышления, счёта и памяти.</div>
                                                <div class="portfolio_info">
                                                    <p>Написана только на JS, без библиотек и фреймворков.</p>
                                                    <p class="text-margin__bottom_20">Работает как SPA–приложение.</p>
                                                    <p class="info_link" ><a href="http://games.tolkoxa.ru/bullsandcows">http://games.tolkoxa.ru/bullsandcows</a></p>
                                                    <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/bullsandcows"> github.com</a></p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="container_bullsandcows">
                                            <header class="header-style">
                                                <div class="cow-left"></div>
                                                <div class="between-top">&nbsp;</div>
                                                <div class="game-name">
                                                    <p class="game-name__text_small">Игра</p>
                                                    <p class="game-name__text_black name__text-laquo">&laquo;Быки
                                                    <span class="game-name__text_white">и</span>
                                                    </p>
                                                    <p class="game-name__text_black">Коровы&raquo;</p>
                                                </div>
                                                <div class="between-top">Развивает<br>логичность мышления,<br>счёт и память.</div>
                                                <div class="cow-right"></div>
                                            </header>
                                        </div>
                                        <div class="container portfolio_bottom">
                                            <div class="portfolio__desc">
                                                <div class="portfolio_text">Игра «Быки и коровы» – браузерная игра (SPA) на развитие логичного мышления, счёта и памяти.</div>
                                                <div class="portfolio_info">
                                                    <p class="text-margin__bottom_20">Написана только на JS, без библиотек и фреймворков.</p>
                                                    <p class="info_link" ><a href="http://games.tolkoxa.ru/bullsandcows">http://games.tolkoxa.ru/bullsandcows</a></p>
                                                    <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/bullsandcows"> github.com</a></p>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>`;
                    CONTAINER.insertAdjacentHTML('afterend', port_str);
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
window.onload = function() {
    getSkills('hard');
};