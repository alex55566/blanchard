let burger = document.querySelector('#burger')

burger.addEventListener('click', function () {
    let menu = document.querySelector('#menuhead')
    let check = document.querySelector('.opacity-menu')
    if (check === null) {
        menu.classList.toggle('is-active')
        burger.classList.toggle('open-menu')
        burger.classList.toggle('burgeranim')
        setTimeout(function () {
            menu.classList.toggle('opacity-menu')

        }, 100)
    } else {
        menu.classList.toggle('opacity-menu')

        burger.classList.toggle('open-menu')
        burger.classList.toggle('burgeranim')
        setTimeout(function () {
            menu.classList.toggle('is-active')
        }, 500)
    }
})

function showHideFind() {
    let btnfind = document.querySelector('.bottom-search__button')
    let btnsecond = document.querySelector('.search-second-btn')
    let burger = document.querySelector('.menu-burger-header')
    let logo = document.querySelector('.section-header__logo')
    let input = document.querySelector('.bottom-search__input')
    btnfind.addEventListener('click', (e) => {
        e.preventDefault()
        btnfind.classList.toggle('find-menu')
        input.classList.toggle('input-active')
        btnsecond.classList.toggle('btn-active')
        input.focus()
        burger.classList.toggle('displayheader768')
        logo.classList.toggle('displayheader768')
    })
    btnsecond.addEventListener('click', (e) => {
        e.preventDefault()
        btnfind.classList.toggle('find-menu')
        input.classList.toggle('input-active')
        btnsecond.classList.toggle('btn-active')
        burger.classList.toggle('displayheader768')
        logo.classList.toggle('displayheader768')
    })
}
showHideFind()


function windowSizeCard() {
    let cards = document.querySelectorAll('.event-info')
    let check = document.querySelectorAll('.hide-card')
    let btn = document.querySelector('.show-hide-events')

    if ($(window).width() <= '4200' && $(window).width() > '885') {
        cards.forEach((card) => card.classList.remove('cards-show320'))
        btn.classList.remove('btn-show320')
        cards[2].classList.remove('event-info-hide')
        cards[2].classList.remove('event-opacity')
        cards[2].classList.remove('hide-card')
        cards[2].classList.remove('opacity-card')
    } else if ($(window).width() <= '885' && $(window).width() > '650') {
        cards.forEach((card) => card.classList.remove('cards-show320'))
        btn.classList.remove('btn-show320')
        if (check.length != 0) {
            cards[2].classList.add('hide-card')
            cards[2].classList.add('opacity-card')
        }
        cards[2].classList.add('event-info-hide')
        cards[2].classList.add('event-opacity')
    } else if ($(window).width() <= '650') {
        cards.forEach((card) => card.classList.add('cards-show320'))
        btn.classList.add('btn-show320')

    } else {
        // экран больше 600 px в ширниу
    }
}
$(window).load(windowSizeCard);
$(window).resize(windowSizeCard);
$(window).on('load resize', windowSizeCard);




const slider = document.querySelector('.events-swiper-container');
const inner = document.querySelector('.cards-event');
const cards = document.querySelectorAll('.event-info')
let mySwiper2;

function mobileSlider() {
    if ($(window).width() <= 650 && slider.dataset.mobile == 'false') {
        inner.classList.add('swiper-wrapper')
        mySwiper2 = new Swiper(slider, {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 10,
            slideClass: 'event-info',
            pagination: {
                el: '.events-swiper-pagination',
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true';
    }
    if ($(window).width() > 650) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-initialized')) {
            mySwiper2.pagination.destroy();
            mySwiper2.destroy();
            inner.classList.remove('swiper-wrapper')
            inner.removeAttribute("aria-live");
            inner.removeAttribute("id");
            cards[1].classList.remove('event-info-hide')
            cards[1].classList.remove('event-opacity')
            cards[1].classList.remove('hide-card')
            cards[1].classList.remove('opacity-card')
            cards.forEach((el) => {
                el.classList.remove("swiper-slide");
                el.classList.remove("swiper-slide-duplicate-prev");
                el.classList.remove("swiper-slide-duplicate-active");
                el.classList.remove("swiper-slide-duplicate-next");
                el.removeAttribute("role");
                el.removeAttribute("aria-label");
            })
        }
    }
}
mobileSlider()
window.addEventListener('resize', () => {
    mobileSlider();
});



function CardMobile2() {

    let editionSwiper
    const editionslider = document.querySelector('.swiper-edition');

    function dekstopSlider() {
        if ($(window).width() <= 650) {
            editionslider.dataset.mobile = 'false';
            if (editionslider.classList.contains('swiper-initialized')) {
                editionSwiper.pagination.destroy();
                editionSwiper.destroy();
            }
        }
        if ($(window).width() > 650 && editionslider.dataset.mobile == 'false') {
            editionslider.dataset.mobile = 'true';
            editionSwiper = new Swiper(".swiper-edition", {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                slideClass: 'edition-book',
                pagination: {
                    el: ".swiper-pagination-edition",
                    type: "fraction"
                },
                navigation: {
                    nextEl: ".edition-btn-next",
                    prevEl: ".edition-btn-prev"
                },
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 34,
                    },
                    885: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 49,
                    },
                    1400: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 50,
                    }
                },
            });
        }
    }
    dekstopSlider()
    window.addEventListener('resize', () => {
        dekstopSlider()
    });
}
CardMobile2()


function windowSizeTab() {
    let btn = document.querySelector('.bottom-search__button')
    if ($(window).width() <= '4200' && $(window).width() > '1300') {
        btn.tabIndex = '-1'
    } else if ($(window).width() <= '1300' && $(window).width() > '1') {
        btn.tabIndex = '0'
    }
}
$(window).load(windowSizeTab);
$(window).resize(windowSizeTab);
$(window).on('load resize', windowSizeTab);


let heroSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: 'fade',
    resizeObserver: true,
    speed: 5000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        //   dynamicBullets: true,
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
});


let gallerySlider = new Swiper(".swiper-right-content", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 2
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination-right",
        type: "progressbar",
        clickable: true,
    },
    navigation: {
        nextEl: ".gallery-btn-next",
        prevEl: ".gallery-btn-prev"
    },

    breakpoints: {
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: {
                rows: 1
            },
            spaceBetween: 34,
        },
        651: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 2
            },
            spaceBetween: 30,
        },
        1301: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 2
            },
            spaceBetween: 50,
        }
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'slide-visible',

    on: {
        init: function () {
            this.slides.forEach(slide => {
                if (!slide.classList.contains('slide-visible')) {
                    slide.tabIndex = '-1';
                } else {
                    slide.tabIndex = '';
                }
            });
        },
        slideChange: function () {
            this.slides.forEach(slide => {
                if (!slide.classList.contains('slide-visible')) {
                    slide.tabIndex = '-1';
                } else {
                    slide.tabIndex = '';
                }
            });
        }
    }

});



let projectsSwiper = new Swiper(".swiper-projects", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: ".projects-btn-next",
        prevEl: ".projects-btn-prev"
    },
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        530: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        885: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
        1350: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        }
    }
});


document.querySelectorAll('.inside-menu-wrap').forEach(el => {
    new SimpleBar(el, {
        scrollbarMaxSize: 28
    });
});


const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
});


window.addEventListener('DOMContentLoaded', function () {

    function openMenu() {

        let openMenu

        let parentArrow
        let childArrow

        const buttonItems = document.querySelectorAll('.bottom-container-item');


        buttonItems.forEach((buttonItem) => buttonItem.addEventListener('click', (e) => {
            e.preventDefault();


            if (!e.target.matches('.inside-menu')) {

                let check = document.querySelector('.is-active')

                let closeMenu = document.querySelector('.is-closed')
                let closeMenufinal = document.querySelector('.is-closedfinal')


                if (check == null) {

                    openMenu = buttonItem.querySelector('.inside-menu');

                    openMenu.classList.remove('is-closed')
                    openMenu.classList.remove('is-closedfinal')
                    if (closeMenu != null) {
                        closeMenu.classList.remove('is-closed')
                        closeMenufinal.classList.remove('is-closedfinal')
                    }


                    openMenu.classList.toggle('is-active')
                    parentArrow = openMenu.parentNode
                    childArrow = parentArrow.querySelector('.bottom-container-link')
                    childArrow.classList.toggle('active-arrow')

                    let parent = document.getElementsByClassName('inside-menu is-active')[0]

                    let el = SimpleBar.instances.get(parent.getElementsByClassName('inside-menu-wrap')[0]);
                    let scroll = el.getScrollElement();
                    scroll.scrollTop = 0;


                } else {

                    if (check == buttonItem.querySelector('.inside-menu')) {

                        openMenu = buttonItem.querySelector('.inside-menu');

                        openMenu.classList.toggle('is-closed')
                        openMenu.classList.toggle('is-active')
                        setTimeout(() => {
                            openMenu.classList.toggle('is-closedfinal')
                        }, 300)

                        parentArrow = openMenu.parentNode
                        childArrow = parentArrow.querySelector('.bottom-container-link')
                        childArrow.classList.toggle('active-arrow')

                    } else {

                        let active = document.querySelectorAll('.is-active')

                        let closed = document.querySelectorAll('.is-closed')

                        let closedfinal = document.querySelectorAll('.is-closedfinal')

                        let activeArrow = document.querySelectorAll('.active-arrow')


                        for (let i = 0; i < active.length; ++i) {
                            active[i].classList.remove('is-active')
                            active[i].classList.add('is-closed')
                            setTimeout(() => {
                                active[i].classList.add('is-closedfinal')
                            }, 300)
                            activeArrow[i].classList.remove('active-arrow')
                            openMenu = buttonItem.querySelector('.inside-menu')
                            openMenu.classList.toggle('is-active')
                            setTimeout(() => {
                                active[i].classList.remove('is-closed')
                                active[i].classList.remove('is-closedfinal')
                            }, 500)




                            parentArrow = openMenu.parentNode
                            childArrow = parentArrow.querySelector('.bottom-container-link')
                            childArrow.classList.toggle('active-arrow')



                            let parent = document.getElementsByClassName('inside-menu is-active')[0]

                            let el = SimpleBar.instances.get(parent.getElementsByClassName('inside-menu-wrap')[0]);
                            let scroll = el.getScrollElement();
                            scroll.scrollTop = 0;

                        }
                    }
                }
            }
        }))

        window.addEventListener('click', e => {
            const target = e.target
            if (typeof openMenu === "object") {

                if (!target.closest('.bottom-container-item') && !target.closest('.insidecheck')) {

                    openMenu.classList.remove('is-active')
                    openMenu.classList.add('is-closed')
                    setTimeout(() => {
                        openMenu.classList.add('is-closedfinal')
                    }, 300)
                    childArrow.classList.remove('active-arrow')
                }
            }
        })

    }

    openMenu()

    function openEdition() {
        let hideDesign = document.querySelector('.design320')
        let hideDesigncheck = document.querySelector('.designchecking320')
        let check

        hideDesign.addEventListener('click', (e) => {
            e.preventDefault()
            if (hideDesigncheck.classList.contains('recheck')) {
                hideDesigncheck.checked = true
                hideDesigncheck.classList.toggle('recheck')
            } else {
                hideDesigncheck.checked = false
                hideDesigncheck.classList.toggle('recheck')
            }
        })


        hideDesign.addEventListener('click', (e) => {
            e.preventDefault()
            check = document.querySelector('.is-active320')
            if (check == null) {
                hideDesign.classList.add('is-closed-design320')
                hideDesign.classList.toggle('toggle-design320')
            } else {
                hideDesign.classList.toggle('toggle-design320')
            }
        })

        let btn = document.querySelector('.checkbox-edition')
        let hideEditions = document.querySelectorAll('.hide320')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            check = document.querySelector('.is-active320')
            if (check == null) {
                btn.classList.toggle('active-arrow320')
                hideEditions.forEach((hideEdition) => hideEdition.classList.remove('is-closedfinal320'))
                hideEditions.forEach((hideEdition) => hideEdition.classList.remove('is-closed320'))
                hideEditions.forEach((hideEdition) => hideEdition.classList.add('is-active320'))
                hideDesign.classList.remove('is-closed-design320')
            } else {
                btn.classList.toggle('active-arrow320')
                hideEditions.forEach((hideEdition) => hideEdition.classList.remove('is-active320'))
                hideEditions.forEach((hideEdition) => hideEdition.classList.add('is-closed320'))
                setTimeout(() => {
                    hideEditions.forEach((hideEdition) => hideEdition.classList.add('is-closedfinal320'))
                }, 300)
                if (hideDesign.classList.contains('toggle-design320')) {
                    hideDesign.classList.add('is-closed-design320')
                }
            }
        })
    }
    openEdition()


    function popup() {
        const popupLinks = document.querySelectorAll('.popup-link');
        const body = document.querySelector('body');


        let unlock = true;

        const timeout = 800;

        if (popupLinks.length > 0) {
            for (let i = 0; i < popupLinks.length; ++i) {
                const popupLink = popupLinks[i];
                popupLink.addEventListener('click', function (e) {
                    const popupName = popupLink.id
                    const popupIdentif = String(popupName)
                    const curentPopup = document.querySelector(`.${popupIdentif}`);
                    popupOpen(curentPopup);
                    e.preventDefault();
                });
            }
        }

        const popupCloseIcon = document.querySelectorAll('.close-popup');

        if (popupCloseIcon.length > 0) {
            for (let i = 0; i < popupCloseIcon.length; ++i) {
                const el = popupCloseIcon[i];
                el.addEventListener('click', function (e) {
                    popupClose(el.closest('.popup'));
                    e.preventDefault();
                });
            }
        }

        function popupOpen(curentPopup) {
            if (curentPopup && unlock) {
                bodyLock()
                curentPopup.classList.add('open');
                curentPopup.addEventListener('click', function (e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'))

                    }
                })
            }
        }


        function bodyLock() {
            const lockPaddingValue = window.innerWidth - document.querySelector('.section-gallery').offsetWidth + 'px';

            body.style.paddingRight = lockPaddingValue
            console.log(lockPaddingValue)
            console.log(window.innerWidth)
            console.log(document.querySelector('.section-gallery').offsetWidth)
            body.classList.add('lock')

            unlock = false
            setTimeout(() => {
                unlock = true
            }, timeout)
        }


        function popupClose(popupActive) {
            popupActive.classList.remove('open')
            bodyUnlock();
        }

        function bodyUnlock() {
            setTimeout(function () {
                body.style.paddingRight = '0px';
                body.classList.remove('lock');

            }, timeout);

            unlock = false
            setTimeout(() => {
                unlock = true
            }, timeout)
        }




        document.addEventListener('keydown', function (e) {
            let check = document.querySelector('.popup.open')
            if (e.which === 27 && check != null) {
                const popupActive = document.querySelector('.popup.open')
                popupClose(popupActive)

            }
        })
    }
    popup()




    function accordeon() {



        $('.accordion').accordion({
            header: '.interval-accordion-header',
            heightStyle: 'content'
        });


        $(function () {
            $(".accordion").accordion({

                // сворачивает
                collapsible: true,
                icons: false,
                heightStyle: 'content'

                // активный слайд
                // active: false,
            });
        });
    };



    accordeon()

    $('.interval-accordion-header').addClass('interval-accordion-header-new')



    function allTabs() {

        let page


        function insideTabs() {
            document.querySelectorAll('.interval-accordion-but').forEach(function (tabsBtn) {
                tabsBtn.addEventListener('click', function (e) {
                    const path = e.currentTarget.dataset.path


                    if (typeof page == 'undefined') {

                        let itemsGroup = document.querySelector('[data-target="one"]')
                        let itemsPage = itemsGroup.querySelectorAll('.inside-tabcontent')
                        let itemClass = itemsGroup.querySelectorAll('.interval-accordion-but')

                        itemsPage.forEach(function (allPainter) {
                            allPainter.classList.remove('inside-tabcontent-active')
                        })
                        document.querySelector(`[data-target="${path}"]`).classList.add('inside-tabcontent-active')

                        itemClass.forEach(function (painterBut) {
                            painterBut.classList.remove('active-name')
                        })

                    } else {


                        let itemsGroup = document.querySelector(`[data-target="${page}"]`)
                        let itemsPage = itemsGroup.querySelectorAll('.inside-tabcontent')
                        let itemClass = itemsGroup.querySelectorAll('.interval-accordion-but')

                        itemsPage.forEach(function (allPainter) {
                            allPainter.classList.remove('inside-tabcontent-active')
                        })
                        document.querySelector(`[data-target="${path}"]`).classList.add('inside-tabcontent-active')

                        itemClass.forEach(function (painterBut) {
                            painterBut.classList.remove('active-name')
                        })
                    }
                    const activeBut = e.target.closest('.interval-accordion-but');
                    if (activeBut) {
                        activeBut.classList.add('active-name');

                    }
                })
            })
        }
        insideTabs()



        function outsideTabs() {
            document.querySelectorAll('.catalog-tabs-btn').forEach(function (tabsBtn) {
                tabsBtn.addEventListener('click', function (e) {
                    const path = e.currentTarget.dataset.path
                    page = e.currentTarget.dataset.path


                    document.querySelectorAll('.outside-tabcontent').forEach(function (allPainter) {
                        allPainter.classList.remove('outside-tabcontent-active')

                    })
                    document.querySelector(`[data-target="${path}"]`).classList.add('outside-tabcontent-active')

                    document.querySelectorAll('.catalog-tabs-btn').forEach(function (painterBut) {
                        painterBut.classList.remove('active-butt')
                    })
                    const activeBut = e.target.closest('.catalog-tabs-btn');
                    if (activeBut) {
                        activeBut.classList.add('active-butt');
                    }
                    $('.accordion').accordion("refresh");
                })
            })
        }
        outsideTabs()
    }
    allTabs()

    function showCards() {
        const btn = document.querySelector('.show-hide-events')
        btn.addEventListener('click', (e) => {
            e.preventDefault()

            let arrayCards = document.querySelectorAll('.event-info')
            let opacityCards = document.querySelectorAll('.event-opacity')
            let check = document.querySelectorAll('.opacity-card')

            if ($(window).width() > '885') {

                if (check.length === 0) {
                    arrayCards[3].classList.toggle('hide-card')
                    arrayCards[4].classList.toggle('hide-card')

                    setTimeout(function () {


                        opacityCards[0].classList.toggle('opacity-card')
                        opacityCards[1].classList.toggle('opacity-card')
                    }, 200)


                    btn.innerHTML =
                        (btn.innerHTML === 'Скрыть все') ? btn.innerHTML = 'Все события' : btn.innerHTML = 'Скрыть все';

                } else {
                    opacityCards[0].classList.toggle('opacity-card')
                    opacityCards[1].classList.toggle('opacity-card')


                    setTimeout(function () {

                        arrayCards[3].classList.toggle('hide-card')
                        arrayCards[4].classList.toggle('hide-card')

                        btn.innerHTML =
                            (btn.innerHTML === 'Скрыть все') ? btn.innerHTML = 'Все события' : btn.innerHTML = 'Скрыть все';
                    }, 300)
                }
            } else {
                if (check.length === 0) {

                    arrayCards[2].classList.toggle('hide-card')
                    arrayCards[3].classList.toggle('hide-card')
                    arrayCards[4].classList.toggle('hide-card')

                    setTimeout(function () {


                        opacityCards[0].classList.toggle('opacity-card')
                        opacityCards[1].classList.toggle('opacity-card')
                        opacityCards[2].classList.toggle('opacity-card')
                    }, 200)


                    btn.innerHTML =
                        (btn.innerHTML === 'Скрыть все') ? btn.innerHTML = 'Все события' : btn.innerHTML = 'Скрыть все';

                } else {
                    opacityCards[0].classList.toggle('opacity-card')
                    opacityCards[1].classList.toggle('opacity-card')
                    opacityCards[2].classList.toggle('opacity-card')


                    setTimeout(function () {

                        arrayCards[2].classList.toggle('hide-card')
                        arrayCards[3].classList.toggle('hide-card')
                        arrayCards[4].classList.toggle('hide-card')

                        btn.innerHTML =
                            (btn.innerHTML === 'Скрыть все') ? btn.innerHTML = 'Все события' : btn.innerHTML = 'Скрыть все';
                    }, 300)
                }
            }
        })
    }
    showCards()

    tippy('.js-tultip', {
        delay: [300, 300],
        maxWidth: 264,
        theme: 'tippy',
    });

    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.759, 37.60],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        }, {
            geolocationControlFloat: 'right',
        });
        // Создание геообъекта с типом точка (метка).
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('zoomControl');



        var myPlacemark = new ymaps.Placemark([55.75788183464083, 37.60038342079201], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/яндекс-карта/метка.svg',
            iconImageSize: [20, 20],

            // control.SearchControl.

        });

        myMap.controls.add('zoomControl', {
            size: 'small',
            float: 'none',
            position: {
                right: '10px'
            }
        });



        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
    }

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    new JustValidate('.form', {
        colorWrong: '#D11616',
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            },
        },
        messages: {
            name: {
                required: 'Как вас зовут?',
                minLength: 'Введите верное имя',
                maxLength: 'Введите верное имя'
            },
            tel: {
                required: 'Укажите ваш телефон',
                function: 'Введите верный формат телефона'
            },
        },
        submitHandler: function (form) {
            let formData = new FormData(form); //объект, куда попадают все данные из формы

            let xhr = new XMLHttpRequest(); //запрос, аналог ajax


            xhr.onreadystatechange = function () { //проверка статуса отправки
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true); //будем отправлять запрос на mail.php методом POST
            xhr.send(formData); //передаем данные с формы 

            form.reset(); //сброс формы после отправки
        }

    });

})