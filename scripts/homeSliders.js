let swiperParamsMain = {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
};
let swiperParamsCatalog = {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
        nextEl: '.catalog__textbox-sliderArrowNext',
        prevEl: '.catalog__textbox-sliderArrowPrev',
    },
    pagination: {
        el: '.catalog__textbox-sliderPagination',
        type: 'progressbar',
    },
    speed: 350,
};
let swiperParamsPoster = {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 8000,
};

let slider1 = new Swiper ('._slider1', swiperParamsMain);
slider1.params.speed = 8000;

let slider2 = new Swiper ('._slider2', swiperParamsMain);
slider2.params.speed = 10000;

let slider3 = new Swiper ('._slider3', swiperParamsMain);
slider3.params.speed = 9000;

let slider4 = new Swiper ('._slider4', swiperParamsMain);
slider4.params.speed = 8000;

let slider5 = new Swiper ('._slider5', swiperParamsMain);
slider5.params.speed = 7000;

let slider6 = new Swiper ('._slider6', swiperParamsMain);
slider6.params.speed = 10000;

let slider7 = new Swiper ('._slider7', swiperParamsMain);
slider7.params.speed = 8000;

let slider8 = new Swiper ('._slider8', swiperParamsMain);
slider8.params.speed = 9000;

let slider9 = new Swiper ('._slider9', swiperParamsMain);
slider9.params.speed = 7000;

new Swiper ('.catalog__swiper', swiperParamsCatalog);

let posterSlider = new Swiper ('._poster-slider', swiperParamsPoster);