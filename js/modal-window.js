"use strict"

/********************************************************Popups-Модальные окна**********************************************************************************************/
const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 100;

if (modalLinks.length > 0) {
	for (let index = 0; index < modalLinks.length; index++) {
		const modalLink = modalLinks[index];
		modalLink.addEventListener('click', function (e) {
			const modalName = modalLink.getAttribute('href').replace('#', '');
			const curentModal = document.getElementById(modalName);
			modalOpen(curentModal);
			e.preventDefault();
		});
	}
}

const modalCloseIcon = document.querySelectorAll('.close-modal-window');
if (modalCloseIcon.length > 0) {
	for (let index = 0; index < modalCloseIcon.length; index++) {
		const el = modalCloseIcon[index];
		el.addEventListener('click', function (e) {
			modalClose(el.closest('.modal-window'));
			e.preventDefault();
		});
	}
}

function modalOpen(curentModal) {
	if (curentModal && unlock) {
		const modalActive = document.querySelector('.modal-window._open');
		if (modalActive) {
			modalClose(modalActive, false);
		} else {
			bodyLock();
		}

		curentModal.classList.add('_open');
		curentModal.addEventListener("click", function (e) {
			if (!e.target.closest('.modal-window__content')) {
				modalClose(e.target.closest('.modal-window'));
			}
		});
	}
}

function modalClose(modalActive, doUnlock = true) {
	if (unlock) {
		modalActive.classList.remove('_open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetwidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.watch === 27) {
		const modalActive = document.querySelector('.modal-window._open');
		modalClose(modalActive);
	}
});
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.MatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})
/******************************************************************************************************************************************************/