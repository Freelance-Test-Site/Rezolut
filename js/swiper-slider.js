/************************************************************************ Slider - Swiper **************************************************************************************/

new Swiper('.reviews-block-slider', {


	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 90,
	grabCursor: true,

	slideToClickedSlide: true,

	// keyboard: {
	// 	enable: true,
	// 	onlyInViewport: true,
	// 	pageUpDown: true,
	// },
	// autoHeight: true,

	watchOverflow: true,

	spaceBetween: 270,

	slidesPrGroup: 1,

	// centeredSlides: true,

	initialSlide: 1,

	// loop: true,
	// loopedSlides: 6,

	freeMode: true,

	breakpoints: {
		1366: {
			slidesPerView: 1
		},
		1024: {
			slidesPerView: 0.9,
		},
		768: {
			slidesPerView: 0.9,
		},
	}
});


/************************************************************************ Slider - Swiper **************************************************************************************/