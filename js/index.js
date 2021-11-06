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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
});



let gallerySwiper = new Swiper(".swiper-right--content", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 2
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination--right",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-btn--next",
        prevEl: ".swiper-btn--prev"
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
                rows: 1
            },
            spaceBetween: 0
        },
        576: {
            slidesPerView: 2,
            grid: {
                rows: 2
            },
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 3,
            grid: {
                rows: 2
            },
            spaceBetween: 50
        }
    },

    // a11y: {
    //     prevSlideMessage: 'Предыдущий',
    //     nextSlideMessage: 'Следующий',
    // }

});


let editionSwiper = new Swiper(".swiper-edition", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination--right",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-btn--next",
        prevEl: ".swiper-btn--prev"
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

});


let projectsSwiper = new Swiper(".swiper-projects", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination--right",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-btn--next",
        prevEl: ".swiper-btn--prev"
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

});


document.querySelectorAll('.inside-menu__inside').forEach(el => {
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




window.addEventListener('DOMContentLoaded', function() {

    function openMenu() {

        let openMenu
        let parentArrow
        let childArrow

        const buttonItems = document.querySelectorAll('.section-navigation__item');

        buttonItems.forEach((buttonItem) => buttonItem.addEventListener('click', (e) => {
            e.preventDefault();

            // console.log(buttonItem.querySelector('.inside-menu__inside'))
            let check = document.querySelector('.is-active')
                // console.log(check)

            if (check == null) {

                openMenu = buttonItem.querySelector('.inside-menu__inside');
                // console.log(openMenu)
                // console.log(typeof openMenu)
                openMenu.classList.toggle('is-active')
                parentArrow = openMenu.parentNode
                childArrow = parentArrow.querySelector('.section-navigation__link')
                childArrow.classList.toggle('active-arrow')

                let el = SimpleBar.instances.get(document.getElementsByClassName('inside-menu__inside is-active')[0]);
                let scroll = el.getScrollElement();
                scroll.scrollTop = 0;


            } else {

                if (check == buttonItem.querySelector('.inside-menu__inside')) {

                    openMenu = buttonItem.querySelector('.inside-menu__inside');
                    // console.log(openMenu)
                    openMenu.classList.toggle('is-active')
                    parentArrow = openMenu.parentNode
                    childArrow = parentArrow.querySelector('.section-navigation__link')
                    childArrow.classList.toggle('active-arrow')

                } else {

                    let active = document.querySelectorAll('.is-active')
                    let activeArrow = document.querySelectorAll('.active-arrow')

                    for (let i = 0; i < active.length; ++i) {
                        active[i].classList.remove('is-active')
                        activeArrow[i].classList.remove('active-arrow')
                        openMenu = buttonItem.querySelector('.inside-menu__inside')
                        openMenu.classList.toggle('is-active')

                        parentArrow = openMenu.parentNode
                        childArrow = parentArrow.querySelector('.section-navigation__link')
                        childArrow.classList.toggle('active-arrow')

                        let el = SimpleBar.instances.get(document.getElementsByClassName('inside-menu__inside is-active')[0]);
                        let scroll = el.getScrollElement();
                        scroll.scrollTop = 0;
                    }
                }

            }

        }))

        window.addEventListener('click', e => {
            const target = e.target
            if (typeof openMenu === "object") {

                if (!target.closest('.inside-menu__inside') && !target.closest('.section-navigation__item')) {
                    openMenu.classList.remove('is-active')
                    childArrow.classList.remove('active-arrow')
                }

                // if (target.closest('.inside-menu__inside')) {
                //     console.log('1')
                // }
            }
        })

    }

    openMenu()



    function popup() {
        const popupLinks = document.querySelectorAll('.popup-link');
        const body = document.querySelector('body');


        let unlock = true;

        const timeout = 800;

        if (popupLinks.length > 0) {
            for (let i = 0; i < popupLinks.length; ++i) {
                const popupLink = popupLinks[i];
                popupLink.addEventListener('click', function(e) {
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
                el.addEventListener('click', function(e) {
                    popupClose(el.closest('.popup'));
                    e.preventDefault();
                });
            }
        }

        function popupOpen(curentPopup) {
            if (curentPopup && unlock) {
                bodyLock()
                curentPopup.classList.add('open');
                curentPopup.addEventListener('click', function(e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'))

                    }
                })
            }
        }


        function bodyLock() {
            const lockPaddingValue = window.innerWidth - document.querySelector('.section-gallery').offsetWidth + 'px';

            body.style.paddingRight = lockPaddingValue
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
            setTimeout(function() {
                body.style.paddingRight = '0px';
                body.classList.remove('lock');

            }, timeout);

            unlock = false
            setTimeout(() => {
                unlock = true
            }, timeout)
        }

        document.addEventListener('keydown', function(e) {
            if (e.which === 27) {
                const popupActive = document.querySelector('.popup.open')
                popupClose(popupActive)
            }
        })
    }
    popup()




    function accordeon() {



        $('.accordion').accordion({
            header: '.interval-accordion__header',
        });


        $(function() {
            $(".accordion").accordion({

                // сворачивает
                collapsible: true,

                // активный слайд
                // active: false,
            });
        });
    };



    accordeon()

    $('.interval-accordion__header').addClass('interval-accordion__header-new')



    function allTabs() {

        let page
            // console.log(page)

        function insideTabs() {
            document.querySelectorAll('.interval-accordion__but').forEach(function(tabsBtn) {
                tabsBtn.addEventListener('click', function(e) {
                    const path = e.currentTarget.dataset.path
                        // console.log(path)

                    if (typeof page == 'undefined') {

                        let itemsGroup = document.querySelector('[data-target="one"]')
                        let itemsPage = itemsGroup.querySelectorAll('.inside__tabcontent')
                        let itemClass = itemsGroup.querySelectorAll('.interval-accordion__but')

                        itemsPage.forEach(function(allPainter) {
                            allPainter.classList.remove('inside__tabcontent-active')
                        })
                        document.querySelector(`[data-target="${path}"]`).classList.add('inside__tabcontent-active')

                        itemClass.forEach(function(painterBut) {
                            painterBut.classList.remove('active-name')
                        })

                    } else {


                        let itemsGroup = document.querySelector(`[data-target="${page}"]`)
                        let itemsPage = itemsGroup.querySelectorAll('.inside__tabcontent')
                        let itemClass = itemsGroup.querySelectorAll('.interval-accordion__but')

                        itemsPage.forEach(function(allPainter) {
                            allPainter.classList.remove('inside__tabcontent-active')
                        })
                        document.querySelector(`[data-target="${path}"]`).classList.add('inside__tabcontent-active')

                        itemClass.forEach(function(painterBut) {
                            painterBut.classList.remove('active-name')
                        })
                    }
                    const activeBut = e.target.closest('.interval-accordion__but');
                    if (activeBut) {
                        activeBut.classList.add('active-name');

                    }
                })
            })
        }
        insideTabs()



        function outsideTabs() {
            document.querySelectorAll('.catalog__tabs-btn').forEach(function(tabsBtn) {
                tabsBtn.addEventListener('click', function(e) {
                    const path = e.currentTarget.dataset.path
                    page = e.currentTarget.dataset.path
                        // console.log(path)

                    document.querySelectorAll('.outside__tabcontent').forEach(function(allPainter) {
                        allPainter.classList.remove('outside__tabcontent-active')
                            // console.log(allPainter)
                    })
                    document.querySelector(`[data-target="${path}"]`).classList.add('outside__tabcontent-active')

                    document.querySelectorAll('.catalog__tabs-btn').forEach(function(painterBut) {
                        painterBut.classList.remove('active__butt')
                    })
                    const activeBut = e.target.closest('.catalog__tabs-btn');
                    if (activeBut) {
                        activeBut.classList.add('active__butt');
                    }
                    $('.accordion').accordion("refresh");
                })
            })
        }
        outsideTabs()
    }
    allTabs()

    function showCards() {
        const btn = document.querySelector('.show-hide__events')
        btn.addEventListener('click', (e) => {
            e.preventDefault()

            let arrayCards = document.querySelectorAll('.event__info')
            let opacityCards = document.querySelectorAll('.event__opacity')
            let check = document.querySelectorAll('.opacity__card')

            if (check.length === 0) {
                console.log(check)


                arrayCards[3].classList.toggle('hide__card')
                arrayCards[4].classList.toggle('hide__card')

                setTimeout(function() {


                    opacityCards[0].classList.toggle('opacity__card')
                    opacityCards[1].classList.toggle('opacity__card')
                }, 200)


                btn.innerHTML =
                    (btn.innerHTML === 'Скрыть все') ? btn.innerHTML = 'Все события' : btn.innerHTML = 'Скрыть все';

            } else {
                opacityCards[0].classList.toggle('opacity__card')
                opacityCards[1].classList.toggle('opacity__card')


                setTimeout(function() {

                    arrayCards[3].classList.toggle('hide__card')
                    arrayCards[4].classList.toggle('hide__card')

                    btn.innerHTML =
                        (btn.innerHTML === 'Скрыть все') ? btn.innerHTML = 'Все события' : btn.innerHTML = 'Скрыть все';
                }, 300)
            }
        })
    }
    showCards()

    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758468, 37.601088],
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



        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
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

    function checkInput() {

        const regLetterName = /[0-9]/g;



        function checkValueName() {

            if (this.value.match(regLetterName)) {
                this.value = this.value.replace(regLetterName, '');
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        }


        let inputName = document.querySelector('.client__name')
        inputName.classList.add('form-control');
        inputName.addEventListener('input', checkValueName);


    }
    checkInput()

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999 99 99");
    im.mask(selector);

    new JustValidate('.form', {
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
        submitHandler: function(form) {
            let formData = new FormData(form); //объект, куда попадают все данные из формы

            let xhr = new XMLHttpRequest(); //запрос, аналог ajax


            xhr.onreadystatechange = function() { //проверка статуса отправки
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