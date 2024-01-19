"use strict"

/***************************************************Переключение между мобильной и десктопной версиями***********************************************************/
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/IOS/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
/*********************************************Активация стрелок меню*******************************************************************/
if (isMobile.any()) {
	document.body.classList.add('_touch');

	// let menuArrows = document.querySelectorAll('.menu__arrow');
	// if (menuArrows.length > 0) {
	// 	for (let index = 0; index < menuArrows.length; index++) {
	// 		const menuArrow = menuArrows[index];
	// 		menuArrow.addEventListener('click', function (e) {
	// 			menuArrow.parentElement.classList.toggle('_active');
	// 		});
	// 	}
	// }

} else {
	document.body.classList.add('_pc');
}

/**************************************************************************Меню бургер**************************************************************************************/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {

	iconMenu.addEventListener('click', function (e) {

		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
/*******************************************************************************************************************************************************************/
/**************************************************************************Скролл при клике**************************************************************************************/

const menuLinks = document.querySelectorAll('.menu__link-scroll[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenulinkClick);
	});
	function onMenulinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockVlaue = gotoBlock.getBoundingClientRect().top + scrollY;//- document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockVlaue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}
/******************************************************************************************************************************************************/