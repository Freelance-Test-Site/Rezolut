"use strict"

document.addEventListener('DOMContentLoaded', function () {
	//Объявляется переменная form, куда присваевается весь объект form по Id
	const form = document.getElementById('form');
	//далее на эту переменную вешается событие submit и форма отправляется в функцию formSend
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		// let formData = new FormData(form);
		// formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				reset.classList.remove('.sending');
			} else {
				alert('Ошибка');
				reset.classList.remove('.sending');
			}
		} else {
			alert('Заполните выделенные поля')
		}

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Проверка e-mail
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	// // Создание превью фотографии
	// const formImage = document.getElementById('formImage');
	// // Див для превью в переменную
	// const formPreview = document.getElementById('formPreview');

	//Слушаем изменения в инпуте file
	// formImage.addEventListener('change', () => {
	// 	uploadFile(formImage.files[0]);
	// });

	// function uploadFile(file) {
	// 	//проверка имён для файла
	// 	if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
	// 		alert('Разрешены только изображения.');
	// 		formImage.value = '';
	// 		return;
	// 	}

	// 	//Проверка размера файла(<2 мб)
	// 	if (file.size > 2 * 1024 * 1024) {
	// 		alert('файл должен быть менее 2 мб');
	// 		return;
	// 	}


	// 	//Загрузка изображения
	// 	var reader = new FileReader();
	// 	reader.onload = function (e) {
	// 		//Результат загрузки файла
	// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="фото">`;
	// 	};
	// 	reader.onerror = function (e) {
	// 		alert('Ошибка');
	// 	};
	// 	reader.readAsDataURL(file);
	// }
});