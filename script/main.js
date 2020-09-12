let vm = new Vue({
    el: '#app',
    data: {
        v_it: true,
        v_neit: false,
        v_anyit: true,
        v_portfolio: false,
        v_charact: false,
        v_contact: false,
        content_show: '',
        content_it_p1: '',
        content_it_p2: '',
        content_neit_grey: '',
        content_neit: '',
        content_portfolio: '',
        content_charact: '',
        content_contact: '',
        sticky: false,
        overLay: "document.getElementById('overlay')"
    },
    methods: {
        showmodal: function() {
            forhr.showModal();
        }
    }
})

window.onscroll = function() {
    let scrollPix = 360;
    let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if (scrollTop >= scrollPix) {
        vm.sticky = true;
        document.getElementById('sticky_plate').classList.add('border-bottom');
    } else if (scrollTop <= scrollPix) {
        vm.sticky = false;
        document.getElementById('sticky_plate').classList.remove('border-bottom');
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
        vm.content_it_p1 = `<div class="resume__div container_center" id="resume-area">
                <section class="block block_margin">
                    <div class="block_data">
                        Образование:
                    </div>
                    <div class="block_text">
                        <p class="block_text__item">НОУ &laquo;<a class="text-link" href="http://taom.ru">Тольяттинская академия управления</a>&raquo; (Тольятти, 2003 г.),</p>
                        <p class="block_text__item">факультет &laquo;Уравления и финансов&raquo;,</p>
                        <p class="block_text__item">специальность &laquo;Информационные системы в экономике&raquo;.</p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        декабрь 2019 &#151; февраль 2020
                    </div>
                    <div class="block_text">
                        <p class="block_text__item">Образовательный портал &laquo;<a class="text-link" href="http://geekbrains.ru">GeekBrains</a>&raquo;, стажировка.</p>
                        <p class="block_text__item">Product owner, team leader, дизайнер и верстальщик.</p>
                        <p class="block_text__item">В рамках курса придумал проект, который разработали совсемтно с командой (другие студенты). Проект &#151; генератор случайных вариантов из различных категорий &#151; Randomizer (<a class="text-link" href="http://randomizer.me"
                                target="_blanck">http://randomizer.me</a>).</p>
                        <p class="block_text__item">Генератор работает как SPA–приложение.</p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        сентябрь 2019 &#151; май 2020
                    </div>
                    <div class="block_text">
                        <p class="block_text__item">Образовательный портал &laquo;<a class="text-link" href="http://geekbrains.ru">GeekBrains</a>&raquo;.</p>
                        <p class="block_text__item">Обучение по професии frontend–разработчик.</p>
                        <p class="block_text__item">Основные курсы: html5/css3, javascript 1–й и 2–й уровени, reactjs.</p>
                        <a class="menu__item" id="cert" v-on:click="showmodal">Посмотреть сертификаты</a>.
                    </div>
                </section>`;

        vm.content_neit_grey = `<div id="neit">
                    <section class="block block_margin">
                        <div class="block_data text-additional">
                            март 2006 &#151; февраль 2019
                        </div>
                        <div class="block_text text-additional">
                            <p class="text-additional_desc">Опыт, не относящийся к ИТ.</p>
                            <p class="block_text__item">В это время был менеджером по продажам, коммерческим и исполнительным директором, руководителем филиала и тренером по ораторскому мастерству и публичным выступлениям.</p>
                        </div>
                        <div class="footnote">Посмотрите раздел &laquo;<a class="text-link" name="menu" data-menu="all" id="menu-all">Весь опыт</a>&raquo;. Там видно, почему я смогу работать практически в любой команде.</div>
                    </section></div>`;

        vm.content_it_p2 = `<section class="block block_margin">
                    <div class="block_data">
                        январь 2005 &#151; март 2006
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">ООО &laquo;Эксклюзивные решения&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Продукт:</span> ПО, информационные системы.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> менеджер по продвижению.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> проведение мероприятий по привлечению клиентов (выставки, рассылки, переговоры с ключевыми клиентами), разработка презентационных материалов в поддержку продуктов. Разработал сайт компании.
                        </p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        июнь 2001 &#151; декабрь 2004
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">МУ &laquo;Центр социальных выплат г. Тольятти&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Продукт:</span> городская информационная система.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> Главный специалист–технолог.</p>
                        <p class="block_text__item  text-margin__bottom_20"><span class="text_bold">Обязанности:</span> разработка технологических процессов для АРМ в ГИС &laquo;Народонаселение&raquo;, по принципу &laquo;единого социального окна&raquo;.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> ведущий специалист–программист.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> разработка АРМ для ГИС &laquo;Народонаселение&raquo;, создание сайта организации.</p>
                    </div>
                    <div class="footnote">
                        <p class="text-margin__bottom_20">Информационная система разрабатывалась как эксперимент. В результате появились МФЦ, а позже центры &laquo;Мои документы&raquo;</p>
                        <p>Стек: PL/SQL, СУБД Oracle.</p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        ноябрь 1999 &#151; апрель 2000
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">ЗАО ТК &laquo;АИС.Т&raquo;</span>.</p>
                        <p class="block_text__item"><span class="text_bold">Продукт:</span> Телефония, доступ в интернет.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> web–мастер.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> внесение изменений на сайт компании и внутренний портал.</p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                        июнь 1999 &#151; август 1999
                    </div>
                    <div class="block_text">
                        <p class="block_text__item"><span class="text_bold">НОУ &laquo;Тольяттинская академия управления&raquo; </span>(кафедра ИТ, оплачиваемая стажировка).</p>
                        <p class="block_text__item"><span class="text_bold">Продукт:</span> ИС для управленческой игры.</p>
                        <p class="block_text__item"><span class="text_bold">Должность:</span> программист.</p>
                        <p class="block_text__item"><span class="text_bold">Обязанности:</span> разработка рабочих мест администратора, игрока и главного менеджера.</p>
                    </div>
                </section>
                <section class="block block_margin">
                    <div class="block_data">
                    </div>
                </section>
                </div>`;
        vm.content_show = vm.content_it_p1 + vm.content_neit_grey + vm.content_it_p2;
        let timerId = setTimeout(this.showmodal, 1000);

    }

    menuClick() {
        let MENU = document.getElementById('app');

        MENU.addEventListener('click', (evt) => {
            let e = evt.target

            if (e.name === 'menu') {
                let menuItem = e.dataset.menu;

                if (menuItem === 'all') {
                    if (!vm.v_it) { getSkills('hard'); };
                    vm.v_it = false;
                    vm.v_neit = true;
                    vm.v_anyit = true;
                    vm.v_portfolio = false;
                    vm.v_charact = false;
                    vm.v_contact = false;
                    window.scrollTo(0, 900);

                    getSkills('soft');

                    vm.content_neit = `
                    <div class="neit"><section class="block block_margin">
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

                    vm.content_show = vm.content_it_p1 + vm.content_neit + vm.content_it_p2;
                    this.timerId = setTimeout(this.showmodal, 1000);

                } else if (menuItem === 'charact') {
                    vm.v_it = false;
                    vm.v_neit = false;
                    vm.v_anyit = false;
                    vm.v_portfolio = false;
                    vm.v_charact = true;
                    vm.v_contact = false;
                    window.scrollTo(0, 400);

                    vm.content_charact = `
                    <div class="container_center portfolio_bottom charact-text">
                        <p class="charact_text_title">
                            Родился в Тольятти
                        </p>
                        <p class="charact_text_item">
                            Родился и вырос в Тольятти (Самарская область). Жил там до 35 лет.
                            С 9 лет рос без отца (погиб в автокатастрофе).portfolio_text_item
                        </p>
                        <p class="charact_text_title">
                            Пел в опере &laquo;Снегурочка&raquo;
                        </p>
                        <p class="charact_text_item">
                            Параллельно образовательной ходил в музыкальную школу по классу &laquo;фортепиано&raquo;. Обе школы закончил без троек.
                        </p>
                        <p class="charact_text_item">
                            В последний год занятия хором, участвовал в постановке оперы &laquo;Снегурочка&raquo;, играл роль Деда Мороза (один из главных персонажей).
                        </p>
                        <p class="charact_text_title">
                            Печатаю 10–ю пальцами и слепым методом
                        </p>
                        <p class="charact_text_item">
                            На первом курсе Академии у нас была очень сильная подготовка по работе с MS Office. Мы изучали все программы, входящие в пакет. У нас были зачёты и контрольные мероприятия.
                        </p>
                        <p class="charact_text_item">
                            Это сейчас звучит дико, но мои одноклассники, поступившие в другие ВУЗы, сдавали часть работ от руки. У нас же, любые работы нужно было сдавать в печатном виде. Так я и научился быстро печатать, десятью пальцами. А потом ещё и &laquo;слепым&raquo; методом.
                        </p>
                        <p class="charact_text_title">
                            Web–мастер на 2–м курсе
                        </p>
                        <p class="charact_text_item">
                            Работать начал на втором курсе, это была вечерняя работа на полставки. После третьего курса я уже работал полноценный рабочий день. Система обучения в Академии была построена таким образом, что вторую половину обучения мы уже полноценно работали, а с 19 часов учились.
                        </p>
                        <p class="charact_text_item">
                            Дипломную работу писал по своим рабочим задачам. Тема моего диплома: &laquo;Внедрение информационной системы назначения городского социального пособия и субсидий на оплату жилья и коммунальных услуг по принципу &laquo;единого социального окна&raquo;.
                        </p>
                        <p class="charact_text_title">
                            Тренер по ораторскому мастерству и публичным выступлениям
                        </p>
                        <p class="charact_text_item">
                            В 2014 году стал тренером–лицензиатом Университета риторики и ораторского мастерства (г.Москва). Провёл свой первый тренинг за деньги.
                        </p>
                        <p class="charact_text_item">
                            Стал &laquo;штатным&raquo; спикером конференций журнала &laquo;Генеральный директор&raquo;. Мой личный рекорд аудитории: 500+ человек.
                        </p>
                        <p class="charact_text_title">
                            20 км за 2 часа
                        </p>
                        <p class="charact_text_item">
                            В рамках подготовки к марафону пробежал 20 км за 2 часа. В марафоне не участвовал из–за травмы.
                        </p>
                        <p class="charact_text_title">
                            Книги, кино и музыка
                        </p>
                        <p class="charact_text_item">
                            Люблю читать книги, в основном деловую литератур и на развитие личности. В 2013 году прочитал и прослушал 53 книги.
                        </p>
                        <p class="charact_text_item">
                            Очень люблю смотреть кино. Самый любимый жанр &#151; фильмы с неожиданным финалом. Сериалы люблю и &laquo;ненавижу&raquo; одновременно. Если очень интересно, то могу смотреть сразу много серий.
                        </p>
                        <p class="charact_text_item">
                            Музыку слушаю постоянно. В конце месяца составляю плейл–лист песен, которые были интересны в уходящем месяце. Делюсь ссылками в соцсетях и своём канале.
                        </p>
                        <p class="charact_text_title">
                            Баскетбол
                        </p>
                        <p class="charact_text_item">
                            Со второго класса безоговорочно люблю баскетбол. Играл за школу в городском турнире.
                        </p>
                        <p class="charact_text_title">
                            Верю и доверяю людям
                        </p>
                        <p class="charact_text_item">
                            Доверяю и верю человеку, пока он не убедит меня в обратном. Достаточно терпелив и с понимание отношусь к поступкам и поведению людей. Часто могу понять причинно–следственные связи в поступках.
                        </p>
                        <p class="charact_text_title">
                            Жена, дети
                        </p>
                        <p class="charact_text_item">
                            Женат. Воспитываю двоих детей: 9 лет и 2 года.
                        </p>
                    </div>`;

                    vm.content_show = vm.content_charact;

                } else if (menuItem === 'contact') {
                    vm.v_it = false;
                    vm.v_neit = false;
                    vm.v_anyit = false;
                    vm.v_portfolio = false;
                    vm.v_charact = false;
                    vm.v_contact = true;
                    window.scrollTo(0, 400);

                    vm.content_contact = `
                    <div class="container_center portfolio_bottom charact-text">
                        <p class="charact_text_title">
                            Телефон
                        </p>
                        <p class="charact_text_item">
                            <a href="tel:+79817106380">8 981 710–63–80</a>
                        </p>
                        <p class="charact_text_title">
                            Почта
                        </p>
                        <p class="charact_text_item">
                            <a href="mailto:tolkoxa@ya.ru">tolkoxa@ya.ru</a>
                        </p>
                        <p class="charact_text_title">
                            Телеграм
                        </p>
                        <p class="charact_text_item">
                            <a href="http://t.me/pitchtrener">@pitchtrener</a>
                        </p>
                        <p class="charact_text_title">
                            Github
                        </p>
                        <p class="charact_text_item">
                            <a href="https://github.com/tolkoxa">https://github.com/tolkoxa</a>
                        </p>
                        <p class="charact_text_title">
                            Соцсети
                        </p>
                        <p class="charact_text_item">
                            <a href="https://vk.com/pitchtrener">Вконтакте</a>
                        </p>
                        <p class="charact_text_item">
                            <a href="https://facebook.com/pitchtrener">Facebook</a>
                        </p>
                        <p class="charact_text_item">
                            <a href="https://instagram.com/pitchtrener">Инстаграм</a>
                        </p>
                        <p class="charact_text_item">
                            <a href="https://twitter.com/pitchtrener">Twitter</a>
                        </p>
                        <p class="charact_text_item">
                            <a href="https://t.me/tolkoxa">Телеграм–канал</a>
                        </p>
                    </div>
                    `;

                    vm.content_show = vm.content_contact;

                } else if (menuItem === 'it') {
                    window.scrollTo(0, 400);
                    if (!vm.v_anyit) { getSkills('hard'); };
                    vm.v_it = true;
                    vm.v_neit = false;
                    vm.v_anyit = true;
                    vm.v_portfolio = false;
                    vm.v_charact = false;
                    vm.v_contact = false;

                    vm.content_show = vm.content_it_p1 + vm.content_neit_grey + vm.content_it_p2;
                    this.timerId = setTimeout(this.showmodal, 1000);


                } else if (menuItem === 'portfolio') {
                    vm.v_it = false;
                    vm.v_neit = false;
                    vm.v_anyit = false;
                    vm.v_portfolio = true;
                    vm.v_charact = false;
                    vm.v_contact = false;
                    vm.content_show = '';
                    window.scrollTo(0, 400);

                    vm.content_portfolio = `
                        <div class="portfolio-all" id="portfolio-all">
                            <div class="container_corrector container_portfolio">
                                <h1 class="h1–corrector">
                                    <div>«ко</div>
                                    <div class="flip">[р</div><span class="up-item">Р]</span>
                                    <div>ектор»</div>
                                </h1>
                            </div>
                            <div class="container_center portfolio_bottom">
                                <div class="portfolio__desc">
                                    <div class="portfolio_text">
                                    <p class="portfolio_text_item">«Корректор» &#151; приложение, которое убирает мелкий «мусор» в тексте. Хорошо подходит для постов в соцсетях.</p></div>
                                    <div class="portfolio_info">
                                        <p class="text-margin__bottom_20">Используются регулярные выражения.</p>
                                        <p class="info_link">
                                            <a href="http://corrector.tolkoxa.ru">http://corrector.tolkoxa.ru</a>
                                        </p>
                                        <p>Код на <a class="info_link" href="https://github.com/tolkoxa/corrector"> github.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="container_portfolio container_bullsandcows">
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
                            <div class="container_center portfolio_bottom">
                                <div class="portfolio__desc">
                                    <div class="portfolio_text">
                                    <p class="portfolio_text_item">Игра «Быки и коровы» – браузерная игра (SPA) на развитие логичного мышления, счёта и памяти.</p></div>
                                    <div class="portfolio_info">
                                        <p>Написана только на JS, без библиотек и фреймворков.</p>
                                        <p>Работает как SPA–приложение.</p>
                                        <p class="text-margin__bottom_20">Завершена только десктопная версия.</p>
                                        <p class="info_link" ><a href="http://games.tolkoxa.ru/bullsandcows">http://games.tolkoxa.ru/bullsandcows</a></p>
                                        <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/bullsandcows"> github.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="container_portfolio container_answers">
                                <p class="text__title">Музыкальные ответы</p>
                            </div>
                                <div class="container_center portfolio_bottom">
                                    <div class="portfolio__desc">
                                        <div class="portfolio_text">
                                        <p class="portfolio_text_item">Музыкальные ответы на часто задаваемый вопрос &laquo;Когда?&raquo; и на просьбу, от неприятного человека.</p>
                                    </div>
                                    <div class="portfolio_info">
                                        <p class="info_link"><a href="http://answer.tolkoxa.ru">http://answer.tolkoxa.ru</a></p>    
                                        <p>Ответ на неприятную просьбу</p>
                                        <p class="info_link"><a href="http://answer.tolkoxa.ru/what">http://answer.tolkoxa.ru/what</a></p>
                                        <p>Ответ на вопрос &laquo;Когда?&raquo;</p>
                                        <p class="info_link"><a href="http://answer.tolkoxa.ru/when">http://answer.tolkoxa.ru/when</a></p>
                                        <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/answer"> github.com</a></p>
                                    </div>    
                                </div>
                            </div>
                            <div class="container_portfolio">
                                <div class="top-logo">
                                    <span class="logo-text">Да</span>
                                    <span class="logo-line">/</span>
                                    <span class="logo-text">Нет</span>
                                </div>
                            </div>
                            <div class="container_center portfolio_bottom">
                                <div class="portfolio__desc">
                                    <div class="portfolio_text">
                                    <p class="portfolio_text_item">Задай вопрос &laquo;вселенной&raquo; и получи ответ. Задай вопрос на который можно ответить только «да» или «нет».</p>
                                    </div>
                                    <div class="portfolio_info">
                                        <p>Используется Vue (локально).</p>
                                        <p class="info_link"><a href="http://danet.tolkoxa.ru">http://danet.tolkoxa.ru</a></p>
                                        <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/danet"> github.com</a></p>
                                    </div>    
                                </div>
                            </div>    
                            <div class="container_portfolio container_cv">
                                <p class="main-header-logo-name">Небольшие задачи на JS</p>
                            </div>
                            <div class="container_center portfolio_bottom">
                                <div class="portfolio__desc">
                                    <div class="portfolio_text">
                                    <p class="portfolio_text_item">Как–то преподаватель нас &laquo;озадачил&raquo; тем, что мало кто задумывался и писал код на решение встроенных математических операций.  Например умножение или возведение в степень.</p>
                                    <p class="portfolio_text_item">Я решил сделать такой раздел. В начале написал код простых операций, потом поиск простых чисел.</p>
                                    <p class="portfolio_text_item">Раздел будет пополняться в будущем.</p>
                                    </div>
                                    <div class="portfolio_info">
                                        <p>Чистый JS</p>
                                        <p class="info_link"><a href="http://js-tasks.tolkoxa.ru/">http://js-tasks.tolkoxa.ru/</a></p>
                                        <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/JS-Tasks"> github.com</a></p>
                                    </div>    
                                </div>
                            </div>
                            <div class="container_portfolio container_randomizer">
                                    <p class="main-header-logo-name">RANDOMIZER</p>
                                    <p class="main-header-logo-desc">СЛУЧАЙНОСТИ НЕ СЛУЧАЙНЫ</p>
                            </div>
                                <div class="container_center portfolio_bottom">
                                    <div class="portfolio__desc">
                                        <div class="portfolio_text">
                                        <p class="portfolio_text_item">Генератор случайностей из различных категорий: от фильмов до поздравлений.</p>
                                        <p class="portfolio_text_item">И конечно же, генератор случайных чисел.</p>
                                    </div>
                                    <div class="portfolio_info">
                                        <p>Проект «Randomizer» выполнен в рамках обучения</p>
                                        <p>в GeekBrains (стажировка). Сайт работает в формате SPA.</p>
                                        <p>Завершена только десктопная версия.</p>
                                        <p class="text-margin__bottom_20">Разработан на php, js и mysql.</p>
                                        <p class="info_link" ><a href="http://randomizer.me">http://randomizer.me</a></p>
                                        <p>Код на <a  class="info_link" href="https://github.com/tolkoxa/randomizer"> github.com</a></p>
                                    </div>    
                                </div>
                            </div>
                        </div>`;
                    vm.content_show = vm.content_portfolio;
                }
            }
        })
    }

    showmodal() {
        console.log('modal');
        document.getElementById('cert').addEventListener('click', () => {
            console.log('click--');
            let overLay = document.getElementById('overlay');
            let modalWin = document.getElementById('modal-window');

            let certArrAll = [{
                    id: '2116749_652449',
                    text: 'Курс: «HTML/CSS. Интерактивный курс»',
                    date: '30.09.2019',
                    number: '0652449'
                },
                {
                    id: '2116749_669069',
                    text: 'Курс: «HTML5 и CSS3»',
                    date: '09.11.2019',
                    number: '0669069'
                },
                {
                    id: '2116749_693465',
                    text: 'Курс: «JavaScript. Уровень 1»',
                    date: '15.12.2019',
                    number: '0693465'
                },
                {
                    id: '2116749_724925',
                    text: 'Курс: «Стажировка GeekBrains (web)»',
                    date: '23.02.2020',
                    number: '0724925'
                },
                {
                    id: '2116749_734529',
                    text: 'Курс: «JavaScript. Уровень 2»',
                    date: '13.03.2020',
                    number: '0734529'
                },
                {
                    id: '2116749_874823',
                    text: 'Курс: «React JS»',
                    date: '07.06.2020',
                    number: '0874823'
                },
            ];

            let str = `<a class="close-modal" id="close-modal">╳</a>`;
            certArrAll.forEach((elem) => {
                str = str + `<img src="img/cert/${elem.id}.jpg" width="auto" height="auto" alt="${elem.text}"><p class="label-text">${elem.text}, ${elem.date}</p><p class="label-text__margin-last">№${elem.number}</p>`;
            });

            console.log(certArrAll);

            overLay.classList.remove('invisible-block');
            modalWin.classList.remove('invisible-block');
            document.querySelector('#modal-window').insertAdjacentHTML("beforeend", str);

            document.getElementById('close-modal').addEventListener('click', () => {
                forhr.closeModal();
            });

            document.getElementById('overlay').addEventListener('click', () => {
                forhr.closeModal();
            });
        });
    }
    closeModal() {
        document.getElementById('overlay').classList.add('invisible-block');
        document.getElementById('modal-window').classList.add('invisible-block');
        document.querySelector('#modal-window').innerHTML = '';
        clearTimeout(this.timerId);
    }
}

let forhr = new cvMain();
window.onload = function() {
    getSkills('hard');
};